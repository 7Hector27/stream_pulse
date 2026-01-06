import Link from "next/link";
import styles from "./StreamCard.module.scss";

type StreamCardProps = {
  id: string;
  name: string;
  status: "LIVE" | "OFFLINE";
  viewers?: number;
};

const StreamCard = ({ id, name, status, viewers }: StreamCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{name}</h3>
        <span
          className={`${styles.status} ${
            status === "LIVE" ? styles.live : styles.offline
          }`}
        >
          {status}
        </span>
      </div>

      <div className={styles.meta}>
        {status === "LIVE" ? (
          <span>{viewers} viewers</span>
        ) : (
          <span>Offline</span>
        )}
      </div>

      <Link href={`/streams/${id}`} className={styles.link}>
        View Stream →
      </Link>
    </div>
  );
};

export default StreamCard;
