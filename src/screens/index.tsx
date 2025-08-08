import Button from "@/components/button"
import Logo from "@/components/logo"
import  Welcome  from "@/components/welcome"
import { View } from "react-native"
import { router } from "expo-router"
import 'react-native-reanimated'; 

export default function Index(){
    return (
        <View
            style={{flex: 1, padding:40, gap:40 }}
        >
        <Welcome />
            
        </View>
    )
} 