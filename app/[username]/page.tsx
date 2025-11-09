'use server';
import { verifyAuth } from '@/actions/auth';
import AdminDashboard from '@/components/layout/admin/dashboard/admin-dashboard';

const Home = async () => {
  const user = await verifyAuth();

  return (
    <>
      {user?.rol === 'Administrador' && <AdminDashboard />}
      {user?.rol === 'Docente' && <h1>Hola Docentes</h1>}
      {user?.rol === 'Estudiante' && <h1>Hola Estudiantes</h1>}
    </>
  );
};

export default Home;
