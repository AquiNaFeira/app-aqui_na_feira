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

interface RequestPasswordResetResponse {
    recoveryId: string;
}
interface VerifyCodeResponse {
    recoveryToken: string;
}

async function requestPasswordReset(email: string): Promise<RequestPasswordResetResponse> {
    console.log(`Simulando solicitação de recuperação para o e-mail: ${email}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "sidere@aquianafeira.com") {
                const fakeRecoveryId = `rec_id_${Math.random().toString(36).substring(2, 9)}`;
                console.log(`Simulação de sucesso. Recovery ID: ${fakeRecoveryId}`);
                resolve({ recoveryId: fakeRecoveryId });
            } else {
                console.log("Simulação de erro: E-mail não encontrado.");
                reject(new Error("E-mail não encontrado."));
            }
        }, 1500);     });
}

async function verifyCode(recoveryId: string, code: string): Promise<VerifyCodeResponse> {
    console.log(`Simulando verificação para recoveryId: ${recoveryId} e código: ${code}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (code === "123456") {
                const fakeRecoveryToken = `rec_token_${Math.random().toString(36).substring(2, 9)}`;
                console.log(`Simulação de sucesso. Recovery Token: ${fakeRecoveryToken}`);
                resolve({ recoveryToken: fakeRecoveryToken });
            } else {
                console.log("Simulação de erro: Código inválido.");
                reject(new Error("Código inválido."));
            }
        }, 1500);
    });
}

async function resendCode(email: string, recoveryId: string): Promise<void> {
    console.log(`Simulando reenvio de código para o e-mail: ${email} e recoveryId: ${recoveryId}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (recoveryId) {
                console.log("Simulação de sucesso: Novo código enviado.");
                resolve();
            } else {
                console.log("Simulação de erro: ID de recuperação inválido.");
                reject(new Error("ID de recuperação inválido ou expirado."));
            }
        }, 1500); 
    });
}

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
  },
  
  requestPasswordReset,
  verifyCode,
  resendCode,
};