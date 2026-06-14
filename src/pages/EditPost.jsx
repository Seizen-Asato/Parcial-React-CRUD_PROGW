import React, { useState, useEffect, useRef } from "react";
export default function EditPost({ post, onClose, onSave }) {
  const [titulo, setTitulo] = useState("");
  const [cuerpo, setCuerpo] = useState("");

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

  if (!post) return null;
  return (
    <div
      className="bg-dark bg-opacity-50 position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ zIndex: 1050 }}
    >
      <div className="card shadow" style={{ width: "500px" }}>
        <div className="card-body p-4">
          <h5
            className="fw-bold text-dark mb-4"
            style={{
              position: "static",
              display: "block",
              transform: "none",
              margin: "0 0 24px 0",
            }}
          >
            Editar Publicación
          </h5>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const postData = {
                id: post.id,
                title: titulo,
                body: cuerpo,
              };

              onSave(postData);
            }}
          >
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
