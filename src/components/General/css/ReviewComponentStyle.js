import { StyleSheet } from "react-native";
export default StyleSheet.create({
  base: {
    marginBottom: 60
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
    fontSize: 13,
    fontWeight: "bold"
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
