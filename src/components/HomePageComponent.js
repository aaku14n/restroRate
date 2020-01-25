import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import RestroCard from "./RestroCard";

class HomePageComponent extends React.Component {
  componentDidMount() {
    this.props.getHomeData();
  }
  gotoRestroPage = () => {
    this.props.navigation.navigate("RestroDetails");
  };
  render() {
    console.log(this.props.homeData);
    return (
      <View style={styles.wrapper}>
        <HeaderContainer {...this.props} />
        <ScrollView style={styles.base}>
          {this.props.homeData && this.props.homeData.map ? (
            this.props.homeData.map((item, id) => {
              return (
                <RestroCard
                  key={id}
                  imgUri={item.dishImage}
                  name={item.restaurantInfo.name}
                  cusions={item.dishName}
                  //   distance={item.distance}
                  rate={item.rate}
                  onPress={this.gotoRestroPage}
                />
              );
            })
          ) : (
            <Text />
          )}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  base: {
    width: "100%",
    padding: 20,
    marginTop: 60,
    backgroundColor: "#fff"
  },
  wrapper: {
    // marginBottom: 50,
    backgroundColor: "#fff"
  }
});
export default HomePageComponent;
