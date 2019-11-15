import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useNavigation } from "../../routes";

export const NavigationIcon: React.FC<{
  navTo?: string;
  image: ImageSourcePropType;
  label?: string;
}> = ({ image, label, navTo }) => {
  const navigation = useNavigation();
  const imageStyle = label
    ? { width: 80, height: 50, resizeMode: "contain" }
    : { width: 140, height: 140, resizeMode: "contain" };
  return (
    <TouchableHighlight
      onPress={() => {
        if (!navTo) {
          return;
        }
        navigation.navigate(navTo);
      }}
    >
      <View
        style={{
          width: 150,
          height: 150,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#cccccc",
          borderWidth: 1,
        }}
      >
        <Image
          style={{ width: 80, height: 50, resizeMode: "contain" }}
          source={image}
        />
        {label ? <Text>{label}</Text> : null}
      </View>
    </TouchableHighlight>
  );
};
