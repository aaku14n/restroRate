import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../../Constant";
export default StyleSheet.create({
  base: {
    marginBottom: 20,
    padding: 10,
    borderColor: "#c4c4c4",
    borderWidth: 1,
    borderRadius: 5
  },
  imgNameWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  nameWithoutTime: {
    flexDirection: "row"
  },
  pic: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  time: {
    fontSize: 12,
    color: "#999999"
  },
  review: {
    fontSize: 13
  },
  reviewWrapper: {
    marginLeft: 70
  },
  nameRating: {
    marginLeft: 20
  },
  dishname: {
    fontSize: 15,
    color: "#999999",
    marginBottom: 8
  },
  shareIcon: {
    height: 20,
    width: 20,
    alignSelf: "flex-end"
  },
  icon: {
    height: 30,
    width: 30,
    transform: [{ rotate: "45deg" }]
  },
  closeModalIcon: {
    marginTop: 20,
    height: 50,
    marginRight: 20,
    alignItems: "flex-end"
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
  dropdown: {
    height: "auto",
    marginLeft: 10,
    marginRight: 10
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
  buttonsSkip: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",

    marginTop: 30
  },
  skipTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME_COLOR
  },
  commentsInput: {
    marginTop: 80,
    padding: 10,
    width: "100%",
    alignItems: "center"
  },
  textArea: {
    height: 120,

    paddingLeft: 15,
    paddingTop: 10,
    width: "100%",

    borderColor: "#c4c4c4",
    borderWidth: 1
  },
  buttons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50
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
  buttonTitle: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 15
  },
  buttonsSkip: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",

    marginTop: 30
  },
  skipTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME_COLOR
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
  }
});
