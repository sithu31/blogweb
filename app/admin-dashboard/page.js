'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../globals.css';

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: '',
    slug: '',
    summary: '',
    content: '',
    imageFile: null
  });
  const [viewBlog, setViewBlog] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user !== 'admin') {
      alert('Access denied. Admins only.');
      router.push('/login/admin');
      return;
    }

    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  const handleChange = (e, field) => {
    const value = field === 'imageFile' ? e.target.files[0] : e.target.value;
    setNewBlog({ ...newBlog, [field]: value });
  };

  const handleAdd = () => {
    const { title, slug, summary, content, imageFile } = newBlog;
    if (!title || !slug || !summary || !content || !imageFile) {
      alert('All fields including image are required.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const image = reader.result;

      const blogToAdd = { title, slug, summary, content, image };

      const alreadyExists = blogs.some((blog) => blog.slug === slug);
      if (alreadyExists) {
        alert('Slug already exists! Please use a unique one.');
        return;
      }

      const updatedBlogs = [...blogs, blogToAdd];
      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      setNewBlog({
        title: '',
        slug: '',
        summary: '',
        content: '',
        imageFile: null
      });
    };

    reader.readAsDataURL(imageFile);
  };

  const handleDelete = (slug) => {
    const updatedBlogs = blogs.filter((blog) => blog.slug !== slug);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    if (viewBlog?.slug === slug) setViewBlog(null);
  };

  const handleView = (blog) => {
    setViewBlog(blog);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/');
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Slug</th>
            <th>Image</th>
            <th>Summary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.slug}>
              <td>{blog.title}</td>
              <td>{blog.slug}</td>
              <td><img src={blog.image} alt="thumbnail" width="80" /></td>
              <td>{blog.summary.slice(0, 50)}...</td>
              <td>
                <Link href={`/updateblogs/${blog.slug}`} className="edit-btn">Edit</Link>
                <button onClick={() => handleDelete(blog.slug)} className="delete-btn">Delete</button>
                <button onClick={() => handleView(blog)} className="view-btn">View</button>
              </td>
            </tr>
          ))}

          <tr>
            <td>
              <input
                type="text"
                placeholder="Title"
                value={newBlog.title}
                onChange={(e) => handleChange(e, 'title')}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Slug"
                value={newBlog.slug}
                onChange={(e) => handleChange(e, 'slug')}
              />
            </td>
            <td>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleChange(e, 'imageFile')}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Summary"
                value={newBlog.summary}
                onChange={(e) => handleChange(e, 'summary')}
              />
              <input
                type="text"
                placeholder="Content"
                value={newBlog.content}
                onChange={(e) => handleChange(e, 'content')}
              />
            </td>
            <td>
              <button className="add-btn" onClick={handleAdd}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>

      {viewBlog && (
        <div className="blog-card admin-preview">
          <img src={viewBlog.image} alt={viewBlog.title} />
          <div className="card-content">
            <h3>{viewBlog.title}</h3>
            <p><strong>Summary:</strong> {viewBlog.summary}</p>
            <p><strong>Content:</strong> {viewBlog.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
