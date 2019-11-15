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
        navTo={"ElectionInfo"}
        label={"Election Info"}
        image={require("../../assets/icons/dates.png")}
      />
      <NavigationIcon
        navTo={"MyReps"}
        label={"My Representatives"}
        image={require("../../assets/icons/politician.png")}
      />
      <NavigationIcon
        navTo={"VoterRegistration"}
        label={"Voter Registration"}
        image={require("../../assets/icons/registration.png")}
      />
      <NavigationIcon
        label={"Polling Locations"}
        image={require("../../assets/icons/location.png")}
      />
      <NavigationIcon
        navTo={"FAQ"}
        label={"FAQs"}
        image={require("../../assets/icons/help.png")}
      />
      <NavigationIcon
        navTo={"LGBTDetroit"}
        image={require("../../assets/icons/lgbtdetroit.png")}
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
