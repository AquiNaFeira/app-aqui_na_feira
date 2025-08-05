import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28,
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.black.base,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.black.base,
    marginTop: 12,
  },
})