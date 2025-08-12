import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, Pressable, ScrollView, Alert } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

const primaryColor = "#285D35"; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm ] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [terms, setTerms] = useState(false);
  

  const handleRegister = () => {
  Alert.alert("Registro", `Email: ${email}\nSenha: ${password}`);
};

  return (
    <View style={s.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={s.header}>
        <Pressable style={s.backButton}>
        </Pressable>
        <Text style={s.headerTitle}>Cadastro</Text>
      </View>

      <ScrollView contentContainerStyle={s.content}>
        
        <View style={s.titleContainer}>
          <Text style={s.mainTitle}>Cadastro Usuário</Text>
          <Text style={s.subtitle}>Preencha os campos abaixo para criar sua conta</Text>
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
                placeholder=""
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)} style={s.eyeIcon}>
                {showPassword ? <Eye size={20} color={primaryColor} /> : <EyeOff size={20} color={primaryColor} />}
                </Pressable>
            </View>

            <Text style={s.label}>Confirmar Senha</Text>
            <View style={s.passwordContainer}>
            <TextInput
                style={s.inputPassword}
                placeholder=""
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                secureTextEntry={!showConfirmPassword}
            />
            <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={s.eyeIcon}>
                {showConfirmPassword ? <Eye size={20} color={primaryColor} /> : <EyeOff size={20} color={primaryColor} />}
            </Pressable>
            </View>
        </View>
        
        <View style={s.termsContainer}>
          <Pressable style={s.checkboxContainer} onPress={() => setTerms(!terms)}>
            <View style={[s.checkbox, terms && s.checkboxActive]}>
              {terms && <Text style={s.checkboxText}>✓</Text>}
            </View>
            
            <Text style={s.termText}>Li e concordo com os <Text style={s.underlineText}>Termos de Uso</Text> e a <Text style={s.underlineText}>Política de Privacidade</Text>.</Text>
          </Pressable>
        </View>

        <Pressable
          style={[s.button, { backgroundColor: primaryColor }]}
          onPress={handleRegister}
        >
          <Text style={s.buttonText}>Próximo</Text>
        </Pressable>

        <Pressable
          style={[s.button, s.buttonAlternative]}
        >
          <Text style={[s.buttonText, { color: primaryColor }]}>Cancelar</Text>
        </Pressable>

        <View style={s.loginContainer}>
          <Text style={s.loginText}>Já possui conta? </Text>
          <Pressable >
            <Text style={[s.loginText, s.loginLink]}>Entrar</Text>
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
    textAlign: 'center'
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 15,
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
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center'
  },
  checkboxActive: {
    backgroundColor: primaryColor,
    borderColor: primaryColor,
  },
  checkboxText: {
    color: '#fff',
    fontSize: 12,
  },
  termText: {
    fontSize: 12,
    color: '#666',
    textAlign: "center"
  },
  underlineText:{
    color: primaryColor,
    textDecorationLine: 'underline'
  },
  button: {
    width: '100%',
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonAlternative:{
    backgroundColor: "#fff", 
    borderWidth: 2,
    borderColor: "#000000ff"
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    color: primaryColor,
    fontWeight: 'bold',
  }
});

export default Register;