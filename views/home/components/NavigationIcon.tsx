import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export const NavigationIcon: React.FC<{
  image: ImageSourcePropType;
  label: string;
}> = ({ image, label }) => {
  return (
    <TouchableHighlight onPress={() => {}}>
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
        <Image height={60} width={60} source={image} />
        <Text>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};
