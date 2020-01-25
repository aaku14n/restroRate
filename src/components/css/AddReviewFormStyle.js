import { StyleSheet } from "react-native";

export default StyleSheet.create({
  base: {
    width: "100%",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15
  },
  review: {
    fontSize: 25,
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
    fontWeight: "bold",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 30,
    width: "100%",
    borderRadius: 15
  },
  textArea: {
    height: 150,
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 30,
    paddingTop: 10,
    width: "100%",
    borderRadius: 15
  },
  restroName: {
    marginBottom: 30,
    width: "100%",
    alignItems: "center"
  },
  imgBox: {},
  editIcon: {
    position: "absolute",
    left: 130,
    top: 28
  },
  compassIcon: {
    position: "absolute",
    right: 15,
    top: 15
  }
});
