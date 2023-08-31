class UseService {
  // Método estático para guardar los datos del formulario
  static save(formData) {
    console.log("formData desde el service", formData);

    // return fetch("url_de_tu_api", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Error al guardar los datos.");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Aquí puedes manejar la respuesta del servidor si es necesario
    //     console.log("Datos guardados con éxito:", data);
    //     return data; // Puedes devolver cualquier dato que desees
    //   })
    //   .catch((error) => {
    //     console.error("Error al guardar los datos:", error);
    //     throw error;
    //   });
  }
}

export default UseService;
