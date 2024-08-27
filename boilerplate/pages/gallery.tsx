import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Gallery() {
  const cardImageProps = {
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC',
    width: 180,
    height: 100,
    alt: 'demo',
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="gallery of pocs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link
            href="https://gifted-snyder-a8726c.netlify.app/"
            className={styles.card}
          >
            <h2>shooter-game</h2>
            <Image className={styles.cardImage} {...cardImageProps} />
            <p>
              First POC of a shooter game. React statefull approach, JS. Similar
              to Asteroids.
            </p>
          </Link>
          <a
            href="https://vitets-react-game.netlify.app/"
            className={styles.card}
          >
            <h2>vitets-react-game</h2>
            <Image className={styles.cardImage} {...cardImageProps} />
            <p>
              Second attempt of a modular shooter game. Vite+TS, React + hooks
              approach (mostly hooks), more sounds, in-game menu, mobile
              controls, power-ups.
            </p>
          </a>
          <Link
            href="https://chamonix-maps.netlify.app/"
            className={styles.card}
          >
            <h2>Chamonix Maps</h2>
            <Image className={styles.cardImage} {...cardImageProps} />
            <p>
              Chamonix Maps SPA implemented with React, Redux, React Router,
              Styled Components
            </p>
          </Link>
          <Link
            href="https://amazing-yalow-966cc3.netlify.app/"
            className={styles.card}
          >
            <h2>Covid-19 Vaccination </h2>
            <Image className={styles.cardImage} {...cardImageProps} />
            <p>Covid-19 Vaccination charts by country </p>
          </Link>
          <Link
            href="https://taupe-lamington-c1e102.netlify.app/"
            className={styles.card}
          >
            <h2>Trello Clone</h2>
            <Image className={styles.cardImage} {...cardImageProps} />
            <p>A Trello clone with React</p>
          </Link>
          <Link
            href="https://sensational-gecko-5e200b.netlify.app/"
            className={styles.card}
          >
            <h2>Negative space</h2>
            <Image className={styles.cardImage} {...cardImageProps} />
            <p>Webapp to slice picture into smaller printable tiles</p>
          </Link>
          <Link
            href="https://glittery-bavarois-ff123a.netlify.app/"
            className={styles.card}
          >
            <h2>Arigato Mr. Roboto</h2>
            <Image className={styles.cardImage} {...cardImageProps} />
            <p>
              Webcomponents base app with different library and frameworks
              (React, Vue)
            </p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
