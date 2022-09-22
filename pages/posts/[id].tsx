import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface DetailPostPageProps {
    post: any
}

export default function App ({post}: DetailPostPageProps) {
  return (
    <div>
      <h1>Detail Post</h1>
      <h2>{post?.title}</h2>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () =>{
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();
    console.log('Static path');

    return {
      paths: data.data.map((post: any) => ({ params: { id: post.id } })),
      fallback: false,
    };
}

export const getStaticProps: GetStaticProps<DetailPostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('Static props', context.params?.id);

  const id = context.params?.id;

  if(!id){
    return {
        notFound: true
    }
  }

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${id}`);
  const data = await response.json();

  console.log(data);

  return {
    props: {
      post: data
    },
  };
};