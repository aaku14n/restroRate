import { StyleSheet } from "react-native";
export default StyleSheet.create({
  base: {
    width: "100%",
    backgroundColor: "white"
  },
  subBase: {
    paddingLeft: 20,
    paddingRight: 20
  },
  input: {
    height: 50,
    backgroundColor: "#f4f4f4",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    paddingLeft: 30,
    width: "100%"
  },
  searchInput: {
    marginTop: 110,
    width: "100%",
    alignItems: "center",
    position: "relative",
    zIndex: 10
  },
  searchList: {
    width: "100%",
    position: "absolute",
    top: 50,
    zIndex: 20,
    backgroundColor: "#ffffff"
  },
  recentSearch: {
    marginTop: 28
  },
  recentSearchTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
    zIndex: 0
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 55
  },
  imagesWrapper: {
    flexDirection: "row",
    marginTop: 30
  },
  imageTitleWrapper: {
    marginRight: 35
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 15,
    width: 100
  },
  recommendWrapper: {
    marginTop: 32
  },
  listItemWrapper: {
    marginTop: 25
  },
  frndSuggest: {
    padding: 10,
    borderColor: "#c4c4c4",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    zIndex: 10000
  },
  searchPageHeight: {
    paddingBottom: 400,
    height: "100%"
  }
});
