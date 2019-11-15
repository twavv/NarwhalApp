import * as React from "react";
import { Text, TextInput, View } from "react-native";

export const AddressEntry: React.FC<{ onSubmit: (text: string) => void }> = ({
  onSubmit,
}) => {
  const [text, setText] = React.useState("");
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <Text style={{ marginBottom: 5, fontSize: 16 }}>
        Enter your address to find your representatives (include your street
        address, city, and state).
      </Text>
      <TextInput
        value={text}
        placeholder={"Address"}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => onSubmit(text)}
        style={{
          borderWidth: 1,
          borderColor: "#cccccc",
          padding: 5,
          fontSize: 20,
        }}
      />
    </View>
  );
};
