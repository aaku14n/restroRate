import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Picker,
  TouchableWithoutFeedback,
  Modal,
  TouchableHighlight
} from "react-native";
import styles from "./css/RecommendFriendStyle";

class RecommendFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: ""
    };
  }

  // componentDidMount() {
  //   this.props.getAllUser();
  // }

  render() {
    return (
      <View style={styles.base}>
        <Text>sdfsf</Text>
      </View>
    );
  }
}

export default RecommendFriend;
