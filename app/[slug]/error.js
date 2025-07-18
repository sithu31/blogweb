'use client';

export default function BlogError({ error, reset }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
