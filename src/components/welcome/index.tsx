import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "@/types/navigation";
import { s } from "./style"
import { colors } from "@/styles/theme";
import Button from "../button";

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export default function Welcome() {

  const navigation = useNavigation<WelcomeScreenNavigationProp>();

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
          onPress={() => {navigation.navigate('Login')}}
          />

          <Button 
          title="Criar conta" 
          style={[s.button, s.registerButton]} 
          textStyle={{color: colors.green.base}}
          onPress={() => {navigation.navigate('Register')}}
          />
        </View>
      </View>
    </View>
  )
}
