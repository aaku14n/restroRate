import { StyleSheet } from "react-native";
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
  }
});
