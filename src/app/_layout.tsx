import React, { useEffect, useState } from 'react';
import { Stack, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


SplashScreen.preventAutoHideAsync();

import { AuthProvider, useAuth } from '../hooks/useAuth';
import {
    useFonts,
    Lexend_600SemiBold,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold
} from "@expo-google-fonts/lexend";

function InitialLoader() {
    const [fontsLoaded] = useFonts({
        Lexend_600SemiBold,
        Lexend_400Regular,
        Lexend_500Medium,
        Lexend_700Bold
    });
    const { loading } = useAuth();
    useEffect(() => {
        if (fontsLoaded && !loading) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, loading]);
    if (!fontsLoaded || loading) {
        return null;
    }
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(modals)" options={{ headerShown: false }} />
        </Stack>
    );
}

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <AuthProvider>
                    <InitialLoader />
                </AuthProvider>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}