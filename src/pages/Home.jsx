// utilizamos los helpers en el service y ultilizaremos la unfcion que corresponda, el home al  ser la
//pagina principal, debe estar el listado y ahi se mostraran todas las cards

import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { getAllPost, updatePost } from "../services/postService";
import Swal from "sweetalert2";
import EditPost from "../components/editPost";
const Home = () => {
  const [cargando, setCargando] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  useEffect(() => {
    async function loadPost() {
      try {
        setCargando(true);
        const respuesta = await getAllPost();
        setPosts(respuesta);
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
        <main className="container my-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Listado de publicaciones</h2>
                <button className="btn btn-primary">Crear post</button>
              </div>

              <div className="row g-3">
                {posts.map((post) => (
                  <div key={post.id} className="col-12 col-md-6">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h3 className="card-title h5">{post.title}</h3>
                        <p className="card-text text-muted">{post.body}</p>
                        <div className="d-flex justify-content-end gap-2">
                          <button
                            className="btn btn-warning"
                            onClick={() => setCurrentPost(post)}
                          >
                            Editar
                          </button>
                          <button className="btn btn-danger">Eliminar</button>
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
      <EditPost
        post={currentPost}
        onClose={() => setCurrentPost(null)}
        onSave={(updatePost) => {
          
          const newPost = posts.map((e) => {
            return e.id === updatePost.id ? updatePost : e;
          });
          setPosts(newPost);
          setCurrentPost(null);
        }}
      />
    </div>
  );
};

export default Home;
