// --- 1. Roles del Sistema ---
// Define los tipos de roles que pueden existir en la plataforma.
export const roles = [
  {
    id: 1,
    name: 'Administrador',
    description: 'Administrador con acceso total al sistema.'
  },
  {
    id: 2,
    name: 'Docente',
    description: 'Profesor que puede gestionar cursos y tomar asistencia.'
  },
  {
    id: 3,
    name: 'Estudiante',
    description: 'Estudiante que puede ver sus cursos y asistencias.'
  }
];

// --- 2. Usuarios ---
// Lista de usuarios en el sistema.
export const users = [
  {
    id: '1',
    rol: 1,
    firstname: 'Ana',
    lastname: 'Admin',
    username: 'admin',
    email: 'ana.admin@example.com',
    password: 'Admin123.',
    state: 'active'
  },
  {
    id: '2',
    rol: 2,
    firstname: 'Pedro',
    lastname: 'Profesor',
    username: 'profesor',
    email: 'pedro.profesor@example.com',
    password: 'Profesor123.',
    state: 'active'
  },
  {
    id: '3',
    rol: 3,
    firstname: 'Laura',
    lastname: 'Estudiante',
    username: 'lestudiante',
    email: 'laura.estudiante@example.com',
    password: 'estudiante123',
    state: 'active'
  },
  {
    id: '4',
    rol: 3,
    firstname: 'Carlos',
    lastname: 'Alumno',
    username: 'carlos',
    email: 'carlos.alumno@example.com',
    password: 'Carlos123.',
    state: 'active'
  }
];

// --- 3. Categorías de Cursos ---
// Permite organizar los cursos. 'Ciencias Exactas' es una categoría padre.
export const categories = [
  {
    id: 10,
    name: 'Ciencias Exactas',
    description: 'Cursos de ciencias, tecnología, ingeniería y matemáticas.',
    parent_id: null
  },
  {
    id: 20,
    name: 'Humanidades',
    description: 'Cursos de historia, literatura y arte.',
    parent_id: null
  },
  {
    id: 11,
    name: 'Matemáticas',
    description: 'Subcategoría de Ciencias.',
    parent_id: 10
  }
];

// --- 4. Cursos ---
// Los cursos disponibles, cada uno asociado a una categoría.
export const courses = [
  {
    id: 101,
    name: 'Álgebra Lineal',
    short_name: 'ALG-101',
    description: 'Curso introductorio a los espacios vectoriales.',
    visibility: 'public',
    category_id: 11 // Pertenece a la subcategoría Matemáticas
  },
  {
    id: 102,
    name: 'Historia Universal I',
    short_name: 'HIS-101',
    description: 'Desde la antigüedad hasta la Edad Media.',
    visibility: 'public',
    category_id: 20 // Pertenece a Humanidades
  }
];

// --- 5. Matrículas (Enrollments) ---
// Simplemente indica qué usuarios están inscritos en qué cursos.
export const enrollments = [
  // Matrículas en Álgebra Lineal (Curso 101)
  { id: 1, user_id: 2, course_id: 101, enrolled_at: new Date('2025-08-01') }, // Pedro (Profesor) está en el curso
  { id: 2, user_id: 3, course_id: 101, enrolled_at: new Date('2025-08-05') }, // Laura está en el curso
  { id: 3, user_id: 4, course_id: 101, enrolled_at: new Date('2025-08-06') }, // Carlos está en el curso

  // Matrículas en Historia Universal (Curso 102)
  { id: 4, user_id: 2, course_id: 102, enrolled_at: new Date('2025-08-01') }, // Pedro (Profesor) está en el curso
  { id: 5, user_id: 3, course_id: 102, enrolled_at: new Date('2025-08-05') } // Laura está en el curso
];

// --- 7. Sesiones de Asistencia ---
// Cada entrada es una "lista" que el profesor crea para un día de clase.
export const attendances = [
  {
    id: 1001,
    course_id: 101,
    attendance_date: new Date('2025-09-10T09:00:00'),
    creator_id: 2
  },
  {
    id: 1002,
    course_id: 101,
    attendance_date: new Date('2025-09-12T09:00:00'),
    creator_id: 2
  },
  {
    id: 1003,
    course_id: 102,
    attendance_date: new Date('2025-09-11T11:00:00'),
    creator_id: 2
  }
];

// --- 8. Registros de Asistencia (AttendanceRecord) ---
// El resultado de tomar asistencia para cada estudiante en cada sesión.
export const attendanceRecords = [
  // Asistencia para la sesión 1001 (Álgebra, Clase 1)
  {
    id: 1,
    attendance_id: 1001,
    student_id: 3,
    status: 'present',
    notes: null
  }, // Laura presente
  {
    id: 2,
    attendance_id: 1001,
    student_id: 4,
    status: 'present',
    notes: null
  }, // Carlos presente

  // Asistencia para la sesión 1002 (Álgebra, Clase 2)
  {
    id: 3,
    attendance_id: 1002,
    student_id: 3,
    status: 'late',
    notes: 'Llegó 10 minutos tarde.'
  }, // Laura tarde
  {
    id: 4,
    attendance_id: 1002,
    student_id: 4,
    status: 'present',
    notes: null,
    recorded_by_id: 2
  }, // Carlos presente

  // Asistencia para la sesión 1003 (Historia, Clase 1)
  {
    id: 5,
    attendance_id: 1003,
    student_id: 3,
    status: 'absent',
    notes: 'Ausencia justificada por cita médica.',
    recorded_by_id: 2
  } // Laura ausente (justificado)
  // Carlos no está en este curso, por lo que no tiene registro para esta sesión.
];
