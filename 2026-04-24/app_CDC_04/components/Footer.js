import React from "react";
import { View, Text, Pressable, Linking } from "react-native";
import { footerStyles } from "../styles/estilo";

export const Footer = () => {
  const openEmail = () => {
    Linking.openURL("mailto:contato@example.com");
  };

  const openWhatsApp = () => {
    Linking.openURL("whatsapp://send?phone=5511999999999");
  };

  const openTelegram = () => {
    Linking.openURL("tg://resolve?domain=username");
  };

  return (
    <View style={footerStyles.footer}>
      <Text style={footerStyles.text}>Receba nosso informativo <Text style={footerStyles.bold}>gratuitamente</Text></Text>
      <View style={footerStyles.iconsContainer}>
        <Pressable onPress={openEmail} style={footerStyles.iconButton}>
          <Text style={footerStyles.icon}>✉️</Text>
        </Pressable>
        <Pressable onPress={openWhatsApp} style={footerStyles.iconButton}>
          <Text style={footerStyles.icon}>💬</Text>
        </Pressable>
        <Pressable onPress={openTelegram} style={footerStyles.iconButton}>
          <Text style={footerStyles.icon}>✈️</Text>
        </Pressable>
      </View>
    </View>
  );
};
