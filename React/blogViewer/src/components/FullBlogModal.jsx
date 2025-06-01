export default function FullBlogModal({blog, onClose}) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}