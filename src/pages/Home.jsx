import { useState, useEffect, useContext } from "react";
import { getAllPost } from "../services/postService";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../components/Loading";
import EditPost from "./EditPost";
import RemovePost from "./RemovePost";
import "../components/layout/home.css";
import { PostsContext } from "../context/PostContext";

const Home = () => {
  const [cargando, setCargando] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const isDarkMode = document.body.classList.contains("dark-mode");

  const { posts, setPosts } = useContext(PostsContext);

  useEffect(() => {
    async function loadPost() {
      try {
        setCargando(true);
        const respuesta = await getAllPost();
        setPosts((prev) => [...prev, ...respuesta]);
      } catch (error) {
        console.error(error.message);
        Swal.fire({
          icon: "error",
          title: "Ocurrió un error ✖️",
          text: "Lo sentimos, ocurrió un error al cargar las Cards 😞",
        });
      } finally {
        setCargando(false);
      }
    }
    loadPost();
  }, [setPosts]);

  return (
    <div>
      {cargando && <Loading />}
      {!cargando && (
        <main className="container my-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4 home-header">
                <h2>Listado de publicaciones</h2>
                <Link to="/Create" className="btn btn-primary">
                  Crear Publicación
                </Link>
              </div>

              <div className="row g-3">
                {posts.map((post) => (
                  <div key={post.id} className="col-12 col-md-6">
                    <div className="home-card h-100">
                      <div className="card-body">
                        <h3 className="card-title h5">
                          <strong>{post.title}</strong>
                        </h3>
                        <hr />
                        <p className="card-text">{post.body}</p>
                        <div className="d-flex justify-content-end gap-2">
                          <Link
                            to={`/DetailPost/${post.id}`}
                            className="btn btn-success"
                          >
                            Ver Detalles
                          </Link>
                          <button
                            className="btn btn-warning"
                            onClick={() => setCurrentPost(post)}
                          >
                            Editar
                          </button>
                          <RemovePost
                            className="btn"
                            postId={post.id}
                            setPosts={setPosts}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}
      {currentPost && (
        <EditPost
          post={currentPost}
          onClose={() => setCurrentPost(null)}
          onSave={(updatePostData) => {
            const newPosts = posts.map((e) =>
              e.id === updatePostData.id ? updatePostData : e,
            );
            setPosts(newPosts);

            Swal.fire({
              icon: "success",
              title: "Publicación actualizada",
              text: "Los cambios se guardaron correctamente",
              background: isDarkMode ? "#1f2937" : "#ffffff",
              color: isDarkMode ? "#ffffff" : "#212529",
              timer: 1500,
              showConfirmButton: false,
            });

            setCurrentPost(null);
          }}
        />
      )}
    </div>
  );
};

export default Home;
