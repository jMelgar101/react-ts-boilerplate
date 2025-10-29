import { User } from '@/interfaces/User';
import { Button } from '@/components/common/Button';
import { UserModal } from '@/components/user/UserModal';
import { UserTable } from '@/components/user/UserTable';

interface CrudPageProps {
  users: User[];
  loading: boolean;
  showModal: boolean;
  editingUser: User | null;
  formData: { name: string; email: string };
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
  onOpenCreateModal: () => void;
  onCloseModal: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onUpdateFormData: (field: string, value: string) => void;
}

const CrudPage = ({
  users,
  loading,
  showModal,
  editingUser,
  formData,
  onEdit,
  onDelete,
  onOpenCreateModal,
  onCloseModal,
  onSubmit,
  onUpdateFormData,
}: CrudPageProps) => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <Button onClick={onOpenCreateModal} variant="primary">
              Add New User
            </Button>
          </div>

          {loading && !users.length ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              <p className="mt-2 text-gray-600">Loading users...</p>
            </div>
          ) : (
            <UserTable users={users} onEdit={onEdit} onDelete={onDelete} />
          )}

          <UserModal
            show={showModal}
            editingUser={editingUser}
            formData={formData}
            loading={loading}
            onSubmit={onSubmit}
            onClose={onCloseModal}
            onUpdateFormData={onUpdateFormData}
          />
        </div>
      </div>
    </div>
  );
};

export default CrudPage;
