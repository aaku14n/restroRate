import { StyleSheet } from "react-native";
export default StyleSheet.create({
  base: {
    width: "100%",
    backgroundColor: "white"
  },
  subBase: {
    paddingLeft: 30,
    paddingRight: 30
  },
  input: {
    height: 50,
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 25,
    padding: 15,
    paddingLeft: 30,
    width: "100%"
  },
  searchInput: {
    marginTop: 110,
    width: "100%",
    alignItems: "center"
  },
  recentSearch: {
    marginTop: 28
  },
  recentSearchTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black"
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55
  },
  imagesWrapper: {
    flexDirection: "row",
    marginTop: 20
  },
  imageTitleWrapper: {
    marginRight: 35
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 15
  },
  recommendWrapper: {
    marginTop: 28
  }
});
