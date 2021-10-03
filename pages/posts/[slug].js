import Head from "next/head";
import { getPost, getAvailableSlugs } from "../../lib/getPost.js";

export async function getStaticPaths() {
  const slugs = await getAvailableSlugs();
  return {
    paths: slugs.map(slug => ({
      params: {
        slug,
      },
    })),
    // paths: [
    //   {
    //     params: {
    //       slug: "first-post",
    //     },
    //   },
    //   {
    //     params: {
    //       slug: "second-post",
    //     },
    //   },
    // ],
    //The fallback: false property tells nextjs that if
    //the path do not find any match, the 404 not
    //found page should be showed up
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
}

function PostPage({ post }) {
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
        <p>{post.date}</p>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;
