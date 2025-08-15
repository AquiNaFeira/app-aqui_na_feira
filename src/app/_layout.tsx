import React, { useEffect, useState } from "react";
import { Stack, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { AuthProvider, useAuth } from '../hooks/useAuth'; 

import {
  useFonts,
  Lexend_600SemiBold,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_700Bold
} from "@expo-google-fonts/lexend";

import { Loading } from "@/components/loading";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Lexend_600SemiBold,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <AuthProvider>
          <LayoutStack fontsLoaded={fontsLoaded} />
        </AuthProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

function LayoutStack({ fontsLoaded }: { fontsLoaded: boolean }) {
  const { isLoadingAuth, user } = useAuth();
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded && !isLoadingAuth) {
      SplashScreen.hideAsync();
      setIsAppReady(true);
    }
  }, [fontsLoaded, isLoadingAuth]);
  if (!isAppReady) {
    return null;
  }
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </>
      ) : (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}
