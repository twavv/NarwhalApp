import { NarwhalRoute } from "../routes";
import { MarkdownView } from "../../components/MarkdownView";
import * as React from "react";

const COPY = `# About LGBT Detroit

LGBT Detroit is a Detroit based 501c(3) nonprofit organization (EIN 56-2393981) whose mission is to increase awareness of and support to Detroit's dynamic LGBT culture through education and advocacy with integrity and pride.

For more information, visit [our website](https://www.lgbtdetroit.org/).

## Get Involved
Want to get involved? [Fill out this form](https://docs.google.com/forms/d/1jYyERwDlWqVNupBTlddqHe3k6NAoCjB1O-COhIUPdyc/viewform?ts=596fc381&edit_requested=true).
`;

export const LGBTDetroitView: NarwhalRoute = () => {
  return <MarkdownView markdown={COPY} />;
};

LGBTDetroitView.navigationOptions = {
  title: "Voter ID",
};
