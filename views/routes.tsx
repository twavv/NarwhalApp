import * as React from "react";
import { NavigationStackProp } from "react-navigation-stack";
import {
  NavigationComponent,
  NavigationContext,
  NavigationRoute,
  NavigationScreenProp,
} from "react-navigation";

export type NarwhalRoute<T = {}> = NavigationComponent<{}, {}>;

export function useNavigation<Params = {}>() {
  return React.useContext(NavigationContext) as NavigationScreenProp<
    NavigationRoute,
    Params
  >;
}
