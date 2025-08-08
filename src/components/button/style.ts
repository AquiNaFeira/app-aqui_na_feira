import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.green.base,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        gap: 12,
        elevation: 3,
        shadowColor: colors.green.light,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    title: {
        fontFamily: fontFamily.semiBold,
        fontSize: 16,
        color: colors.white.base
    },
    circle: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})