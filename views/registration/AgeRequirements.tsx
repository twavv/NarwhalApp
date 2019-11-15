import { NarwhalRoute } from "../routes";
import { MarkdownView } from "../../components/MarkdownView";
import * as React from "react";

const COPY = `# Under 18? Don't stress.

You must be 18 by Election Day to register to vote for the upcoming election. The next election is March 10, 2020.`;

export const AgeRequirementsView: NarwhalRoute = () => {
  return <MarkdownView markdown={COPY} />;
};

AgeRequirementsView.navigationOptions = {
  title: "Age Requirements",
};
