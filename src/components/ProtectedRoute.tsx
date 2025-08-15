import { ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoadingAuth } = useAuth();
  
  if (isLoadingAuth) {
    return <ActivityIndicator />;
  }
  
  if (!user) {
    return <Redirect href="/login" />;
  }
   
  return <>{children}</>;
}