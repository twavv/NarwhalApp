import React from "react";
import Markdown from "react-native-markdown-renderer";
import { ScrollView } from "react-native";

export const MarkdownView: React.FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <ScrollView style={{ padding: 15 }}>
      <Markdown>{markdown}</Markdown>
    </ScrollView>
  );
};
