'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditBlogPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    title: '',
    image: '',
    summary: '',
    content: '',
  });

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const foundBlog = storedBlogs.find((b) => b.slug === slug);
    if (foundBlog) {
      setBlog(foundBlog);
      setUpdatedData({
        title: foundBlog.title,
        image: foundBlog.image,
        summary: foundBlog.summary,
        content: foundBlog.content,
      });
    }
  }, [slug]);

  const handleChange = (e, field) => {
    setUpdatedData({ ...updatedData, [field]: e.target.value });
  };

  const handleUpdate = () => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = storedBlogs.map((b) =>
      b.slug === slug ? { ...b, ...updatedData, slug } : b
    );
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    router.push('/admin-dashboard'); 
  };

  if (!blog) {
    return <p>Loading blog data...</p>;
  }

  return (
  <div className="edit-container">
    <h1>Edit Blog</h1>

    <label>
      Title:
      <input
        type="text"
        value={updatedData.title}
        onChange={(e) => handleChange(e, 'title')}
      />
    </label>

    <label>
      Image URL:
      <input
        type="text"
        value={updatedData.image}
        onChange={(e) => handleChange(e, 'image')}
      />
    </label>

    <label>
      Summary:
      <textarea
        value={updatedData.summary}
        onChange={(e) => handleChange(e, 'summary')}
      />
    </label>
    <button onClick={handleUpdate}>Save Changes</button>
  </div>
);

}