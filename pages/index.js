import Head from "next/head";

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
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
