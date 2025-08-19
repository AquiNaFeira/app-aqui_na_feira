import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/button';
import { colors, fontFamily } from '@/styles/theme';
import Input from '@/components/input';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
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
                    <Input
                    label='Email'
                    placeholder='exemplo@gmail.com'
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

                    <Input
                    label='Confirmar a senha'
                    placeholder='*****'
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    type='password'
                    />
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
                    style={[s.button]}
                    onPress={handleRegister}
                    disabled={loading}
                />

                <Button
                    title="Cancelar"
                    style={[s.button, s.cancelButton]}
                    textStyle={{color: colors.green.base}}
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
        color: colors.black.base,
        marginTop: 5,
    },
    formContainer: {
        width: '100%',
        marginBottom: 20,
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
        borderColor: colors.black.base,
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
        color: colors.black.base,
        flexShrink: 1,
        textAlign: 'center'
    },
    underlineText: {
        color: colors.green.light,
        textDecorationLine: 'underline',
    },
    button: {
        marginBottom: 10,
    },
    cancelButton: {
        backgroundColor: colors.white.base,
        borderWidth: 1,
        borderColor: colors.black.base,
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    loginText: {
        fontSize: 14,
        color: colors.black.base,
    },
    loginLink: {
        color: colors.green.base,
        fontFamily: fontFamily.semiBold,
    },
});