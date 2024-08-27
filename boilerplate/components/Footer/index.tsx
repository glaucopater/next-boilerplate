import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://github.com/glaucopater/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by {['GP', 'Github', 'Netlify'].join()}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </Link>
    </footer>
  );
}
