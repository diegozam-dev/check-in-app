import AdminDashboard from '@/features/admin/components/dashboard/admin-dashboard';
import { users, roles } from '@/mock/data';

const Home = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;
  const user = users.find(user => user.username === username);
  const rol = roles.find(rol => rol.id === user?.rol);

  return (
    <div className="py-6 px-4 lg:px-6">
      {rol?.name === 'Administrador' && <AdminDashboard />}
      {/* {rol?.name === 'Docente' && <AdminDashboard />} */}
      {/* {rol?.name === 'Estudiante' && <AdminDashboard />} */}
    </div>
  );
};

export default Home;
