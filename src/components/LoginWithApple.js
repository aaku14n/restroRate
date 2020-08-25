import React from "react";
import * as AppleAuthentication from "expo-apple-authentication";
export default function LoginWithApple(props) {
  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={50}
      style={{
        width: 300,
        height: 50,
        fontSize: 12,
        marginTop: 20,
        borderColor: "#000"
      }}
      fontSize={12}
      onPress={async () => {
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL
            ]
          });
          console.log("in Apple logged in ");
          console.log(typeof credential);
          props.onLogin(credential);
          // signed in
        } catch (e) {
          if (e.code === "ERR_CANCELED") {
            // handle that the user canceled the sign-in flow
          } else {
            // handle other errors
          }
        }
      }}
    />
  );
}
