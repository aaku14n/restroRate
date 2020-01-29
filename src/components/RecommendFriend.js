import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Picker,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./css/RecommendFriendStyle";

const aray = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" }
];

class RecommendFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: ""
    };
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  componentDidMount() {
    this.props.getAllUser();
  }
  render() {
    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
            <Image
              style={styles.icon}
              source={require("../../assets/back.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dropdown}>
          <Picker
            mode={"dropdown"}
            selectedValue={this.state.selectedUser}
            style={{
              height: 50,
              width: "100%"
            }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ selectedUser: itemValue })
            }
          >
            {this.props.userList && this.props.userList.map
              ? this.props.userList.map((item, id) => {
                  return (
                    <Picker.Item key={id} label={item.name} value={item.name} />
                  );
                })
              : null}
          </Picker>
        </View>
        <View style={styles.button}>
          <TouchableWithoutFeedback
            onPress={() => this.submitReview()}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTitle}>RECOMMEND</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default RecommendFriend;
