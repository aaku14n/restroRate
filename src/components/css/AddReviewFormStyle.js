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
    width: "100%"
  },
  textArea: {
    height: 150,
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 30,
    paddingTop: 10,
    width: "100%"
  },
  restroName: {
    marginBottom: 20
  },
  imgBox: {
    position: "relative"
  },
  editIcon: {
    position: "absolute",
    left: 130,
    top: 28
  }
});
