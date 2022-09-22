import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostListPageProps {
    posts: Post[]
}

interface Post{
    id: string
    title: string
    author: string
    description: string
    createdAt: number
    updatedAt: number
    imageUrl: string
}

export default function PostListPage({posts}: PostListPageProps) {
    // console.log(posts);
  return (
    <ul>
        {
            posts.map(post=>{
                return (
                  <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                      <a>{post.title}</a>
                    </Link>
                  </li>
                );
            })
        }
    </ul>
  )
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  // console.log('Static props');

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();

  // console.log(data);

  return {
    props: {
        posts: data.data
    },
  };
};
