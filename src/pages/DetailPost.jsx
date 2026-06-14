import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { getIdPost } from "../services/postService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const DetailPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const back = useNavigate();

  useEffect(() => {
    async function loadDetails() {
      try {
        const response = await getIdPost(id);
        setPost(response);
      } catch (error) {
        console.error("Ocurrio un error en y no se puede ver la card", error);
        Swal.fire({
          title: "Ocurrio un error",
          text: "Lo sentimos no podemos mostrar la card, intentelo de nuevo",
          icon: "error",
          draggable: true,
          showDenyButton: true,
          confirmButtonText: "Volver al listado",
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
      <div className="container mt-4">
        <div className="card shadow-lg border-0">
          <div className="card-head text-center">
            <h3>{post.title}</h3>
          </div>
          <div className="card-body">
            <p>{post.body}</p>
          </div>
          <div className="card-footer text-center">
            <Link to="/Home" className=" btn btn-outline-sucess px-4">
              Volver a la Lista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
