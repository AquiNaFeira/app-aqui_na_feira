import Button from "@/components/button";
import Input from "@/components/input";
import { colors, fontFamily } from "@/styles/theme";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyRound } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    return (
        <BlurView intensity={20} tint="dark" style={s.container}>
            <View style={s.popup}>
                <View style={s.iconRound}>
                    <KeyRound size={40} color={colors.green.base}/>
                </View>
                <View style={s.titleContainer}>
                    <Text style={s.title}>Esqueceu a senha?</Text>
                    <Text style={s.subtitle}>
                        Digite o email associado à sua conta {'\n'}para recuperar sua senha.
                    </Text>
                </View>
                <View style={s.actionContainer}>
                    <Input
                    label='Email'
                    placeholder='seu.email@exemplo.com'
                    value={email}
                    onChangeText={setEmail}
                    type='email'
                    />
                    <Button
                    title="Continuar"
                    />
                </View>
            </View>
        </BlurView>
    );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  popup: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 24,
    width: '95%',
    maxWidth: 400,
    gap: 24,
    borderWidth: 2,
    borderColor: colors.green.base
  },
  iconRound: {
    backgroundColor: '#285d3562',
    borderRadius: 999,
    padding: 16,
    alignSelf: 'center'
  },
  titleContainer:{
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    padding: 12
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
  },
  subtitle:{
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    color: '#535252'
  },
  actionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  }
});