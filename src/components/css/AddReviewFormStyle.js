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

  modal: {
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    position: "relative"
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
    paddingLeft: 0,
    width: "100%",
    borderRadius: 5
  },
  inputName: {
    height: 50,
    paddingLeft: 0,
    width: "100%",
    borderColor: "#c4c4c4",
    borderWidth: 1,
    paddingLeft: 15,
    color: "#000000"
  },
  textArea: {
    height: 120,

    paddingLeft: 15,
    paddingTop: 10,
    width: "100%",

    borderColor: "#c4c4c4",
    borderWidth: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: 30
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold"
  },
  skipTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME_COLOR
  },
  restroName: {
    marginBottom: 30,
    width: "100%",
    alignItems: "center"
  },
  commentsInput: {
    marginTop: 80,
    padding: 10,
    width: "100%",
    alignItems: "center"
  },
  imageWrapper: {
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
    height: 250,
    zIndex: -1
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
  closeModalIcon: {
    marginTop: 20,
    height: 50,
    marginRight: 20,
    alignItems: "flex-end"
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
    height: 50,
    marginBottom: 60
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
  captureHeading: {
    color: "#999999",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  },
  captureImageButton: {
    width: 150,
    borderRadius: 5,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
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
  disableButtonTitle: {
    color: "#000",
    fontSize: 16,
    marginTop: 15,
    fontWeight: "bold"
  },
  loader: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  imageLoader: {
    position: "absolute",
    right: 90,
    top: 90
  },
  dropdown: {
    height: "auto",
    marginLeft: 10,
    marginRight: 10
  },
  tagWrapper: {
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  tag: {
    borderWidth: 1,
    borderColor: "#c4c4c4",
    padding: 10,
    borderRadius: 3,
    marginRight: 10,
    marginTop: 10,
    display: "flex",
    flexDirection: "row"
  },
  modalButton: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
    backgroundColor: THEME_COLOR
  },
  skipButton: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    bottom: 100,
    position: "absolute",
    left: 50
  },
  icon: {
    height: 30,
    width: 30,
    transform: [{ rotate: "45deg" }]
  },
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50
  },
  buttonsSkip: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",

    marginTop: 30
  },
  itemSuggest: {
    padding: 10,
    borderColor: "#c4c4c4",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    zIndex: 10000,
    backgroundColor: "#ffffff",
    width: "100%"
  },
  frndSuggest: {
    padding: 10,
    position: "relative",
    borderColor: "#c4c4c4",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    zIndex: 10000
  },
  autocompleteContainer: {
    height: 50,
    paddingLeft: 15
  }
});
