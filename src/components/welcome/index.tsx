import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigatorProps } from '@react-navigation/stack';
import { RootStackParamList } from "@/types/navigation";

import { s } from "./style"

type WelcomeScreenNavigationProp = StackNavigatorProps<RootStackParamList, 'Welcome'>;

export default function Welcome() {
  const navigator = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={s.logo} />

      <Text style={s.title}>Bem-Vindo ao Aqui na Feira!</Text>

      <Text style={s.subtitle}>
        Explore a Feira de Caruaru e encontre 
        tudo que procura. {"\n"}
        Planeje a melhor rota para encontrar
        feirantes, bancos e toda variedade {"\n"}
        que a feira oferece!
      </Text>

      <button
      title="Entrar"
      onPress={() => navigator.navigate("/login")}
      />
      <button
      title="Criar Conta"
      onPress={() => navigator.navigate("/register")}
      />
    </View>
  )
}