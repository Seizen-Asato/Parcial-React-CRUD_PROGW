export async function fetchApi(url, option = {}) {
  try {
    const response = await fetch(url, option);
    if (!response.ok) {
      throw new Error(
        `Error en el HTTP: ${response.status} ${response.status.text}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error en la llamada a la API:", error);
    throw error;
  }
}
