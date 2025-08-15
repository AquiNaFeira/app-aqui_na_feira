import React, { useEffect } from 'react';
import { Redirect, useRootNavigationState } from 'expo-router';
import { ActivityIndicator, View, Text } from 'react-native';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isAuthReady, setIsAuthReady] = React.useState(false);

  useEffect(() => {
    const checkAuth = setTimeout(() => {
      setIsLoggedIn(true);
      setIsAuthReady(true);
    }, 1000);
    return () => clearTimeout(checkAuth);
  }, []);

  return { isLoggedIn, isAuthReady };
};

export default function AppIndex() {
  const { isLoggedIn, isAuthReady } = useAuth();
  const navigationState = useRootNavigationState();

   if (!navigationState?.key || !isAuthReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#4EAF57" />
        <Text style={{ marginTop: 16 }}>Carregando...</Text>
      </View>
    );
  }
  if (isLoggedIn) {
    return <Redirect href="/home" />;
  }
  return <Redirect href="/welcome" />;
}
