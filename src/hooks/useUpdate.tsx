import {useEffect, useRef} from 'react';

function useUpdate(fn: () => void, deps: any []) {
  const number = useRef(0);
  useEffect(() => {
    number.current++;
  });
  useEffect(() => {
    if (number.current > 1) {
      fn();
    }
    // eslint-disable-next-line
  }, deps);
}

export {useUpdate};
