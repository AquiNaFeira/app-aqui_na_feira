// app/(auth)/verify-code.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { colors, fontFamily } from '@/styles/theme';
import { ChevronLeft } from 'lucide-react-native';
import Button from '@/components/button';
import { authService } from '@/services/authService';
import Input from '@/components/input'; 

export default function VerifyCodeScreen() {
    const router = useRouter();
    const { recoveryId, email } = useLocalSearchParams();
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);

    const handleVerifyCode = async () => {
        if (!code) {
            Alert.alert("Erro", "Por favor, insira o código de 6 dígitos.");
            return;
        }

        if (code.length !== 6) {
            Alert.alert("Erro", "O código deve ter 6 dígitos.");
            return;
        }

        setLoading(true);
        try {
            const response = await authService.verifyCode(String(recoveryId), code);
            const recoveryToken = response.recoveryToken;

            Alert.alert("Sucesso!", "Código verificado. Agora, crie sua nova senha.");
            router.push({
                pathname: '/(auth)/reset-password',
                params: { recoveryToken: recoveryToken, email: String(email) },
            });

        } catch (error: any) {
            console.error('Erro ao verificar código:', error);
            Alert.alert("Erro", "Código inválido ou expirado. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };
    
    const handleResendCode = async () => {
        setResendLoading(true);
        try {
            await authService.resendCode(String(email), String(recoveryId));
            Alert.alert("Sucesso!", "Um novo código foi enviado para o seu e-mail.");
        } catch (error: any) {
            console.error('Erro ao reenviar código:', error);
            Alert.alert("Erro", "Não foi possível reenviar o código. Tente novamente mais tarde.");
        } finally {
            setResendLoading(false);
        }
    };

    return (
        <View style={s.container}>
            <View style={s.header}>
                <TouchableOpacity onPress={() => router.back()} style={s.backButton} disabled={loading || resendLoading}>
                    <ChevronLeft size={24} color={colors.white.base} />
                </TouchableOpacity>
                <Text style={s.headerTitle}>Recuperação de Senha</Text>
            </View>

            <View style={s.cardContainer}>
                <Text style={s.title}>
                    Insira o código recebido
                </Text>

                <Text style={s.subtitle}>
                    Insira o código enviado para o seu e-mail: {email}
                </Text>

                <View style={s.formContainer}>
                    <Input type="text"
                        label="Código de verificação"
                        placeholder="______"
                        value={code}
                        onChangeText={setCode}
                        keyboardType="number-pad"
                        maxLength={6}
                        inputStyle={{ textAlign: 'center', letterSpacing: 10, fontFamily: fontFamily.bold }}
                    />
                </View>

                <Button
                    title="Cadastrar Nova Senha"
                    onPress={handleVerifyCode}
                    icon={loading ? <ActivityIndicator color={colors.white.base} /> : undefined}
                    disabled={loading || resendLoading}
                />
                
                <TouchableOpacity onPress={handleResendCode} style={s.resendButton} disabled={loading || resendLoading}>
                    <Text style={s.resendText}>Não recebeu o código? </Text>
                    <Text style={s.resendLink}>
                        {resendLoading ? <ActivityIndicator color={colors.green.base} /> : 'Reenviar código'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green.base,
    },
    header: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex: 1,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: fontFamily.bold,
        color: colors.white.base,
    },
    cardContainer: {
        flex: 1,
        backgroundColor: colors.white.base,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 25,
        paddingVertical: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontFamily: fontFamily.bold,
        color: colors.black.base,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 15,
        color: colors.gray.base,
        textAlign: 'center',
        marginBottom: 30,
    },
    formContainer: {
        width: '100%',
        marginBottom: 20,
    },
    resendButton: {
        flexDirection: 'row',
        marginTop: 20,
    },
    resendText: {
        color: colors.black.base,
        fontFamily: fontFamily.regular,
        fontSize: 14,
    },
    resendLink: {
        color: colors.green.base,
        fontFamily: fontFamily.bold,
        fontSize: 14,
    },
});
