import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../Constant";
export default StyleSheet.create({
  base: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  googleIcon: {
    height: 30,
    width: 30
  },
  fbIcon: {
    height: 20,
    width: 20
  },
  guestIcon: {
    height: 30,
    width: 30
  },
  gbBase: {
    marginBottom: 30
  },
  fbBase: {
    marginTop: 0
  },
  logo: {
    height: 140,
    width: 140
  },
  googleLogin: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ea4335",
    height: 50,

    backgroundColor: "#ea4335",
    borderRadius: 30,
    width: 300
  },
  googleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  google: {
    marginLeft: 10
  },
  facebook: {
    marginLeft: 10
  },
  facebookLogin: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#1877f2",
    height: 50,

    backgroundColor: "#1877f2",
    width: 300,
    borderRadius: 30
  },
  guestLogin: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    height: 60,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 300
  },
  facebookText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  guestText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14
  },
  orText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14
  },
  companyName: {
    // fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
    textAlign: "center"
  },
  companyLogoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60
  },
  orButton: {
    marginTop: 20,
    marginBottom: 20
  },
  loader: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  tncButton: {
    marginTop: 40
  },
  tncText: {
    fontSize: 14,
    borderColor: "#000",
    paddingBottom: 5,
    borderBottomWidth: 1
  }
});
