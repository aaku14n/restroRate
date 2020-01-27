import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../Constant";

export default StyleSheet.create({
  base: {
    width: "100%",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    marginTop: 40
  },
  review: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  form: {
    marginTop: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6
  },
  input: {
    height: 50,
    backgroundColor: "#f4f4f4",
    paddingLeft: 30,
    width: "100%",
    borderRadius: 5
  },
  textArea: {
    height: 150,
    backgroundColor: "#f4f4f4",
    paddingLeft: 30,
    paddingTop: 10,
    width: "100%",
    borderRadius: 5
  },
  restroName: {
    marginBottom: 30,
    width: "100%",
    alignItems: "center"
  },
  imageWrapper: {
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
    height: 250
  },
  imageLoader: {
    position: "absolute",
    top: 90,
    zIndex: 10
  },
  closeIcon: {
    marginTop: 18,
    backgroundColor: "#c4c4c4",
    height: 50,
    width: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  editIcon: {
    width: 30,
    height: 30,
    transform: [{ rotate: "45deg" }]
  },
  compassIcon: {
    position: "absolute",
    right: 15,
    top: 15
  },
  button: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    height: 50
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
  captureImageButton: {
    width: 150,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 15
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 12
  },
  captureButtonWrapper: {
    flexDirection: "row",
    marginTop: 18,
    height: 250,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTitle: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 15
  },
  loader: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
