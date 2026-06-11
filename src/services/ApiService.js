// Hacemos un helper, para generar el fetch y luego al helper llevarlo a los metodos "GET,PUT,POTS,DELETE" en el cual
// cuando vamos a pasar por parametros url y option(sirven para definir el cuepro de la funcion y si no pasamos options )
// por defecto da GET

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
