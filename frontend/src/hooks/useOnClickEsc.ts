import { useCallback, useEffect } from 'react';

export const useOnClickEsc = (fn: () => void) => {
  const handleClickEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') fn();
    },
    [fn],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleClickEsc);

    return () => {
      document.removeEventListener('keydown', handleClickEsc);
    };
  }, [handleClickEsc]);
};
