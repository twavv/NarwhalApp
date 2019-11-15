import { NarwhalRoute } from "../routes";
import { usePromise } from "../../hooks/usePromise";
import { getRepresentatives } from "./api";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RepInfo } from "./RepInfo";

export const MyRepsView: NarwhalRoute = () => {
  const address = `220 N 1st St, Ann Arbor, MI, 48104`;
  const reps = usePromise(() => getRepresentatives(address));
  if (!reps) {
    return <View />;
  }
  return (
    <ScrollView>
      {reps.map((data, i) => (
        <RepInfo key={i} data={data} />
      ))}
    </ScrollView>
  );
};

MyRepsView.navigationOptions = {
  title: "Your Representatives",
};
