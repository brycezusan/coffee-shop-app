function formatearMoneda (moneda){
  return moneda.toLocaleString("es-PE", {
    style: "currency",
    currency: "PEN",
  });
};

function formatearFecha (fecha){
  const nuevaFecha = Date(fecha);
  const fechaNueva = new Date(nuevaFecha);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return fechaNueva.toLocaleString("es-PE", options);
};

export {
  formatearFecha,
  formatearMoneda
}
