import { Stack } from "expo-router"
import { colors } from "@/styles/theme"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import NavigationBar from '../components/navigationBar';


import {
    useFonts,
    Lexend_600SemiBold,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold
} from "@expo-google-fonts/lexend"

import { Loading } from "@/components/loading"

export default function Layout(){
    const [fontsLoaded] = useFonts({
        Lexend_600SemiBold,
        Lexend_400Regular,
        Lexend_500Medium,
        Lexend_700Bold
    })

    if(!fontsLoaded){
        return <Loading />
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
        <NavigationBar />
        </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}