import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationComponent } from "react-navigation";
import { NavigationIcon } from "./components";

export const HomeView: NavigationComponent<{}, {}> = () => {
  return (
    <View style={styles.container}>
      <NavigationIcon label={"Issues"} />
      <NavigationIcon label={"Dates"} />
      <NavigationIcon label={"Candidates"} />
      <NavigationIcon label={"FAQs"} />
      <NavigationIcon label={"Locations"} />
    </View>
  );
};

HomeView.navigationOptions = {
  title: "Home",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
