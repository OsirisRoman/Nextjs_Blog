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
      </main>
    </>
  );
}

export default HomePage;
