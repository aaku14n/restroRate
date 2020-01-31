import React from "react";
import { Text, View, Image, RefreshControl, FlatList } from "react-native";
import styles from "./css/RecommendFriendStyle";
import defaultRestro from "../../assets/defaultRestro.png";

class RecommendFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "",
      refreshing: false
    };
  }
  componentDidMount() {
    this.props.myRecommendation();
  }
  doRefresh = async () => {
    await this.setState({ refreshing: true });
    await this.props.myRecommendation();
    await this.setState({ refreshing: false });
  };
  render() {
    return (
      <View style={styles.base} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.heading}>MY RECOMMENDATIONS</Text>
        </View>
        {!this.props.myRecommandationList ||
          (this.props.myRecommandationList.length == 0 && (
            <Text style={styles.emptyText}>
              Sorry, You don't have any recommendations.
            </Text>
          ))}
        <FlatList
          data={this.props.myRecommandationList}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <View style={styles.recommendationWrapper}>
              <View style={styles.card}>
                <View>
                  <Text style={styles.userName}>
                    {item.userInfo.name} Recommend me .
                  </Text>
                </View>
                <View>
                  <Image
                    style={styles.dishImage}
                    source={
                      item.dishInfo.dishImage
                        ? { uri: item.dishInfo.dishImage }
                        : defaultRestro
                    }
                  />
                </View>
                <View>
                  <Text style={styles.userName}>{item.dishInfo.name}</Text>
                </View>
                <View>
                  <Text style={styles.discription}>{item.description}</Text>
                </View>
              </View>
            </View>
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
    );
  }
}

export default RecommendFriend;
