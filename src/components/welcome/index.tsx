import { Image, Text, View } from "react-native"

import { s } from "./style"

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={s.logo} />

      <Text style={s.title}>Bem-Vindo ao Aqui na Feira!</Text>

      <Text style={s.subtitle}>
        Explore a Feira de Caruaru e encontre {"\n"} 
        tudo que procura. {"\n"}
        Planeje a melhor rota para encontrar {"\n"}
        feirantes, bancos e toda variedade {"\n"}
        que a feira oferece!
      </Text>
    </View>
  )
}