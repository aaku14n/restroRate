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
  editText: {
    color: "#fff",
    marginTop: 10,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    width: 70
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
  reviewIcon: {
    width: 28,
    height: 28,
    marginLeft: 20
  },
  backIcon: {
    width: 20,
    height: 20,
    transform: [{ rotate: "180deg" }],
    marginLeft: 10
  },
  reviews: {
    marginTop: 30
  },
  tabs: {
    backgroundColor: "#fff"
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
  },
  myReviews: {
    height: 60,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "#c4c4c4",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  reviewTab: {
    fontSize: 20,
    marginLeft: 40
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    marginBottom: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  iconWrapper: {
    width: "32%"
  },
  icon: {
    width: 30,
    height: 30
  },
  headingWrapper: {
    fontWeight: "bold",
    fontSize: 20
  },
  reviewBase: {
    width: "100%",
    height: "100%",
    padding: 10
  }
});
