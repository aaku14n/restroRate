import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../Constant";
export default StyleSheet.create({
  base: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
    // backgroundColor: THEME_COLOR
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
    height: 35,
    width: 35
  },
  gbBase: {
    marginBottom: 30
  },
  fbBase: {
    marginTop: 30
  },
  googleLogin: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ea4335",
    height: 60,
    paddingLeft: 70,
    paddingRight: 70,
    backgroundColor: "#ea4335",
    borderRadius: 30
  },
  googleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  google: {
    marginLeft: 25
  },
  facebook: {
    marginLeft: 20
  },
  facebookLogin: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#1877f2",
    height: 60,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: "#1877f2",
    borderRadius: 30
  },
  facebookText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  companyName: {
    fontWeight: "bold",
    fontSize: 35
  },
  companyLogoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60
  }
});
