import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  popup: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 24,
    width: '95%',
    maxWidth: 400,
    gap: 24,
    borderWidth: 2,
    borderColor: colors.green.base
  },
  iconRound: {
    backgroundColor: '#285d3562',
    borderRadius: 999,
    padding: 16,
    alignSelf: 'center'
  },
  titleContainer:{
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    padding: 12
  },
  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
  },
  subtitle:{
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    color: '#535252'
  },
  actionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  methodsContainer:{
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24
  },
  methodOption: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.green.base,
    borderRadius: 10,
    padding: 18,
    gap: 8
  },
  methodTitle: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    textAlign: 'center'
  },
  methodPressed: {
    backgroundColor: colors.green.base
  },
  methodTitlePress: {
    color: colors.white.base
  }
});