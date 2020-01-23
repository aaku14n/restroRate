import { StyleSheet } from "react-native";
export default StyleSheet.create({
  base: {
    width: "100%",
    height: "100%"
  },
  infoWrapper: {
    backgroundColor: "#304763",
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  imageWrapper: {
    width: 60
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  info: {
    marginLeft: 20,
    width: "60%"
  },
  name: {
    fontSize: 20,
    color: "#fff"
  },
  email: {
    fontSize: 16,
    color: "#fff"
  },
  logout: {
    width: 40,
    height: 40,
    transform: [{ rotate: "-90deg" }]
  },
  reviews: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  myReview: {
    fontSize: 20,
    fontWeight: "bold"
  },
  heading: {
    borderBottomColor: "#c4c4c4",
    borderBottomWidth: 2,
    marginBottom: 30,
    paddingBottom: 10
  }
});
