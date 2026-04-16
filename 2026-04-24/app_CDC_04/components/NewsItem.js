import React from "react";
import { View, Text } from "react-native";
import { newsItemStyles } from "../styles/estilo";

export const NewsItem = ({ category, title, date }) => {
  return (
    <View style={newsItemStyles.newsItem}>
      <Text style={newsItemStyles.category}>{category}</Text>
      <Text style={newsItemStyles.title}>{title}</Text>
      <Text style={newsItemStyles.date}>{date}</Text>
    </View>
  );
};
