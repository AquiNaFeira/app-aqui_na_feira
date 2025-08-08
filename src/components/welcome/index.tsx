import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "@/types/navigation";
import { TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import { s } from "./style"
import { colors } from "@/styles/colors";

const { height } = Dimensions.get("window");

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export default function Welcome() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const primaryColor = "#285d35";

  
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
            {"\n"}
            {"\n"}
            Descubra os melhores preços e aproveite a experiência de compra.
          </Text>
        </View>

        <View style={s.buttonContainer}>
          <TouchableOpacity
            style={[s.button, s.loginButton]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={s.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.button, s.registerButton]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={[s.buttonText, { color: primaryColor }]}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
