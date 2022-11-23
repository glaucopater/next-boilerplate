import Header from '../../components/Header';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';

export default function User({ user }: any) {
  const { data: userData } = user;

  return (
    <div className={styles.container}>
      <Head>
        <title>Users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Users Page</h1>
        <div>
          <ul>
            {userData && (
              <>
                <div>{userData.id}</div>
                <div>{userData.first_name}</div>
                <div>{userData.last_name}</div>
                <div>{userData.email}</div>
                <div>
                  <Image
                    src={userData.avatar}
                    alt={'avatar'}
                    width={300}
                    height={300}
                  />
                </div>
              </>
            )}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`https://reqres.in/api/users/`);
  const users = await res.json();

  const paths = users.data.map((user: { id: string }) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths: paths, // [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  };
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: { id: any } }) {
  // params contains the user `id`.
  // If the route is like /users/1, then params.id is 1
  const res = await fetch(`https://reqres.in/api/users/${params.id}`);
  const user = await res.json();

  // Pass user data to the page via props
  return { props: { user } };
}
