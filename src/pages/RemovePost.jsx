import Swal from "sweetalert2";
import { deletePost } from "../services/postService";

const RemovePost = ({ postId, setPosts }) => {
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "¿Eliminar post?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
      await deletePost(postId);

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

      Swal.fire({
        icon: "success",
        title: "Post eliminado",
        text: "El post fue eliminado correctamente",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el post",
      });
      console.error("Error al eliminar la Card", error);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Eliminar
    </button>
  );
};

export default RemovePost;
