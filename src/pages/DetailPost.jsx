import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { getIdPost } from "../services/postService";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNotScroll } from "../hooks/useNotScroll";
import { PostsContext } from "../context/PostContext";
import Swal from "sweetalert2";
import "../components/layout/detail.css";

const DetailPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const back = useNavigate();
  useNotScroll(!!post);
  const isDarkMode = document.body.classList.contains("dark-mode");
  const { posts } = useContext(PostsContext);

  useEffect(() => {
    async function loadDetails() {
      try {
        const localPost = posts.find((p) => String(p.id) === String(id));
        if (localPost) {
          setPost(localPost);
          return;
        }
        const response = await getIdPost(id);
        setPost(response);
      } catch (error) {
        console.error("Ocurrio un error en y no se puede ver la card", error);
        Swal.fire({
          title: "Ocurrio un error",
          text: "Lo sentimos no podemos mostrar la card, intentelo de nuevo",
          icon: "error",
          background: isDarkMode ? "#1f2937" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#212529",
          timer: 3000,
          showConfirmButton: false,
          willClose: () => {
            back("/Home");
          },
        }).then((result) => {
          if (result.isConfirmed) {
            back("/Home");
          }
        });
      }
    }
    loadDetails();
  }, [id]);

  if (!post) return <Loading />;
  return (
    <div>
      <div className="detail-container">
        <div className="detail-card ">
          <div className="card-head text-center">
            <h3>{post.title}</h3>
          </div>
          <hr />
          <div className="card-body">
            <p>{post.body}</p>
          </div>
          <div className="card-footer text-center">
            <Link to="/" className=" btn btn-outline-sucess px-4">
              Volver a la Lista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
