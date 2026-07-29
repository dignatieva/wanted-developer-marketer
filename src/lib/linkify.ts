export type Segment = { text: string; href?: string };

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Splits a paragraph on known company names so they can be rendered as real
 * anchors rather than pasted in as raw HTML.
 *
 * `used` is passed in and shared across one charge's paragraphs, so each company
 * links on its first mention only — linking every "Precoro" on the page would
 * turn the body copy into a field of underlines.
 */
export function linkify(
  text: string,
  links: Record<string, string>,
  used: Set<string> = new Set()
): Segment[] {
  const terms = Object.keys(links)
    .filter((term) => !used.has(term))
    // Longest first, so a name containing another name still matches whole.
    .sort((a, b) => b.length - a.length);

  if (terms.length === 0) return [{ text }];

  const pattern = new RegExp(`\\b(${terms.map(escapeRegExp).join('|')})\\b`, 'g');
  const out: Segment[] = [];
  let last = 0;

  for (const match of text.matchAll(pattern)) {
    const term = match[0];
    const at = match.index ?? 0;

    // Second mention inside the same paragraph: leave it as plain text. Not
    // advancing `last` keeps it part of the next text segment.
    if (used.has(term)) continue;
    used.add(term);

    if (at > last) out.push({ text: text.slice(last, at) });
    out.push({ text: term, href: links[term] });
    last = at + term.length;
  }

  if (last < text.length) out.push({ text: text.slice(last) });
  return out;
}
