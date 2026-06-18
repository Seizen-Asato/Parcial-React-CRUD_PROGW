import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { getAllPost, updatePost } from "../services/postService";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import EditPost from "./EditPost";
import RemovePost from "./RemovePost";
import "../components/layout/home.css";
const Home = () => {
  const [cargando, setCargando] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const isDarkMode = document.body.classList.contains("dark-mode");
  useEffect(() => {
    async function loadPost() {
      try {
        setCargando(true);
        const respuesta = await getAllPost();
        const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
        setPosts([...localPosts, ...respuesta]);
      } catch (error) {
        console.error(error.message);
        Swal.fire({
          icon: "error",
          title: "Ocurrio un error ✖️",
          text: "Lo sentimos, ocurro un error al cargar las Cards 😞",
        });
      } finally {
        setCargando(false);
      }
    }
    loadPost();
  }, []);
  return (
    <div>
      {cargando === true && <Loading />}
      {!cargando && (
        <main className="container my-4  ">
          <div className="row g-4">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4  home-header">
                <h2>Listado de publicaciones</h2>
                <Link to="/Create" className="btn btn-primary">
                  Crear Publicación
                </Link>
              </div>

              <div className="row g-3">
                {posts.map((post) => (
                  <div key={post.id} className="col-12 col-md-6">
                    <div className="home-card h-100 ">
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
          onSave={async (updatePostData) => {
            try {
              const localPosts =
                JSON.parse(localStorage.getItem("posts")) || [];
              const isLocal = localPosts.some(
                (p) => p.id === updatePostData.id,
              );

              if (isLocal) {
                const updatedLocalPosts = localPosts.map((post) =>
                  post.id === updatePostData.id ? updatePostData : post,
                );
                localStorage.setItem(
                  "posts",
                  JSON.stringify(updatedLocalPosts),
                );
              } else {
                console.warn(
                  "Post de la API: no se puede actualizar en el servidor.",
                );
              }
              const newPosts = posts.map((e) =>
                e.id === updatePostData.id ? updatePostData : e,
              );
              setPosts(newPosts);

              Swal.fire({
                icon: "success",
                title: "Publicación actualizada",
                text: isLocal
                  ? "Los cambios se guardaron correctamente"
                  : "Solo se actualizó localmente (la API no permite edición)",
                background: isDarkMode ? "#1f2937" : "#ffffff",
                color: isDarkMode ? "#ffffff" : "#212529",
                timer: 1500,
                showConfirmButton: false,
              });

              setCurrentPost(null);
            } catch (error) {
              console.error("Error al actualizar:", error);
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo actualizar la publicación",
                background: isDarkMode ? "#1f2937" : "#ffffff",
                color: isDarkMode ? "#ffffff" : "#212529",
              });
            }
          }}
        />
      )}
    </div>
  );
};

export default Home;
