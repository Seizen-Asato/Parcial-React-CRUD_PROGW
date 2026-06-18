import { useState, useRef, useEffect, useContext } from "react";
import { createPost } from "../services/postService";
import { useNavigate } from "react-router-dom";
import "../components/layout/create.css";
import { PostsContext } from "../context/PostContext"; // 👈 Importá el contexto

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const titleRef = useRef(null);

  const { setPosts } = useContext(PostsContext); // 👈 Usamos el contexto

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("El título es obligatorio");
      return;
    }
    if (!body.trim()) {
      setError("El contenido es obligatorio");
      return;
    }

    try {
      setLoading(true);

      const newPost = {
        id: Date.now(),
        title,
        body,
        userId: 1,
      };

      const response = await createPost(newPost);

      const createdPostData = {
        ...newPost,
        id: response.id || newPost.id,
      };

      setPosts((prev) => [createdPostData, ...prev]);

      navigate("/");
    } catch (err) {
      setError(err.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-create">
      <h2>Crear Post</h2>
      <hr />
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            ref={titleRef}
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contenido</label>
          <textarea
            className="form-control"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Guardando..." : "Crear Post"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
