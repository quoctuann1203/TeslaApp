import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },

  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  carTitle: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 60,
    width: "100%",
  },
});
export default styles;
