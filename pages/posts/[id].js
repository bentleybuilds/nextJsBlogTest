import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

import Layout from '../../components/layout';

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{__html:postData.contentHtml }} />
      </Layout>
    );
  }

export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log('paths:', paths)
    return {
      paths,
      fallback: false,
    };
}
