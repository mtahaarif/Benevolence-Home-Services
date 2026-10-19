/**
 * Renders structured data as `<script type="application/ld+json">` tags, one
 * per node. `<` is escaped so content in the data can never close the script
 * tag early (the approach the Next.js JSON-LD guide recommends).
 */
export function JsonLd({ data }: { data: object | readonly object[] }) {
  const nodes = Array.isArray(data) ? data : [data];
  return (
    <>
      {nodes.map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
