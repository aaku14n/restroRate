import React from "react";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import * as Google from "expo-google-app-auth";

function AuthLogin(props) {
  const googleLogin = async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "256489819169-fbrimsq4tnjcjdab5cunbl3f7mpft81p.apps.googleusercontent.com",
        iosClientId:
          "256489819169-upbnknuik7b30d2rfam5cv94fq4qmpnp.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });
      console.log(result);
      if (result.type === "success") {
        this.props.navigation.navigate("Search");
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Button title={"google login here"} onPress={() => googleLogin()} />
    </View>
  );
}

export default AuthLogin;
