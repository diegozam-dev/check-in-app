import AdminDashboard from '@/features/admin/components/dashboard/admin-dashboard';
import { users, roles } from '@/mock/data';

const Home = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;
  const user = users.find(user => user.username === username);
  const rol = roles.find(rol => rol.id === user?.rol);

  return (
    <>
      {rol?.name === 'Administrador' && <AdminDashboard />}
      {/* {rol?.name === 'Docente' && <AdminDashboard />} */}
      {/* {rol?.name === 'Estudiante' && <AdminDashboard />} */}
    </>
  );
};

export default Home;
