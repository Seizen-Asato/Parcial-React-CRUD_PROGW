import Swal from "sweetalert2";
import { deletePost } from "../services/postService";
import { useNotScroll } from "../hooks/useNotScroll";
import { useState } from "react";
import "../components/ui/remove.css";

const RemovePost = ({ postId, setPosts }) => {
  const [blockScroll, setBlockScroll] = useState(false);

  useNotScroll(blockScroll);

  const handleDelete = async () => {
    setBlockScroll(true);

    const isDarkMode = document.body.classList.contains("dark-mode");

    const result = await Swal.fire({
      title: "¿Eliminar post?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      background: isDarkMode ? "#1f2937" : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#212529",
      willClose: () => setBlockScroll(false),
    });

    if (!result.isConfirmed) return;

    try {
      await deletePost(postId);
      const localPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const updatedPosts = localPosts.filter((post) => post.id !== postId);
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      Swal.fire({
        icon: "success",
        title: "Post eliminado",
        text: "El post fue eliminado correctamente",
        background: isDarkMode ? "#1f2937" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#212529",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el post",
        background: isDarkMode ? "#1f2937" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#212529",
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
