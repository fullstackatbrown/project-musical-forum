// app/posts/page.js
import { client } from '../lib/sanity'
import Link from 'next/link'
import './posts.css' // Importing CSS from the same folder

const PostsPage = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    excerpt,
    slug
  }`

  const posts = await client.fetch(query)

  return (
    <div className="container">
      <h1 className="header">All Blog Posts</h1>
      <div className="postsGrid">
        {posts.map(post => (
          <div key={post._id} className="postCard">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/posts/${post.slug.current}`} className="readMore">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsPage