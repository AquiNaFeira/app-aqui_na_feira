import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { Eye, EyeOff } from 'lucide-react-native';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/button';
import { colors, fontFamily } from '@/styles/theme';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [terms, setTerms] = useState(false);
    const [loading, setLoading] = useState(false);

    
    const { register } = useAuth();

    const handleRegister = async () => {
        if (!email || !password || !passwordConfirm || !terms) {
            Alert.alert("Erro", "Por favor, preencha todos os campos e aceite os termos.");
            return;
        }

        if (password !== passwordConfirm) {
            Alert.alert("Erro", "A senha e a confirmação de senha não coincidem.");
            return;
        }

        setLoading(true);
        try {
            await register( email, password);
            router.replace('/(auth)/select-profile'); 
            
            Alert.alert("Sucesso", "Cadastro realizado com sucesso! Agora selecione seu perfil.");

        } catch (error: any) {
            Alert.alert("Erro no Cadastro", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={s.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white.base} />
            
            <ScrollView contentContainerStyle={s.content}>
                
                <View style={s.titleContainer}>
                    <Text style={s.mainTitle}>Cadastro</Text>
                    <Text style={s.subtitle}>Preencha os campos abaixo para criar sua conta</Text>
                </View>

                <View style={s.formContainer}>
                    <Text style={s.label}>Email</Text>
                    <TextInput
                        style={s.input}
                        placeholder="exemplo@gmail.com"
                        placeholderTextColor={colors.gray.base}
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
                            placeholderTextColor={colors.gray.base}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <Pressable onPress={() => setShowPassword(!showPassword)} style={s.eyeIcon}>
                            {showPassword ? <Eye size={20} color={colors.green.light} /> : <EyeOff size={20} color={colors.green.light} />}
                        </Pressable>
                    </View>

                    <Text style={s.label}>Confirmar Senha</Text>
                    <View style={s.passwordContainer}>
                        <TextInput
                            style={s.inputPassword}
                            placeholder=""
                            placeholderTextColor={colors.gray.base[30]}
                            value={passwordConfirm}
                            onChangeText={setPasswordConfirm}
                            secureTextEntry={!showConfirmPassword}
                        />
                        <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={s.eyeIcon}>
                            {showConfirmPassword ? <Eye size={20} color={colors.green.light} /> : <EyeOff size={20} color={colors.green.light} />}
                        </Pressable>
                    </View>
                </View>
                
                <View style={s.termsContainer}>
                    <Pressable style={s.checkboxContainer} onPress={() => setTerms(!terms)}>
                        <View style={[s.checkbox, terms && s.checkboxActive]}>
                            {terms && <Text style={s.checkboxText}>✓</Text>}
                        </View>
                    </Pressable>
                    <Text style={s.termText}>
                        Li e concordo com os <Text style={s.underlineText}>Termos de Uso</Text> e a <Text style={s.underlineText}>Política de Privacidade</Text>.
                    </Text>
                </View>

                <Button 
                    title="Próximo"
                    icon={loading ? <ActivityIndicator color={colors.white.base} /> : undefined}
                    onPress={handleRegister}
                    disabled={loading}
                />

                <Button
                    title="Cancelar"
                    onPress={() => router.back()}
                />

                <View style={s.loginContainer}>
                    <Text style={s.loginText}>Já possui conta? </Text>
                    <Pressable onPress={() => router.push('/(auth)/login')}>
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
        backgroundColor: colors.white.base,
        paddingTop: 50,
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
        fontFamily: fontFamily.bold,
        color: colors.black.base,
    },
    subtitle: {
        fontSize: 15,
        color: colors.gray.base,
        marginTop: 5,
    },
    formContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.black.base,
        marginBottom: 8,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: colors.gray.base,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: colors.gray.base,
        fontFamily: fontFamily.regular,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        backgroundColor: colors.gray.base,
        borderRadius: 8,
        paddingLeft: 15,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: colors.gray.base,
        marginBottom: 20,
    },
    inputPassword: {
        flex: 1,
        height: 50,
        fontSize: 16,
        fontFamily: fontFamily.regular,
    },
    eyeIcon: {
        paddingLeft: 10,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 5
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
        borderColor: colors.gray.base,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    checkboxActive: {
        backgroundColor: colors.green.base,
        borderColor: colors.green.base,
    },
    checkboxText: {
        color: colors.white.base,
        fontSize: 12,
    },
    termText: {
        fontSize: 12,
        color: colors.gray.base,
        flexShrink: 1,
    },
    underlineText: {
        color: colors.green.base,
        textDecorationLine: 'underline',
    },
    button: {
        marginBottom: 10,
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    loginText: {
        fontSize: 14,
        color: colors.gray.base,
    },
    loginLink: {
        color: colors.green.base,
        fontFamily: fontFamily.semiBold,
    },
});