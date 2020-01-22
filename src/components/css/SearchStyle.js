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
    marginTop: 25
  },
  recentSearchTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black"
  },
  image: {
    width: 100,
    height: 100
  },
  imagesWrapper: {
    flexDirection: "row"
  }
});
