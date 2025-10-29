import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';
import { User, CreateUserDto, UpdateUserDto } from '@/interfaces/User';
import { httpClient } from '@/utils/httpClient';

class UserService {
  private baseUrl = `${API_BASE_URL}${API_ENDPOINTS.USERS}`;

  async getAll(): Promise<User[]> {
    const response = await httpClient.get<User[]>(this.baseUrl);
    return response.data;
  }

  async getById(id: number): Promise<User> {
    const response = await httpClient.get<User>(
      `${this.baseUrl}/${id}`
    );
    return response.data;
  }

  async create(data: CreateUserDto): Promise<User> {
    const response = await httpClient.post<User>(this.baseUrl, data);
    return response.data;
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    const response = await httpClient.put<User>(
      `${this.baseUrl}/${id}`,
      data
    );
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await httpClient.delete(`${this.baseUrl}/${id}`);
  }
}

export const userService = new UserService();

