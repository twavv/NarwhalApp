import React from "react";
import { Text, TouchableHighlight } from "react-native";

export const NavigationIcon: React.FC<{ label: string }> = ({ label }) => {
  return (
    <TouchableHighlight
      style={{
        width: 100,
        height: 100,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#cccccc",
        borderWidth: 1,
      }}
      onPress={() => {}}
    >
      <Text>{label}</Text>
    </TouchableHighlight>
  );
};
