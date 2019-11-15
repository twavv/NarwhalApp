import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";

export const NavDrawer: React.FC<{}> = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    flex: 1,
    paddingTop: 5,
  },
});
