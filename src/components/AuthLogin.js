import React from "react";
import styles from "./css/AuthLoginStyle";
import { Text, View, Image, TouchableHighlight, Button } from "react-native";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID, APP_ID } from "../Constant";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import logoImg from "../../assets/logo.png";
import Auth from "../Auth";
function AuthLogin(props) {
  const googleLogin = async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        iosClientId: IOS_CLIENT_ID,
        scopes: ["profile", "email"],
        redirectUrl: Auth.packageName + ":/oauthredirect"
      });
      if (result.type === "success") {
        const userDetailsObj = {
          accessToken: result.accessToken,
          idToken: result.idToken,
          name: result.user.name,
          email: result.user.email,
          socialPlatform: "Google",
          profilePic: result.user.photoUrl
        };
        await props.userLogin(userDetailsObj);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  const facebookLogin = async function logIn() {
    try {
      await Facebook.initializeAsync(APP_ID);
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture`
        );
        const userDetail = await response.json();

        const userDetailsObj = {
          id: userDetail.id,
          accessToken: token,
          name: userDetail.name,
          email: "test@gmail.com",
          socialPlatform: "Facebook",
          profilePic: userDetail.picture.data.url
        };
        await props.userLogin(userDetailsObj);
        alert("Logged in!", `Hi ${await response.json()}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
  return (
    <View style={styles.base}>
      <View style={styles.companyLogoWrapper}>
        <View>
          <Image style={styles.logo} source={logoImg} />
        </View>
        <Text style={styles.companyName}> Welcome to Dish Serve</Text>
      </View>
      <View style={styles.loginButtonWrapper}>
        <TouchableWithoutFeedback
          style={styles.gbBase}
          onPress={() => googleLogin()}
        >
          <View style={styles.googleLogin}>
            <View>
              <Image
                style={styles.googleIcon}
                source={require("../../assets/google.png")}
              />
            </View>
            <View style={styles.google}>
              <Text style={styles.googleText}>Continue with Google</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={styles.fbBase}
          onPress={() => facebookLogin()}
        >
          <View style={styles.facebookLogin}>
            <View>
              <Image
                style={styles.fbIcon}
                source={require("../../assets/facebook.png")}
              />
            </View>
            <View style={styles.facebook}>
              <Text style={styles.facebookText}>Continue with Facebook</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default AuthLogin;
