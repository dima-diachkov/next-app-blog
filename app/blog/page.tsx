import Link from 'next/link';
import React from 'react'

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    return response.json();
}

export default async function Blog() {

    const posts = await getData();
    console.log(posts);
    return (
        <>
            <h1>Blog</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
