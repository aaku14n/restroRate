import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
export function getRestaurantsUrl(url) {
  return url
    ? url
        .replace("UPDATE_IMAGE_WIDTH", screenWidth)
        .replace("UPDATE_IMAGE_HEIGHT", screenWidth)
        .replace(
          "UPDATE_GOOGLE_API_KEY",
          "AIzaSyDM4BtVx-2cRWTEEu3JOdx0szr735nXzPU"
        )
    : "";
}
