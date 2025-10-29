import { useState, useEffect } from 'react';
import { User } from '@/interfaces/User';
import { userService } from '@/services/userService';
import CrudPage from '@/pages/CrudPage';

const CrudContainer = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await userService.getAll();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingUser) {
        await userService.update(editingUser.id, formData);
      } else {
        await userService.create(formData);
      }
      setShowModal(false);
      setEditingUser(null);
      setFormData({ name: '', email: '' });
      fetchUsers();
    } catch (error) {
      console.error('Error saving user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email });
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }
    setLoading(true);
    try {
      await userService.delete(id);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '' });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingUser(null);
    setFormData({ name: '', email: '' });
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <CrudPage
      users={users}
      loading={loading}
      showModal={showModal}
      editingUser={editingUser}
      formData={formData}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onOpenCreateModal={openCreateModal}
      onCloseModal={closeModal}
      onSubmit={handleSubmit}
      onUpdateFormData={updateFormData}
    />
  );
};

export default CrudContainer;

