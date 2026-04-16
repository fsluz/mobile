import React from "react";
import { View, Text } from "react-native";
import { headerStyles } from "../styles/estilo";

export const Header = ({ title }) => {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.headerTitle}>{title}</Text>
      <Text style={headerStyles.subtitle}>cadastre-se, comente, saiba mais</Text>
    </View>
  );
};
