import { Stack } from "expo-router";

export default function PasswordRecovery(){
    return(
        <Stack screenOptions={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'fade'
        }}>
            <Stack.Screen
            options={{
                headerShown: false
            }}
            name="forgot-password"
            />
            <Stack.Screen
            name="select-recovery"
            />
        </Stack>
    )  
}