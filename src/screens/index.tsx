import Button from "@/components/button"
import Logo from "@/components/logo"
import { Welcome } from "@/components/welcome"
import { Steps } from "@/components/step";
import { View } from "react-native"
import { router } from "expo-router"
import 'react-native-reanimated'; 

export default function Index(){
    return (
        <View
            style={{flex: 1, padding:40, gap:40 }}
        >
            <Welcome />
            <Logo/>
            
            <Button 
                onPress={() => router.navigate("/home")} title="Começar" 
            />
        </View>
    )
} 