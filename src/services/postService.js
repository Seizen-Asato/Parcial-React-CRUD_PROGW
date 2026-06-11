// Lllamamos a la funcion fetchApi, manejamos los errors en el response, hacemos las funciones de
// de cada parte del crud "GETALL,GET:ID,POST,PUT,DELETE"
// Cree un "postData" que habara que hacer un obejto json en alguna funcion del components cuadno creemos el formulario por ejemplo
// Y ahi se guardara toda la infromacion

import { fetchApi } from "./ApiService";

export async function getAllPost() {
  return fetchApi("https://jsonplaceholder.typicode.com/posts");
}

export async function getIdPost(id) {
  return fetchApi(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export async function createPost(postData) {
  return fetchApi("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
}

export async function updatePost(id, postData) {
  return fetchApi(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
}

export async function deletePost(id) {
  return fetchApi(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
}
