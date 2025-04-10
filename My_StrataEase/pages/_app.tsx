import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Link href="/">🏠 Home</Link>
        <Link href="/meetings">📅 Meetings</Link>
        <Link href="/payments">💳 Payments</Link>
        <Link href="/maintenance">🛠 Maintenance</Link>
        <Link href="/contact">📩 Contact</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
