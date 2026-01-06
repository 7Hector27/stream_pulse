import Header from "@/components/Header";
import styles from "./index.module.scss";

const AnalyticsPage = () => {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <h2 className={styles.title}>Analytics</h2>
        <p className={styles.subtitle}>Viewer metrics and historical trends</p>

        <div className={styles.chart}>
          Chart placeholder (viewer count over time)
        </div>

        <div className={styles.summary}>
          <div className={styles.card}>
            <div className={styles.label}>Peak Viewers</div>
            <div className={styles.value}>184</div>
          </div>

          <div className={styles.card}>
            <div className={styles.label}>Average Viewers</div>
            <div className={styles.value}>92</div>
          </div>

          <div className={styles.card}>
            <div className={styles.label}>Data Points</div>
            <div className={styles.value}>144</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AnalyticsPage;
