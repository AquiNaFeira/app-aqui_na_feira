// src/app/(auth)/welcome.tsx
import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import Button from "@/components/button";
import { colors, fontFamily } from "@/styles/theme";

export default function Welcome() {
    return (
        <View style={s.fullScreen}>
            <View style={s.topSection}>
                <Image
                    source={require("@/assets/logo.png")}
                    style={s.logo}
                />
                <Text style={s.logoTitle}>Aqui na Feira</Text>
                <Text style={s.logoSubtitle}>Tudo se encontra</Text>
            </View>

            <View style={s.bottomCard}>
                <View style={s.textContainer}>
                    <Text style={s.welcomeTitle}>Bem-vindo ao{"\n"}<Text style={{color: colors.green.base}}>Aqui na Feira!</Text> </Text>
                    <Text style={s.welcomeText}>
                        Planeje a melhor rota para encontrar os produtos que você precisa na feira.
                    </Text>
                    <Text style={s.welcomeText}>
                        Descubra os melhores preços e aproveite a experiência de compra.
                    </Text>
                </View>

                <View style={s.buttonContainer}>
                    <Button 
                        title="Entrar" 
                        style={[s.button]}
                        onPress={() => router.push('/(auth)/login')}
                    />

                    <Button 
                        title="Criar conta"
                        style={[s.button, s.registerButton]} 
                        textStyle={{color: colors.green.base}}
                        onPress={() => router.push('/(auth)/register')}
                    />
                </View>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: colors.green.base,
    },
    topSection: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 4,
    },
    logoTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white.base,
        marginBottom: 4,
    },
    logoSubtitle: {
        fontSize: 15,
        color: colors.white.base,
    },
    bottomCard: {
        flex: 2,
        backgroundColor: colors.white.base,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 25,
        paddingTop: 40,
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1
    },
    welcomeTitle: {
        fontSize: 30,
        fontFamily: fontFamily.bold,
        color: colors.black.base,
        marginBottom: 15,
    },
    welcomeText: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.black.base,
        marginTop: 30,
        lineHeight: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 65,
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
    },
    registerButton: {
        backgroundColor: colors.white.base,
        borderWidth: 1,
        borderColor: colors.black.base,
    }
});