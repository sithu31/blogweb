// components/BlogList.js
import Link from 'next/link';

export default function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Link key={blog.slug} href={`/${blog.slug}`} className="blog-card">
          <div className="card-content">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p style={{ padding: '0 1rem 1rem', fontSize: '0.9rem' }}>{blog.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
