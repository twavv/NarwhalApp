import * as React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "../views/routes";

export const NavRow: React.FC<{
  navTo: string;
  label: string;
}> = ({ navTo, label }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => navigate(navTo)}
    >
      <Text style={{ fontSize: 20 }}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 0.5,
    margin: 5,
  },
});
