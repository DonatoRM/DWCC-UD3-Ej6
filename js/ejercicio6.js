// Expresión regular para concretar el formato de la fecha de nacimiento
const expresionRegular = /^\d{2}-\d{2}-\d{4}$/;
let resultado; // Variable en donde se almacenarán los resultados obtenidos
const fechaNacimiento = window.prompt("Introduzca la fecha del cumpleaños (dd-mm-aaaa)");
// Comprobamos el valor introducido con la expresión regular
if (expresionRegular.test(fechaNacimiento)) {
  //Separamos el día, mes y año de la fecha de nacimiento
  let arrayFechaNacimiento = fechaNacimiento.split("-");
  // Creamos la fecha de nacimiento, pero en formato anglosajón
  let fechaNacimientoUSA = arrayFechaNacimiento[2] + "-" + arrayFechaNacimiento[1] + "-" + arrayFechaNacimiento[0];
  // Comprobamos si la fecha anglosajona es correcta o no
  if (Date.parse(fechaNacimientoUSA)) {
    // Pedimos el día, mes y año de la fecha actual
    const objetoFechaActual = new Date();
    const dia = objetoFechaActual.getTime();
    const mes = objetoFechaActual.getMonth();
    const anyo = objetoFechaActual.getFullYear();
    // Mediante la diferencia entre los meses y los días sabemos la fecha del próximo cumpleaños
    const restaMeses = mes - arrayFechaNacimiento[1] - 1;
    const restaDias = dia - arrayFechaNacimiento[0];
    let anhoCumple;
    let mesCumple;
    let diaCumple;
    if (restaMeses < 0) {
      anhoCumple = anyo;
      mesCumple = arrayFechaNacimiento[1] - 1;
      diaCumple = arrayFechaNacimiento[0];
    } else if (restaMeses > 0) {
      anhoCumple = anyo + 1;
      mesCumple = arrayFechaNacimiento[1] - 1;
      diaCumple = arrayFechaNacimiento[0];
    } else if (restaMeses == 0) {
      if (restaDias < 0) {
        anhoCumple = anyo + 1;
        mesCumple = arrayFechaNacimiento[1] - 1;
        diaCumple = arrayFechaNacimiento[0];
      } else if (restaDias > 0) {
        anhoCumple = anyo;
        mesCumple = arrayFechaNacimiento[1] - 1;
        diaCumple = arrayFechaNacimiento[0];
      } else {
        anhoCumple = anyo;
        mesCumple = mes;
        diaCumple = dia;
      }
    }
    // Instanciamos el objeto del próximo cumpleaños para sacar así el día de la semana
    const objetoCumple = new Date(anhoCumple, mesCumple, diaCumple);
    // Mediante los siguientes arrays traducimos al castellano los días del mes y de la semana
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    // Solicitamos el día de la semana al objeto de la fecha del nuevo cumpleaños
    resultado = "Día de la semana: " + diasSemana[objetoCumple.getDay()] + "\n";
    // Concremos la fecha del nuevo cumpleaños
    resultado += "El próximo cumpleaños será el " + diaCumple + "-" + meses[mesCumple] + "-" + anhoCumple + "\n";
  } else {
    resultado = "Fecha introducida incorrecta";
  }
} else {
  resultado = "Fecha introducida incorrecta";
}
// Mostramos el resultado en pantalla mediante una ventana emergente
alert(resultado);
