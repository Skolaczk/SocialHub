import { RefObject, useCallback, useEffect } from 'react';

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  fn: () => void,
  selector?: string,
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const el = ref?.current;

      if (
        el &&
        !el.contains(event.target as Node) &&
        (!selector || !(event.target as HTMLElement).closest(selector))
      ) {
        fn();
      }
    },
    [selector, fn, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
};
