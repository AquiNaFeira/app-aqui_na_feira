import { View, Text, Image } from "react-native";

import { s } from "./style"

export default function Logo(){
    return(
        <View style={s.container}>
            <Image source={require("@/assets/logo.png")} style={s.logo}></Image>
            <Text style={s.titulo}> Aqui na Feira </Text>
            <Text style={s.subtitulo}> Tudo se encontra </Text>
        </View>
    )
}