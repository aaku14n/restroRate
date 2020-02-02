import { StyleSheet } from "react-native";

export default StyleSheet.create({
  base: {
    width: "100%",
    backgroundColor: "white",
    height: "100%",
    padding: 20,
    marginTop: 30
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  recommendationWrapper: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#c4c4c4"
  },
  card: {},
  dishImage: {
    width: "100%",
    borderRadius: 15,
    height: 250
  },
  userName: {
    fontSize: 16,

    marginBottom: 10
  },
  userNameBold: {
    fontWeight: "bold"
  },
  discription: {
    fontSize: 16,

    marginBottom: 10,
    color: "#c4c4c4"
  },
  emptyText: {
    marginTop: 40,
    textAlign: "center"
  }
});
