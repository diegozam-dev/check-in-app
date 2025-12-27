import { TypographyH2 } from '@/components/common/typography/h2';
import { CreateUserButton } from '@/components/feature/admin/createUserButton';
import { RegisteredUsersTable } from '@/components/feature/admin/registered-users-table/registeredUsersTable';

const UsersPage = () => {
  return (
    <div className="mt-4 px-4 lg:px-6">
      <div className="flex justify-between items-center">
        <TypographyH2 text="Usuarios Registrados" />
        <CreateUserButton />
      </div>
      <RegisteredUsersTable />
    </div>
  );
};

export default UsersPage;
