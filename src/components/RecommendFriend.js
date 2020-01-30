import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./css/RecommendFriendStyle";
import defaultRestro from "../../assets/defaultRestro.png";

class RecommendFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: ""
    };
  }
  componentDidMount() {
    this.props.myRecommendation();
  }

  render() {
    return (
      <ScrollView style={styles.base} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.heading}>MY RECOMMENDATION</Text>
        </View>
        {this.props.myRecommandationList &&
        this.props.myRecommandationList.map ? (
          this.props.myRecommandationList.map((recommed, id) => {
            return (
              <View style={styles.recommendationWrapper} key={id}>
                <View style={styles.card}>
                  <View>
                    <Text style={styles.userName}>
                      {recommed.userInfo.name} Recommend me .
                    </Text>
                  </View>
                  <View>
                    <Image
                      style={styles.dishImage}
                      source={
                        recommed.dishInfo.dishImage
                          ? { uri: recommed.dishInfo.dishImage }
                          : defaultRestro
                      }
                    />
                  </View>
                  <View>
                    <Text style={styles.userName}>
                      {recommed.dishInfo.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.discription}>
                      {recommed.description}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })
        ) : (
          <Text />
        )}
      </ScrollView>
    );
  }
}

export default RecommendFriend;
