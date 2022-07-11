import Head from "next/head";
import Drawing from "../components/Drawing";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>HELLO!</h1>
      <Drawing />
    </div>
  );
}
