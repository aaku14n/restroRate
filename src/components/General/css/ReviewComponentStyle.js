import { StyleSheet } from "react-native";
export default StyleSheet.create({
  base: {
    marginBottom: 40,
    padding: 20,
    borderColor: "#c4c4c4",
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: "#c4c4c4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 2
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
    marginTop: 15
  },
  nameRating: {
    marginLeft: 20
  },
  dishname: {
    fontSize: 15,
    color: "#999999",
    marginBottom: 8
  }
});
