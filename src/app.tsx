import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './routes/app.routes';

function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

export default App;