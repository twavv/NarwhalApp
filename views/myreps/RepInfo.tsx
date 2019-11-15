import * as React from "react";
import { Representative } from "./api";
import { Text, View } from "react-native";

export const RepInfo: React.FC<{ data: Representative }> = ({ data }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 20 }}>{data.name}</Text>
      <Text style={{ fontSize: 15 }}>{data.title}</Text>
      <Text style={{ fontSize: 10 }}>{data.party}</Text>
    </View>
  );
};
