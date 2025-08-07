import { fontFamily, colors } from "@/styles/theme";
import { View, Text } from "react-native";

export default function Register(){
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 32, fontFamily: fontFamily.bold, color: colors.green.base}}>Criar conta</Text>
        </View>
    )
}