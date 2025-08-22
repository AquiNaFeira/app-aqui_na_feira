import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function AuthLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#fff' },
        }}
      >
        <Stack.Screen 
          name="login" 
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen 
          name="register" 
          options={{
            title: 'Cadastro',
          }}
        />
      </Stack>
    </>
  );
}