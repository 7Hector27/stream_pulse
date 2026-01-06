import Header from "@/components/Header";
import StreamCard from "@/components/StreamCard";

export default function Home() {
  const mockStreams = [
    { id: "1", name: "Morning Radio", status: "LIVE", viewers: 128 },
    { id: "2", name: "Evening Talk", status: "OFFLINE" },
  ] as const;

  return (
    <>
      <Header />

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 16px" }}>
        <h2>Live Streams</h2>

        <div style={{ display: "grid", gap: "16px", marginTop: "16px" }}>
          {mockStreams.map((stream) => (
            <StreamCard key={stream.id} {...stream} />
          ))}
        </div>
      </main>
    </>
  );
}
