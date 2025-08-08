import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: colors.green.base,
  },
  topSection: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 4,
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white.base,
    marginBottom: 4,
  },
  logoSubtitle: {
    fontSize: 15,
    color: colors.white.base,
  },
  bottomCard: {
    flex: 2,
    backgroundColor: colors.white.base,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1
  },
  welcomeTitle: {
    fontSize: 30,
    fontFamily: fontFamily.bold,
    color: colors.black.base,
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.black.base,
    marginTop: 30,
    marginBottom: 30,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 65,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  loginButton: {
    backgroundColor: colors.green.base,
  },
  registerButton: {
    backgroundColor: colors.white.base,
    borderWidth: 1,
    borderColor: colors.black.base,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.white.base,
  },
});