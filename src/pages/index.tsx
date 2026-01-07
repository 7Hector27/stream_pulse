import { useQuery } from "@tanstack/react-query";

import Header from "@/components/Header";
import StreamCard from "@/components/StreamCard";

import { fetchStreams, Stream } from "@/lib/api";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const {
    data: streams,
    isLoading,
    isError,
  } = useQuery<Stream[]>({
    queryKey: ["streams"],
    queryFn: fetchStreams,
  });

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <h2>Live Streams</h2>

        {streams && (
          <div className={styles.streamList}>
            {streams.map((stream) => (
              <StreamCard key={stream.id} {...stream} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
