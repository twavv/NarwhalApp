import { NarwhalRoute } from "../routes";
import { usePromise } from "../../hooks/usePromise";
import { getRepresentatives } from "./api";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RepInfo } from "./RepInfo";
import { AddressEntry } from "./AddressEntry";

export const MyRepsView: NarwhalRoute = () => {
  const [address, setAddress] = React.useState<string>("");
  const reps = usePromise(async () => {
    if (!address) {
      return null;
    }
    return await getRepresentatives(address);
  }, [address]);
  const repsRendered = reps
    ? reps.map((data, i) => <RepInfo key={i} data={data} />)
    : null;
  return (
    <ScrollView>
      <AddressEntry onSubmit={(value) => setAddress(value)} />
      <View style={{ padding: 10 }}>{repsRendered}</View>
    </ScrollView>
  );
};

MyRepsView.navigationOptions = {
  title: "Your Representatives",
};
