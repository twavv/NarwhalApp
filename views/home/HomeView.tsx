import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationComponent } from "react-navigation";
import { NavigationIcon } from "./components";

export const HomeView: NavigationComponent<{}, {}> = () => {
  return (
    <View style={styles.container}>
      <NavigationIcon>Issues</NavigationIcon>
      <NavigationIcon>Dates</NavigationIcon>
      <NavigationIcon>Candidates</NavigationIcon>
      <NavigationIcon>FAQs</NavigationIcon>
      <NavigationIcon>Locations</NavigationIcon>
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
