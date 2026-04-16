import React from "react";
import { ScrollView } from "react-native";
import { NewsItem } from "./NewsItem";
import { newsListStyles } from "../styles/estilo";

export const NewsList = ({ news }) => {
  return (
    <ScrollView style={newsListStyles.container}>
      {news.map((item) => (
        <NewsItem
          key={item.id}
          category={item.category}
          title={item.title}
          date={item.date}
        />
      ))}
    </ScrollView>
  );
};
