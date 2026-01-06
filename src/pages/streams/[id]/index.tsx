import { useRouter } from "next/router";
import Header from "@/components/Header";

import styles from "./index.module.scss";

const StreamDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("Stream ID:", id);

  return (
    <>
      <Header />

      <main className={styles.container}>
        <button onClick={() => router.push("/")} className={styles.back}>
          ← Back to Streams
        </button>
        <h2 className={styles.title}>Morning Radio Show</h2>
        <div className={styles.playerWrapper}>
          <iframe
            title="Live Stream"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className={styles.player}
          />
        </div>
        <div className={styles.meta}>
          <span>
            Status: <strong className={styles.statusLive}>LIVE</strong>
          </span>
          <span>
            Viewers: <strong>128</strong>
          </span>
        </div>
      </main>
    </>
  );
};

export default StreamDetailPage;
