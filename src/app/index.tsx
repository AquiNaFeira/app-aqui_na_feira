import { Redirect } from "expo-router";
import { useAuth } from "@/hooks/useAuth";
import { ActivityIndicator } from "react-native";

export default function AppIndex() {
    const { user, loading } = useAuth();
    if (loading) {
        return <ActivityIndicator />;
    }
    if (user) {
        return <Redirect href="/(tabs)/home" />;
    }
    return <Redirect href="/(auth)/welcome" />;
}