import Head from "next/head";
import { getPost } from "../../lib/getPost.js";

export async function getStaticProps() {
  const post = await getPost("first-post");
  return {
    props: {
      post,
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
        {/* Post title is empty by the moment because all the html is inside the post body */}
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default FirstPostPage;
