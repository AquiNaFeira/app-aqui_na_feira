import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Alert } from 'react-native';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import Input from '@/components/input';
import Button from '@/components/button';
import { fontFamily } from '@/styles/font-family';

const primaryColor = "#285D35";
const router = useRouter();

const Login = () => {
  const navigation = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login, loading } = useAuth(); 

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert("Erro no Login", error.message || "Ocorreu um erro ao tentar fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <View style={s.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={s.header}>
      <Pressable onPress={() => router.back()} style={s.backButton}>
        <ArrowLeft size={24} color="#333" />
      </Pressable>
        <Text style={s.headerTitle}>Entrar</Text>
      </View>

      <ScrollView contentContainerStyle={s.content}>
        
        <View style={s.titleContainer}>
          <Text style={s.mainTitle}>Entrar</Text>
          <Text style={s.subtitle}>Seja Bem-vindo de volta!</Text>
        </View>

        <View style={s.formContainer}>
          <Input
          label='Email'
          placeholder='Exemplo@gmail.com'
          value={email}
          onChangeText={setEmail}
          type='email'
          />

          <Input
          label='Senha'
          placeholder='*****'
          value={password}
          onChangeText={setPassword}
          type='password'
          />
        </View>
        
        <View style={s.optionsContainer}>
          <Pressable style={s.checkboxContainer} onPress={() => setRememberMe(!rememberMe)}>
            <View style={[s.checkbox, rememberMe && s.checkboxActive]}>
              {rememberMe && <Text style={s.checkboxText}>✓</Text>}
            </View>
            <Text style={s.optionsText}>Lembrar de mim</Text>
          </Pressable>
          <Pressable onPress={() => {  }}>
            <Text style={[s.optionsText, s.forgotPasswordText]}>Esqueceu a senha?</Text>
          </Pressable>
        </View>

        <Button 
            title="Entrar" 
            style={[s.button]}
            onPress={handleLogin}
        />

        <View style={s.registerContainer}>
          <Text style={s.registerText}>Não tem conta? </Text>
          <Pressable onPress={() => navigation.navigate('/(auth)/register')}>
            <Text style={[s.registerText, s.registerLink]}>Cadastrar-se</Text>
          </Pressable>
        </View>  
      </ScrollView>
    </View>
  );
};
export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    paddingRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 20,
  },
  titleContainer: {
    marginBottom: 30,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxActive: {
    backgroundColor: primaryColor,
    borderColor: primaryColor,
  },
  checkboxText: {
    color: '#fff',
    fontSize: 12,
  },
  optionsText: {
    fontSize: 14,
    color: '#666',
  },
  forgotPasswordText: {
    color: primaryColor,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 20,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#666',
  },
  registerLink: {
    color: primaryColor,
    fontWeight: 'bold',
  }
});

export default Login;
