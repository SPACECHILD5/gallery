export default function GalleryLoading() {
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
        {[0, 1].map((i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: 360,
              borderRadius: 12,
              background: "linear-gradient(90deg, #f3f4f6, #eef2ff, #f3f4f6)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.1s infinite",
              border: "1px solid #e5e7eb",
            }}
          />
        ))}
      </section>

      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: -200% 0%;
            }
          }
        `}
      </style>
    </main>
  );
}
