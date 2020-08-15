import React, { useState, useEffect } from "react";
import { Image } from "react-native";

export default function ProfilePic(props) {
  const [profilePic, setProfilePic] = useState(props.profilePic);
  useEffect(() => {
    if (props.profilePic !== profilePic) {
      setProfilePic(props.profilePic);
    }
  });
  return (
    <Image
      key={`${profilePic}_123`}
      style={{ width: 60, height: 60, borderRadius: 30 }}
      source={
        profilePic
          ? {
              uri: profilePic,
              cache: "reload"
            }
          : require("../../assets/profilePic.png")
      }
    />
  );
}
