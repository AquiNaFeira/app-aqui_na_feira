import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: 80
    },
    logo: {
        width: 200,
        height: 200,
    },
    titulo: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.white.base
    },
    subtitulo:{
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.white.base
    }
})