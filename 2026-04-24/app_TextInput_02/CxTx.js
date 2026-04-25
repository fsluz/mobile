import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function CxTx(props) {
  return (
    <TextInput
      style={[styles.input, props.multiline && styles.multiline]}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType={props.keyboardType}
      maxLength={props.maxLength}
      editable={props.editable}
      secureTextEntry={props.secureTextEntry}
      multiline={props.multiline}
      numberOfLines={props.numberOfLines}
      autoCapitalize={props.autoCapitalize}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#333",
    width: "90%",
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
  },

  multiline: {
    height: 100,
    textAlignVertical: "top",
  },
});