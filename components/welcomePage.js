import { StyleSheet, View, Image, Text } from "react-native";

export default function WelcomePage() {
  return (
    <View style={style.welcome}>
      <Image
        source={
        require('../assets/Vector.png')
        }
        style={{ width: 200, height: 200 }}
      />
      <Text style={style.logoText}>Foodu</Text>
    </View>
  );
}

const style = StyleSheet.create({
  welcome: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom:30,
  },

  logoText: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform:"uppercase",
    color: "#000",
    textAlign: "center",
    margin: 10,
    fontFamily: "sans-serif-light",
  }
});
