import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      post: {
        title: "First Post",
        body: "My forst post, as static props.",
      },
    },
  };
}

function FirstPostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
        {/* Meta tags are useful for SEO purposes */}
        {/* <meta name="description" value="This is the FirstPost page" /> */}
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export default FirstPostPage;
