import { fontFamily, colors } from "@/styles/theme"
import { View, Text } from "react-native"

export default function Favorites(){
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 32, fontFamily: fontFamily.bold, color: colors.terracota.base}}>Favoritos</Text>
        </View>
    )
}