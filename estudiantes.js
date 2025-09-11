const estudiantes = [
  { id: 1, nombre: "Ana", carrera: "Ingeniería", promedio: 8.7, materiasAprobadas: 32 },
  { id: 2, nombre: "Luis", carrera: "Computación", promedio: 9.2, materiasAprobadas: 36 },
  { id: 3, nombre: "Marta", carrera: "Computación", promedio: 7.8, materiasAprobadas: 28 },
  { id: 4, nombre: "Pedro", carrera: "Ingeniería", promedio: 8.3, materiasAprobadas: 34 },
  { id: 5, nombre: "Carlos", carrera: "Computación", promedio: 9.5, materiasAprobadas: 38 },
  { id: 6, nombre: "Sofia", carrera: "Matemáticas", promedio: 8.9, materiasAprobadas: 30 }
];

const calificaciones = [85, 92, 78, 90, 65, 88, 72, 95, 81, 79];

function filtrarPorCarrera(carrera) {
  return function (array) {
    return array.filter(function (obj) {
      if ("carrera" in obj && obj.carrera === carrera) {
        return true;
      } else {
        return false;
      }
    });
  };
}

function filtrarPorPromedio(minimo) {
  return function (array) {
    return array.filter(function (obj) {
      if ("promedio" in obj && obj.promedio >= minimo) {
        return true;
      } else {
        return false;
      }
    });
  };
}

function mapearNombrePromedio(array) {
  return array.map(function (obj) {
    return { nombre: obj.nombre, promedio: obj.promedio };
  });
}

function filtrarPorMaterias(obj) {
  if ("materiasAprobadas" in obj && obj.materiasAprobadas >= 30 ) {
    return true;
  } 
  else {
    return false;
  }
}


// 1.1. Obtener un array con solo los estudiantes de Computación
const estudiantesComputacion = estudiantes.filter(alumnos => alumnos.carrera == "Computación");
console.log("\nESTUDIANTES DE COMPUTACION\n");
console.log("Array Filtrado\n", estudiantesComputacion);


// 1.2. Obtener estudiantes con promedio mayor o igual a 8.5
const estudiantesDestacados = estudiantes.filter(alumnos => alumnos.promedio >= 8.5);
console.log("\nESTUDIANTES DESTACADOS\n");
console.log("Array Filtrado\n", estudiantesDestacados);


// 1.3. Obtener estudiantes que hayan aprobado más de 30 materias
console.log("\nESTUDIANTES AVANZADOS\n");
const estudiantesAvanzados = estudiantes.filter(filtrarPorMaterias);
console.log("Array Filtrado\n", estudiantesAvanzados);


// 2.1. Crear un array con solo los nombres de todos los estudiantes
const nombresEstudiantes = estudiantes.map(function (obj) {
  if ("nombre" in obj && typeof obj.nombre == "string" ) {
    return obj.nombre;
  } 
  else {
    return false;
  }
});

console.log("\nNOMBRES DE ESTUDIANTES\n");
console.log("Array Filtrado\n", nombresEstudiantes);

// 2.2. Crear un array de objetos con nombre y promedio de cada estudiante
const promediosEstudiantes = estudiantes.map(alumnos => [alumnos.promedio, alumnos.nombre]);

console.log("\nNOMBRES Y PROMEDIOS DE ESTUDIANTES\n");
console.log("Array Filtrado\n", promediosEstudiantes);

// 2.3. Convertir las calificaciones a un sistema de 0-10 (redondeando a un decimal)
const calificacionesEscala10 = calificaciones.map(calificacion => calificacion/10);

console.log("\nCALIFICACIONES DE ESTUDIANTES\n");
console.log("Array Filtrado\n", calificacionesEscala10);



// 3.1. Calcular el promedio general de todos los estudiantes
const promedioGeneral = estudiantes.reduce((acumulador, calificacion) => {
    const promedioEstudiante = calificacion.promedio;
    return acumulador + promedioEstudiante;
}, 0)/estudiantes.length;

console.log("\nPROMEDIO DE TODOS LOS ESTUDIANTES\n");
console.log(`El resultado es ${promedioGeneral}`);

