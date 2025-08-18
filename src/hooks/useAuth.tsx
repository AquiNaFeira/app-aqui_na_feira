import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { authService } from "@/services/authService";

type User = {
    id: string;
    email: string;
}

type AuthContextType = {
    user: User | null;
    token: string | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const { user, token } = await authService.login({ email, password });
            setUser(user);
            setToken(token);
        } catch (error: any) {
            console.error("Erro no login:", error);
            throw new Error("Credenciais inválidas ou erro de conexão.");
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await authService.logout();
            setUser(null);
            setToken(null);
        } catch (error) {
            console.error("Erro no logout:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        const checkInitialAuth = async () => {
            try {
                const storedUser = await authService.getStoredUser();
                const storedToken = await authService.getStoredToken();

                if (storedUser && storedToken) {
                    setUser(storedUser);
                    setToken(storedToken);
                }
            } catch (error) {
                console.error("Erro ao verificar autenticação inicial:", error);
            } finally {
                setLoading(false);
            }
        };
        checkInitialAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};