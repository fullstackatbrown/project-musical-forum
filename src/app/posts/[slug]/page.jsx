import { client } from '../../lib/sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import './post.css'

export const revalidate = 60

export default async function PostPage({ params }) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    _createdAt
  }`

  const post = await client.fetch(query, { slug: params.slug })

  if (!post) {
    notFound()
  }

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <p className="date">{new Date(post._createdAt).toDateString()}</p>
      <div className="body">
        <PortableText value={post.body} />
      </div>
    </div>
  )
}
