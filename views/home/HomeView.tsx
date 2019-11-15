import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { NavigationComponent } from "react-navigation";
import { NavigationIcon } from "./components";

export const HomeView: NavigationComponent<{}, {}> = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
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
    </ScrollView>
  );
};

HomeView.navigationOptions = {
  title: "Home",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
