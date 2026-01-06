import Header from "@/components/Header";
import StreamCard from "@/components/StreamCard";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const mockStreams = [
    { id: "1", name: "Morning Radio", status: "LIVE", viewers: 128 },
    { id: "2", name: "Evening Talk", status: "OFFLINE" },
  ] as const;

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <h2>Live Streams</h2>

        <div className={styles.streamList}>
          {mockStreams.map((stream) => (
            <StreamCard key={stream.id} {...stream} />
          ))}
        </div>
      </main>
    </div>
  );
}
