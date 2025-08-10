import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "@/components/welcome";
import Login from "@/app/auth/login";
import Register from "@/app/auth/register";
import NavigationBar from "@/app/( tabs )/_layout";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      <Stack.Screen name="AppTabs" component={NavigationBar} />
    </Stack.Navigator>
  );
}

export default AppRoutes;