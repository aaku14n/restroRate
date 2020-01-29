import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../Constant";

export default StyleSheet.create({
  base: {
    width: "100%",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    zIndex: 2
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  icon: {
    width: 30,
    height: 30
  },
  dropdown: {
    marginTop: 50,
    height: 50,
    backgroundColor: "#f4f4f4",
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 60,
    backgroundColor: THEME_COLOR,
    borderRadius: 5
  },
  buttonTitle: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 15
  }
});
