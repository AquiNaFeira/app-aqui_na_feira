import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "@/components/welcome";
import { Login } from "@/components/login";
import { Register } from "@/components/register";


const Stack = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default AppRoutes;