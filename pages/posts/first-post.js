import Head from "next/head";

function FirstPostPage() {
  return (
    <>
      <Head>
        <title>FirstPost - My Blog</title>
        {/* Meta tags are useful for SEO purposes */}
        {/* <meta name="description" value="This is the FirstPost page" /> */}
      </Head>
      <main>
        <h1>FirstPost</h1>
        <p>This is my first ever blog post</p>
      </main>
    </>
  );
}

export default FirstPostPage;
