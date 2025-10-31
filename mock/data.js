// --- 1. Roles del Sistema ---
// Define los tipos de roles que pueden existir en la plataforma.
export const roles = [
  {
    id: 1,
    name: 'system_admin',
    description: 'Administrador con acceso total al sistema.'
  },
  {
    id: 2,
    name: 'teacher',
    description: 'Profesor que puede gestionar cursos y tomar asistencia.'
  },
  {
    id: 3,
    name: 'student',
    description: 'Estudiante que puede ver sus cursos y asistencias.'
  }
];

// --- 2. Usuarios ---
// Lista de usuarios en el sistema. Las contraseñas deben ser hashes en una app real.
export const users = [
  {
    id: 1,
    firstname: 'Ana',
    lastname: 'Admin',
    username: 'admin',
    email: 'ana.admin@example.com',
    password: 'hashed_password_1',
    state: 'active'
  },
  {
    id: 2,
    firstname: 'Pedro',
    lastname: 'Profesor',
    username: 'pprofesor',
    email: 'pedro.profesor@example.com',
    password: 'hashed_password_2',
    state: 'active'
  },
  {
    id: 3,
    firstname: 'Laura',
    lastname: 'Estudiante',
    username: 'lestudiante',
    email: 'laura.estudiante@example.com',
    password: 'hashed_password_3',
    state: 'active'
  },
  {
    id: 4,
    firstname: 'Carlos',
    lastname: 'Alumno',
    username: 'calumno',
    email: 'carlos.alumno@example.com',
    password: 'hashed_password_4',
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

// --- 6. Asignación de Roles (RoleAssignment) ---
// El cerebro de los permisos. Aquí se define QUIÉN es QUÉ y DÓNDE.
export const roleAssignments = [
  // Ana es administradora a nivel de todo el sistema
  {
    id: 1,
    user_id: 1,
    role_id: 1,
    context_level: 'system',
    context_instance_id: 1
  },

  // Pedro es profesor en ambos cursos
  {
    id: 2,
    user_id: 2,
    role_id: 2,
    context_level: 'course',
    context_instance_id: 101
  }, // Profesor en Álgebra
  {
    id: 3,
    user_id: 2,
    role_id: 2,
    context_level: 'course',
    context_instance_id: 102
  }, // Profesor en Historia

  // Laura es estudiante en ambos cursos
  {
    id: 4,
    user_id: 3,
    role_id: 3,
    context_level: 'course',
    context_instance_id: 101
  }, // Estudiante en Álgebra
  {
    id: 5,
    user_id: 3,
    role_id: 3,
    context_level: 'course',
    context_instance_id: 102
  }, // Estudiante en Historia

  // Carlos es estudiante solo en Álgebra
  {
    id: 6,
    user_id: 4,
    role_id: 3,
    context_level: 'course',
    context_instance_id: 101
  } // Estudiante en Álgebra
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
