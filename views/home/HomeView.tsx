import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationComponent } from "react-navigation";
import { NavigationIcon } from "./components";

export const HomeView: NavigationComponent<{}, {}> = () => {
  return (
    <View style={styles.container}>
      <NavigationIcon
        label={"Current Issues"}
        image={require("../../assets/icons/issues.png")}
      />
      <NavigationIcon
        label={"Election Dates"}
        image={require("../../assets/icons/dates.png")}
      />
      <NavigationIcon
        label={"Candidates"}
        image={require("../../assets/icons/politician.png")}
      />
      <NavigationIcon
        label={"Voter Registration"}
        image={require("../../assets/icons/registration.png")}
      />
      <NavigationIcon
        label={"Polling Locations"}
        image={require("../../assets/icons/location.png")}
      />
      <NavigationIcon
        label={"FAQs"}
        image={require("../../assets/icons/help.png")}
      />
    </View>
  );
};

HomeView.navigationOptions = {
  title: "Home",
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
