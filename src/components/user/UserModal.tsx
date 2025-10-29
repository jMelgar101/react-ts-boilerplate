import React from 'react';
import { User } from '@/interfaces/User';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';

interface UserModalProps {
  show: boolean;
  editingUser: User | null;
  formData: { name: string; email: string };
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  onUpdateFormData: (field: string, value: string) => void;
}

export const UserModal: React.FC<UserModalProps> = ({
  show,
  editingUser,
  formData,
  loading,
  onSubmit,
  onClose,
  onUpdateFormData,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          {editingUser ? 'Edit User' : 'Create New User'}
        </h3>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <Input
              label="Name"
              value={formData.name}
              onChange={(e) => onUpdateFormData('name', e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => onUpdateFormData('email', e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end space-x-3">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

