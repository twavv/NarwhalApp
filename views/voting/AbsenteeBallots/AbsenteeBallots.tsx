import { Asset } from "expo-asset";
import * as React from "react";
import { Text } from "react-native";
import Markdown from "react-native-markdown-renderer";

import { NarwhalRoute } from "../../routes";

export const AbsenteeBallotsView: NarwhalRoute = () => {
  const [copy, setCopy] = React.useState<string | null>(null);
  React.useEffect(() => {
    (async () => {
      const file = Asset.fromModule(
        require("../../../assets/copy/AbsenteeBallots.md"),
      );
      await file.downloadAsync();
      const response = await fetch(file.uri);
      const text = await response.text();
      setCopy(text);
    })();
  });
  if (copy === null) {
    return <Text>Loading...</Text>;
  }
  return <Markdown>{copy}</Markdown>;
};
