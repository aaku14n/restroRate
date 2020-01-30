import React from "react";
import { Text, View } from "react-native";
import styles from "./css/RecommendFriendStyle";

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
    console.log(this.props.myRecommandationList);
    return (
      <View style={styles.base}>
        <Text style={styles.heading}>Coming Soon.....</Text>
      </View>
    );
  }
}

export default RecommendFriend;
