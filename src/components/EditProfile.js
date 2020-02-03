import React from "react";
import styles from "./css/EditProfileStyle";
import DummyImage from "../../assets/EditImage.png";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from "react-native";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      updatedName: ""
    };
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  onChangeName = updatedName => {
    this.setState({
      updatedName
    });
  };
  EditProfileImage = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled == false) {
      this.setState({
        photo: pickerResult
      });
    }
  };

  openAlert = message => {
    Alert.alert(
      "ERROR",
      message,
      [
        {
          text: "Cancel"
        }
      ],
      { cancelable: false }
    );
    return true;
  };
  updateProfile = async () => {
    if (!this.state.photo) {
      this.openAlert("Select Profile Image");
      return;
    }
    if (!this.state.updatedName) {
      this.openAlert("Please enter name");
      return;
    }
    let localUri = this.state.photo.uri;
    let filename = localUri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    const imageObj = {
      uri: this.state.photo.uri,
      name: filename,
      type
    };
    const imageRes = await this.props.uploadImage(imageObj);
    if (imageRes.imageInfo.err) {
      console.log("Error");
    } else {
      const updateUserDetail = {
        profilePic: imageRes.imageInfo.filename,
        name: this.state.updatedName
      };
      const updateProfile = await this.props.updateProfile(updateUserDetail);
    }
  };
  render() {
    const { photo } = this.state;
    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.goBack()}
            style={styles.iconWrapper}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/back.png")}
            />
          </TouchableOpacity>
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>UPDATE PROFILE</Text>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <TouchableOpacity onPress={() => this.EditProfileImage()}>
            <Image
              style={styles.dummyImage}
              source={photo && photo.uri ? { uri: photo.uri } : DummyImage}
            />
          </TouchableOpacity>
          <View style={styles.restroName}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={text => this.onChangeName(text)}
              value={this.state.updatedName}
            />
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => this.updateProfile()}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTitle}>UPDATE PROFILE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EditProfile;
