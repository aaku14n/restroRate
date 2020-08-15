import React from "react";
import styles from "./css/AuthLoginStyle";
import { Text, View, Image, ActivityIndicator, Linking } from "react-native";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID, APP_ID } from "../Constant";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import logoImg from "../../assets/logo.png";
import Auth from "../Auth";
import LoginWithApple from "./LoginWithApple";
function AuthLogin(props) {
  const googleLogin = async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        iosClientId: IOS_CLIENT_ID,
        scopes: ["profile", "email"],
        redirectUrl: Auth.packageName + ":/oauthredirect",
        iosStandaloneAppClientId: IOS_CLIENT_ID,
        androidStandaloneAppClientId: ANDROID_CLIENT_ID
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
        permissions: ["public_profile", "email"]
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
          email: userDetail.email,
          socialPlatform: "Facebook",
          profilePic: userDetail.picture.data.url
        };
        await props.userLogin(userDetailsObj);
        alert("Logged in!", `Hi ${await response.json()}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      // alert(`Facebook Login Error: ${message}`);
    }
  };

  const appleLogin = async userDetail => {
    console.log(userDetail, userDetail.fullName.givenName);
    const userDetailsObj = {
      appleId: userDetail.user,
      accessToken: userDetail.identityToken,
      name: userDetail.fullName.givenName ? userDetail.fullName.givenName : "",
      email: userDetail.email,
      socialPlatform: "Apple",
      profilePic: ""
    };
    await props.userLogin(userDetailsObj);
    alert("Logged in!", `Hi ${await response.json()}!`);
  };
  const guestLogin = () => {
    props.guestLogin();
  };
  const viewTnC = () => {
    Linking.canOpenURL("http://disherve.com/tnc").then(supported => {
      if (supported) {
        Linking.openURL("http://disherve.com/tnc");
      } else {
        console.log("Don't know how to open URI: " + "http://disherve.com/tnc");
      }
    });
  };
  if (props.userLoginLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  return (
    <View style={styles.base}>
      <View style={styles.companyLogoWrapper}>
        <View>
          <Image style={styles.logo} source={logoImg} />
        </View>
        <Text style={styles.companyName}> Welcome to Disherve</Text>
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

        <LoginWithApple onLogin={appleLogin} />

        <View style={styles.orButton}>
          <Text style={styles.orText}>OR</Text>
        </View>
        <TouchableWithoutFeedback
          style={styles.guestLoginButton}
          onPress={() => guestLogin()}
        >
          <View style={styles.guestLogin}>
            <View>
              <Image
                style={styles.guestIcon}
                source={require("../../assets/guest.png")}
              />
            </View>
            <View style={styles.facebook}>
              <Text style={styles.guestText}>Continue as Guest</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => viewTnC()}
          style={styles.tncButton}
        >
          <Text style={styles.tncText}>View Term and Conditions</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default AuthLogin;
