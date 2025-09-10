const estudiantes = [
  { id: 1, nombre: "Ana", carrera: "Ingeniería", promedio: 8.7, materiasAprobadas: 32 },
  { id: 2, nombre: "Luis", carrera: "Computación", promedio: 9.2, materiasAprobadas: 36 },
  { id: 3, nombre: "Marta", carrera: "Computación", promedio: 7.8, materiasAprobadas: 28 },
  { id: 4, nombre: "Pedro", carrera: "Ingeniería", promedio: 8.3, materiasAprobadas: 34 },
  { id: 5, nombre: "Carlos", carrera: "Computación", promedio: 9.5, materiasAprobadas: 38 },
  { id: 6, nombre: "Sofia", carrera: "Matemáticas", promedio: 8.9, materiasAprobadas: 30 }
];

const calificaciones = [85, 92, 78, 90, 65, 88, 72, 95, 81, 79];

function filtrarPorCarrera(obj) {
  if ("carrera" in obj && obj.carrera == "Computación" ) {
    return true;
  } 
  else {
    return false;
  }
}

function filtrarPorPromedio(obj) {
  if ("promedio" in obj && obj.promedio >= 8.5 ) {
    return true;
  } 
  else {
    return false;
  }
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
const estudiantesComputacion = estudiantes.filter(filtrarPorCarrera);
console.log("\nESTUDIANTES DE COMPUTACION\n");
console.log("Array Filtrado\n", estudiantesComputacion);


// 1.2. Obtener estudiantes con promedio mayor o igual a 8.5
const estudiantesDestacados = estudiantes.filter(filtrarPorPromedio);
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
const sumaPromedioGeneral = estudiantes.reduce((acumulador, calificacion, indice) => {
    const promedioEstudiante = calificacion.promedio;
    return acumulador + promedioEstudiante;
}, 0);

const promedioGeneral = sumaPromedioGeneral/estudiantes.length;

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