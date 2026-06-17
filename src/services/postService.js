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
