import { useEffect, useRef } from "react";

export function useDidMountEffect(callback: any) {
  const didMount = useRef(false);

  useEffect(() => {
    if (callback && !didMount.current) {
      didMount.current = true;
      callback();
    }
  });
}

export default useDidMountEffect;
