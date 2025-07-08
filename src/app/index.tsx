import Button from "@/components/button"
import Logo from "@/components/logo"
import { View } from "react-native"
import { router } from "expo-router"
import 'react-native-reanimated'; 

export default function Index(){
    return (
        <View
            style={{flex: 1, padding:40, gap:40 }}
        >
            <Logo/>
            <Button title="Começar" onPress={() => router.navigate("/home")}/>
        </View>
    )
} 