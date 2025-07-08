
import { s } from "./style"
import { View } from "react-native"
import { Facebook, Instagram, Navigation } from "lucide-react-native";
import { colors } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons"
import Button from "../button";

export default function BancoButtons(){
    return(
        <View style={s.buttonContainer}>
            <Button icon={<Facebook size={24} color={colors.white.base}/>} circle/>
            <Button icon={<Instagram size={24} color={colors.white.base}/>} circle/>
            <Button icon={<Ionicons name="logo-whatsapp" size={24} color={colors.white.base}/>} circle/>
            <Button title="Mostrar Rota" icon={<Navigation size={24} color={colors.white.base}/>}/>
        </View>
    )
}