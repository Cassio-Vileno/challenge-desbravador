import SeachUser from "@/components/SearchUser";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SeachUser />
    </main>
  );
}
