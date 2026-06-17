import React, { useState, useEffect, useRef } from "react";
import { useNotScroll } from "../hooks/useNotScroll";
import "../components/layout/edit.css";
export default function EditPost({ post, onClose, onSave }) {
  const [titulo, setTitulo] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [errores, setErrores] = useState({ tituloError: "", cuerpoError: "" });
  useNotScroll(!!post);
  const tituloRef = useRef(null);

  useEffect(() => {
    if (post) {
      setTitulo(post.title);
      setCuerpo(post.body);
    }
  }, [post]);

  useEffect(() => {
    if (post && tituloRef.current) {
      tituloRef.current.focus();
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let erroresDetectados = { tituloError: "", cuerpoError: "" };
    let errorExistente = false;

    if (titulo.trim() === "") {
      erroresDetectados.tituloError = "El titulo es obligatorio";
      errorExistente = true;
    }

    if (cuerpo.trim() === "") {
      erroresDetectados.cuerpoError = "El cuerpo es obligatorio";
      errorExistente = true;
    }

    if (errorExistente) {
      setErrores(erroresDetectados);
      return;
    }

    const postData = {
      id: post.id,
      title: titulo,
      body: cuerpo,
    };

    onSave(postData);

    setErrores({ tituloError: "", cuerpoError: "" });
    onSave({ ...post, title: titulo, body: cuerpo });
  };

  if (!post) return null;
  return (
    <div
      className="bg-dark bg-opacity-50 position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ zIndex: 1050 }}
    >
      <div className="edit-card shadow" style={{ width: "500px" }}>
        <div className="card-body p-4">
          <h5
            className="card-title fw-bold  mb-4"
            style={{
              position: "static",
              display: "block",
              transform: "none",
              margin: "0 0 24px 0",
            }}
          >
            Editar Publicación
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold text-secondary">
                Título
              </label>

              <input
                ref={tituloRef}
                type="text"
                className="form-control"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <small className="text-danger d-block mt-1">
                {errores.tituloError}
              </small>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold text-secondary">
                Cuerpo
              </label>

              <textarea
                className="form-control"
                rows={4}
                value={cuerpo}
                onChange={(e) => setCuerpo(e.target.value)}
              />
              <small className="text-danger d-block mt-1">
                {errores.cuerpoError}
              </small>
            </div>

            <div className="d-flex justify-content-end gap-2 pt-2">
              <button className="btn btn-success">Guardar</button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
