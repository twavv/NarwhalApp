import * as React from "react";

export const usePromise = <T>(executor: () => Promise<T>): T | null => {
  const [value, setValue] = React.useState<T | null>();
  React.useEffect(() => {
    executor().then((value) => setValue(value));
  }, []);
  return value;
};
