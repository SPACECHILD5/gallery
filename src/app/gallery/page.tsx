type Item = { id: string; url: string; animal: "cat" | "dog" };

async function fetchRandom(animal: "cat" | "dog"): Promise<Item> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
  const res = await fetch(`${base}/api/v1/random?animal=${animal}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to load");
  const data = await res.json();

  return { id: data.id, url: data.url, animal: data.animal };
}

export default async function GalleryPage() {
  // 전환 시 로딩이 보이도록 약간의 의도적 지연(데모)
  await new Promise((r) => setTimeout(r, 500));

  const [cat, dog] = await Promise.all([
    fetchRandom("cat"),
    fetchRandom("dog"),
  ]);

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
        Gallery
      </h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          maxWidth: 1000,
        }}
      >
        {[cat, dog].map((item) => (
          <figure key={item.id} style={{ margin: 0 }}>
            <img
              src={item.url}
              alt={`${item.animal}-${item.id}`}
              width={480}
              height={360}
              style={{
                borderRadius: 12,
                objectFit: "cover",
                width: "100%",
                height: 360,
              }}
            />
            <figcaption
              style={{ fontSize: 12, color: "#6b7280", marginTop: 8 }}
            >
              {item.animal} • {item.id}
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
