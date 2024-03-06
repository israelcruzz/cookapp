import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    marginTop: 24,
    fontFamily: theme.fonts.family.bold,
  },
  subtitle: {
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.regular,
    marginTop: 12,
    marginBottom: 38,
    color: theme.colors.gray_400
  },
  ingredient: {
    flexWrap: "wrap",
    flexDirection: "row",
    paddingBottom: 200,
    gap: 12
},
});
