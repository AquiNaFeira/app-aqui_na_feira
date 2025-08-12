import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Alert } from 'react-native';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'expo-router';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';

const primaryColor = "#285D35";
const router = useRouter();

const Login = () => {
  const navigation = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
          <Text style={s.label}>Email</Text>
          <TextInput
            style={s.input}
            placeholder="Exemplo@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={s.label}>Senha</Text>
          <View style={s.passwordContainer}>
            <TextInput
              style={s.inputPassword}
              placeholder="************"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={s.eyeIcon}>
              {showPassword ? <Eye size={20} color="#666" /> : <EyeOff size={20} color="#666" />}
            </Pressable>
          </View>
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

        <Pressable
          style={[s.button, { backgroundColor: primaryColor }]}
          onPress={handleLogin}
        >
          <Text style={s.buttonText}>Entrar</Text>
        </Pressable>

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
    backgroundColor: '#fff',
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  eyeIcon: {
    paddingLeft: 10,
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
    width: '100%',
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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
