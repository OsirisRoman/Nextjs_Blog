import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <Head>
        <title>My Blog</title>
        {/* Meta tags are useful for SEO purposes */}
        {/* <meta name="description" value="This is my blog" /> */}
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          <li>
            <Link href="/posts/first-post">
              <a>First Post</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/first-post">
              <a>Second Post</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/first-post">
              <a>Third Post</a>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
