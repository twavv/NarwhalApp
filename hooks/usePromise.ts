import * as React from "react";

export const usePromise = <T>(executor: () => Promise<T | null>, deps: any[] = []): T | null => {
  const [value, setValue] = React.useState<T | null>();
  React.useEffect(() => {
    executor().then((value) => setValue(value));
  }, deps);
  return value;
};
