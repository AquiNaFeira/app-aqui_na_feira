import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './api';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

const TOKEN_KEY = '@auth_token';
const USER_KEY = '@auth_user';

export const authService = {
    async login(data: LoginData): Promise<AuthResponse> {
        try {
        const response = await api.post('/auth/login', data);
        const { user, token } = response.data;

        await AsyncStorage.setItem(TOKEN_KEY, token);
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));

      api.defaults.headers.Authorization = `Bearer ${token}`;
      
      return { user, token };
    } catch (error) {
      throw error;
    }
  },

  async register(data: RegisterData): Promise<AuthResponse> {
        console.log("Simulando cadastro com os dados:", data);
        return new Promise((resolve) => {
            setTimeout(() => {
                const fakeUser: User = {
                  id: 'fake-user-id-' + Math.random().toString(36).substring(7),
                  email: data.email,
                  name: ''
                };
                const fakeToken = 'fake-token-for-test-purpose-12345';

                console.log("Registro simulado com sucesso. Retornando dados fake.");

             
                resolve({ user: fakeUser, token: fakeToken });

                
            }, 2000);
        });
    },

  async logout(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);

      delete api.defaults.headers.Authorization;
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  },

  async getStoredToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(TOKEN_KEY);
    } catch (error) {
      return null;
    }
  },

  async getStoredUser(): Promise<User | null> {
    try {
      const userData = await AsyncStorage.getItem(USER_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      return null;
    }
  },

  async isAuthenticated(): Promise<boolean> {
    try {
      const token = await this.getStoredToken();
      const user = await this.getStoredUser();
      
      if (token && user) {

        api.defaults.headers.Authorization = `Bearer ${token}`;
        return true;
      }
      
      return false;
    } catch (error) {
      return false;
    }
  },

  async validateToken(): Promise<boolean> {
    try {
      const token = await this.getStoredToken();
      if (!token) return false;


      const response = await api.get('/auth/validate');
      return response.status === 200;
    } catch (error) {

      await this.logout();
      return false;
    }
  },

  async updateUser(userData: Partial<User>): Promise<void> {
    try {
      const currentUser = await this.getStoredUser();
      if (currentUser) {
        const updatedUser = { ...currentUser, ...userData };
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  }
};