// utilizamos los helpers en el service y ultilizaremos la unfcion que corresponda, el home al  ser la
//pagina principal, debe estar el listado y ahi se mostraran todas las cards

import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { getAllPost } from "../services/postService";
import Swal from "sweetalert2";
const Home = () => {
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    async function loadPost() {
      try {
        setCargando(true);
        getAllPost();
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
  return <div>{cargando === true ? <Loading /> : false}</div>;
};

export default Home;
