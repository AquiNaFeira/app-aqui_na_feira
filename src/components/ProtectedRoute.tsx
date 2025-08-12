import { ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({ children } : { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <ActivityIndicator />;
  }
  
  if (!user) {
    return <Redirect href="/login" />;
  }
   
  return <>{children}</>;
}