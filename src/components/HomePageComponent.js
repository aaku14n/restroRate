import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator
} from "react-native";
import RestroCard from "./RestroCard";

class HomePageComponent extends React.Component {
  componentDidMount() {
    this.props.getHomeData();
  }
  gotoRestroPage = () => {
    this.props.navigation.navigate("RestroDetails");
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <HeaderContainer {...this.props} />
        {this.props.homeDataLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#c4c4c4" />
          </View>
        ) : (
          <ScrollView style={styles.base}>
            {this.props.homeData && this.props.homeData.map ? (
              this.props.homeData.map((item, id) => {
                return (
                  <RestroCard
                    key={id}
                    imgUri={item.dishInfo.dishImage}
                    name={item.dishInfo.name}
                    cusions={item.restaurantInfo.name}
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
        )}
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
  },
  loader: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default HomePageComponent;