// 3.2. Contar cuántos estudiantes hay por cada carrera
const estudiantesPorCarrera = estudiantes.reduce((acumulador, estudiante) => {
    if (!acumulador.hasOwnProperty(estudiante.carrera)) {
        acumulador[estudiante.carrera] = 1;
    } 
    else{
        acumulador[estudiante.carrera]++;
    }
    return acumulador;
}, {});

console.log("\nESTUDIANTES POR CARRERAS\n");
console.log("La carreras son \n",estudiantesPorCarrera);


// 3.3. Encontrar la calificación más alta
const calificacionMaxima = calificaciones.reduce((numMax, numero) => {
    if (numero > numMax) {
        numMax = numero;
    }

    return numMax;
}, Number.NEGATIVE_INFINITY);

console.log("\nCALIFICACION MAS ALTA\n");
console.log("El resultado es",calificacionMaxima);



// 4.1. Obtener los nombres de los estudiantes de Computación con promedio mayor a 9.0
const mejoresComputacion = estudiantes
  .filter(alumnos => alumnos.carrera == "Computación" && alumnos.promedio >=9.0)
  .map(alumnos => alumnos.nombre);
  
console.log("\nMEJORES ESTUDIANTES DE COMPUTACION\n");
console.log("Array Filtrado\n", mejoresComputacion);

// 4.2. Calcular el promedio de materias aprobadas solo para estudiantes de Ingeniería
const promedioMateriasIngenieria = estudiantes
  .filter(alumnos => alumnos.carrera == "Ingeniería")
  .reduce((acumulador, calificacion) => {
    const promedioEstudiantes = calificacion.materiasAprobadas;
    return acumulador + promedioEstudiantes;
}, 0)/estudiantes.filter(alumnos => alumnos.carrera == "Ingeniería").length;

console.log("\nPROMEDIO DE MATERIAS APROBADAS DE LOS ESTUDIANTES DE INGENIERIA\n");
console.log(`El resultado es ${promedioMateriasIngenieria}`);

// 4.3. Convertir calificaciones a escala 0-10 y luego filtrar solo las mayores a 8.5
const calificacionesAltas = calificaciones
  .map(calificacion => calificacion/10)
  .filter(calificacions => calificacions>8.5);
  
console.log("\nMEJORES CALIFICACIONES MAYORES A 8.5\n");
console.log("Array Filtrado\n", calificacionesAltas);


// Crear una función que reciba un array de estudiantes y devuelva un objeto con:
// - promedioGeneral: el promedio de todos los estudiantes
// - porCarrera: objeto con promedios por cada carrera
// - mejorEstudiante: nombre del estudiante con mayor promedio

function generarReporte(estudiantes){
  const promedioGeneral = estudiantes.reduce((acumulador, calificacion) => {
    const promedioEstudiante = calificacion.promedio;
    return acumulador + promedioEstudiante;
  }, 0)/estudiantes.length;
  
  const porCarrera = estudiantes.reduce((acumulador, alumnos, _, arregloEstudiantes) => {
    const totalCarrera = arregloEstudiantes.filter(estudiante => estudiante.carrera === alumnos.carrera).length;
    
      if (acumulador[alumnos.carrera] === undefined){
          acumulador[alumnos.carrera] = 0;
      }
      
      acumulador[alumnos.carrera] += alumnos.promedio / totalCarrera;
      return acumulador;
  }, {});

  const mejorEstudiante = estudiantes.reduce((numMax, numero) => 
    numero.promedio > numMax.promedio ? numero : numMax
  ).nombre;

  return {
      promedioGeneral,
      porCarrera,
      mejorEstudiante} ;
}

console.log("\nPROMEDIO GENERAL, PROMEDIO POR CARRERAS Y MEJOR ESTUDIANTE\n");
console.log(generarReporte(estudiantes));



// 6.1. Implementar la función de orden superior procesarDatos
function procesarDatos(array, ...operaciones) {
  let resultado = array;

  for (let i = 0; i < operaciones.length; i++) {
    resultado = operaciones[i](resultado);
  }

  return resultado;
}


// 6.2. Usar la función procesarDatos con las operaciones definidas
// Obtener nombres y promedios de estudiantes de Computación con promedio >= 9.0
const resultadoComputacion = procesarDatos(
  estudiantes,
  filtrarPorCarrera("Computación"),
  filtrarPorPromedio(9.0),
  mapearNombrePromedio
);

console.log("Estudiantes de Computación con promedio >= 9.0:", resultadoComputacion);