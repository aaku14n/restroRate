import React from "react";
import {
  Text,
  View,
  Image,
  RefreshControl,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./css/RecommendFriendStyle";
import defaultRestro from "../../assets/defaultRestro.png";

class RecommendFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "",
      refreshing: false,
      screenNo: 2
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
  byMeClick = screenNo => {
    this.setState({
      screenNo
    });
  };
  forMeClick = screenNo => {
    this.setState({
      screenNo
    });
  };
  gotoRestroPage = id => {
    this.props.navigation.navigate("RestroDetails", {
      restroId: id
    });
  };
  render() {
    return (
      <View style={styles.base} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.heading}>MY RECOMMENDATIONS</Text>
        </View>
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={this.state.screenNo == 2 ? styles.forMeTab : styles.byMeTab}
            onPress={() => this.forMeClick(2)}
          >
            <Text style={this.state.screenNo == 2 ? styles.white : {}}>
              Recommendation for Me
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={this.state.screenNo == 2 ? styles.byMeTab : styles.forMeTab}
            onPress={() => this.byMeClick(1)}
          >
            <Text style={this.state.screenNo !== 2 ? styles.white : {}}>
              Recommendation by Me
            </Text>
          </TouchableOpacity>
        </View>
        {!this.props.myRecommandationList.recomendationByMe ||
          (this.props.myRecommandationList.recomendationByMe.length == 0 &&
            this.state.screenNo == 1 && (
              <Text style={styles.emptyText}>
                Sorry, You don't have any recommendations .
              </Text>
            ))}
        {!this.props.myRecommandationList.recommendationsForMe ||
          (this.props.myRecommandationList.recommendationsForMe.length == 0 &&
            this.state.screenNo == 2 && (
              <Text style={styles.emptyText}>
                Sorry, You don't have any recommendations .
              </Text>
            ))}
        <FlatList
          data={
            this.state.screenNo == 1
              ? this.props.myRecommandationList.recomendationByMe
              : this.props.myRecommandationList.recommendationsForMe
          }
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <View style={styles.recommendationWrapper}>
              <View style={styles.card}>
                {item.recommendedBy == this.props.loginDetails.data._id ? (
                  <View>
                    <Text style={styles.userName}>
                      You recommend{" "}
                      <Text style={styles.userNameBold}>
                        {item.dishInfo.name}
                      </Text>{" "}
                      to{" "}
                      <Text style={styles.userNameBold}>
                        {item.userInfo.name}
                      </Text>
                      .
                    </Text>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.userName}>
                      <Text style={styles.userNameBold}>
                        {item.userInfo.name}
                      </Text>{" "}
                      Recommend me{" "}
                      <Text style={styles.userNameBold}>
                        {item.dishInfo.name}
                      </Text>
                      .
                    </Text>
                  </View>
                )}
                <TouchableWithoutFeedback
                  onPress={() => this.gotoRestroPage(item.restaurantInfo._id)}
                >
                  <Image
                    style={styles.dishImage}
                    source={
                      item.dishInfo.dishImage
                        ? { uri: item.dishInfo.dishImage }
                        : defaultRestro
                    }
                  />
                </TouchableWithoutFeedback>
                <View>
                  <Text style={styles.userNameBold}>{item.dishInfo.name}</Text>
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
