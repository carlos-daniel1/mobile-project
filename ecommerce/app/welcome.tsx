import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'CustomFont-Bold': require('@/assets/fonts/CustomFont-Bold.ttf'),
//     'CustomFont-Regular': require('@/assets/fonts/CustomFont-Regular.ttf'),
//   });
// };

const welcome = () => {
  // const [fontsLoaded, setFontsLoaded] = React.useState(false);

  // if (!fontsLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontsLoaded(true)}
  //       onError={(err: any) => console.log(err)}
  //     />
  //   );
  // }

  return (
    <ImageBackground
      source={require("@/assets/images/pastel-background.jpg")}
      style={styles.background}
    >
      {/* <LinearGradient
        colors={["#3D3949", "#6772A4"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      > */}
      <View style={styles.overlay} />
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("@/assets/images/pastel-icon.png")}
          />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text
            style={{
              fontSize: 23,
              color: "#000",
              fontFamily: "",
              padding: 5,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.registerButton}>Registrar</Text>
        </TouchableOpacity>
      </View>
      {/* </LinearGradient> */}
    </ImageBackground>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "80%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 20,
  },
  registerButton: {
    color: "white",
    backgroundColor: "rgb(94, 46, 14)",
    fontSize: 20,
    borderRadius: 6,
    width: "100%",
    textAlign: "center",
    padding: 8,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
