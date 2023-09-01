import React from 'react'

type Props = {
    params: {
        id: string
    }
}

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return response.json();
}

export function generateMetadata({ params: { id } }: Props) {
    return {
        title: id,
    }
}

export default async function Post({ params: { id } }: Props) {
    const post = await getData(id)
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}
