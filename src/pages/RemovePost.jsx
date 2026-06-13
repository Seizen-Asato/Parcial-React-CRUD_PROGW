import Swal from "sweetalert2";
import { deletePost } from "../services/postService";

const RemovePost = () => {
  const handleDelete = async (id) => {
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
      await deletePost(id);

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
    }
  };

  return <div>Remove Post</div>;
};

export default RemovePost;
