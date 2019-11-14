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
  label: string;
}> = ({ image, label, navTo }) => {
  const navigation = useNavigation();
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
        <Image height={60} width={60} source={image} />
        <Text>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};
