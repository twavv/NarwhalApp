import React from "react";
import { View, Text } from "react-native";

export const NavigationIcon: React.FC = ({ children }) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        margin: 10,
        alignItems: "center",
        borderColor: "#cccccc",
        borderWidth: 1,
      }}
    >
      <Text>{children}</Text>
    </View>
  );
};
