import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ShoppingBag, Store } from 'lucide-react-native'; 
import { colors, fontFamily } from '@/styles/theme';

import Logo from '@/components/logo';

type ProfileType = 'client' | 'vendor'; // 'vendor' é o termo técnico para feirante

const SelectProfileScreen = () => {
    const router = useRouter();
    const [selectedProfile, setSelectedProfile] = useState<ProfileType>('client');

    const handleNext = () => {
        if (selectedProfile === 'client') {
            console.log("Navegando para o cadastro de Cliente...");
        } else if (selectedProfile === 'vendor') {
            console.log("Navegando para o cadastro de Feirante...");
        }
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <View style={s.container}>
            <Logo />
            <View style={s.cardContainer}>
                <Text style={s.title}>
                    Selecione o seu tipo de <Text style={s.highlightedText}>Perfil</Text>
                </Text>

                <View style={s.optionsContainer}>
                    <TouchableOpacity 
                        style={[s.profileButton, selectedProfile === 'client' && s.activeButton]}
                        onPress={() => setSelectedProfile('client')}
                    >
                        <ShoppingBag size={40} color={selectedProfile === 'client' ? colors.white.base : colors.black.base} />
                        <Text style={[s.buttonText, selectedProfile === 'client' && s.activeText]}>Cliente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[s.profileButton, selectedProfile === 'vendor' && s.activeButton]}
                        onPress={() => setSelectedProfile('vendor')}
                    >
                        <Store size={40} color={selectedProfile === 'vendor' ? colors.white.base : colors.black.base} />
                        <Text style={[s.buttonText, selectedProfile === 'vendor' && s.activeText]}>Feirante</Text>
                    </TouchableOpacity>
                </View>
                <View style={s.buttonsContainer}>
                    <TouchableOpacity style={[s.backButton]} onPress={handleBack}>
                        <Text style={s.backButtonText}>Voltar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[s.nextButton]} onPress={handleNext}>
                        <Text style={s.nextButtonText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


export const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green.base,
    },
    header: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginBottom: 30,
    },
    highlightedText: {
        color: colors.green.base,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 40,
    },
    profileButton: {
        width: 130,
        height: 130,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.gray.base,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    activeButton: {
        backgroundColor: colors.green.base,
        borderColor: colors.green.base,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.black.base,
    },
    activeText: {
        color: colors.white.base,
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
    backButton: {
        flex: 1,
        height: 50,
        backgroundColor: colors.white.base,
        borderColor: colors.gray.base,
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    backButtonText: {
        color: colors.black.base,
        fontFamily: fontFamily.regular,
        fontSize: 16,
    },
    nextButton: {
        flex: 1,
        height: 50,
        backgroundColor: colors.green.base,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    nextButtonText: {
        color: colors.white.base,
        fontFamily: fontFamily.semiBold,
        fontSize: 16,
    },
});

export default SelectProfileScreen;