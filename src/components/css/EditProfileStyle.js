import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../Constant";
export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: 15,
    position: "relative"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  iconWrapper: {
    width: "32%"
  },
  icon: {
    width: 30,
    height: 30
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20
  },
  dummyImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#c4c4c4"
  },
  loader: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  inputWrapper: {
    alignItems: "center",
    marginTop: 70,
    padding: 20
  },
  restroName: {
    marginTop: 70,
    width: "100%"
  },
  input: {
    height: 50,
    backgroundColor: "#f4f4f4",
    paddingLeft: 30,
    width: "100%",
    borderRadius: 5
  },
  button: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",

    padding: 20
  },
  buttonStyle: {
    backgroundColor: THEME_COLOR,
    height: 50,
    width: 300,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  },
  buttonTitle: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 15
  },
  disableButtonTitle: {
    color: "#000",
    fontSize: 16,
    marginTop: 15,
    fontWeight: "bold"
  },
  disableButtonStyle: {
    backgroundColor: "#c4c4c4",
    height: 50,
    width: 300,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  },
  goBack: {
    fontSize: 16
  }
});
