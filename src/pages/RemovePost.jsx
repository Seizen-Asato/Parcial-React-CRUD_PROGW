import Swal from "sweetalert2";
import { deletePost } from "../services/postService";
import { useNotScroll } from "../hooks/useNotScroll";
import { useState } from "react";

const RemovePost = ({ postId, setPosts }) => {
  const [blockScroll, setBlockScroll] = useState(false);
  useNotScroll(blockScroll);

  const handleDelete = async () => {
    setBlockScroll(true);

    const result = await Swal.fire({
      title: "¿Eliminar post?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      willClose: () => setBlockScroll(false),
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
    } finally {
      setBlockScroll(false);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Eliminar
    </button>
  );
};

export default RemovePost;
