import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl
} from "react-native";
import RestroCard from "./RestroCard";

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }
  componentDidMount() {
    this.props.getHomeData();
  }
  gotoRestroPage = () => {
    this.props.navigation.navigate("RestroDetails");
  };
  doRefresh = async () => {
    await this.setState({ refreshing: true });
    await this.props.getHomeData();
    await this.setState({ refreshing: false });
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
          <View style={styles.base}>
            <FlatList
              data={this.props.homeData}
              renderItem={({ item }) => (
                <RestroCard
                  imgUri={item.dishInfo.dishImage}
                  name={item.dishInfo.name}
                  cusions={item.restaurantInfo.name}
                  //   distance={item.distance}
                  rate={item.rate}
                  onPress={this.gotoRestroPage}
                />
              )}
              ref={ref => (this.flatlistref = ref)}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.doRefresh}
                />
              }
            />
          </View>
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
