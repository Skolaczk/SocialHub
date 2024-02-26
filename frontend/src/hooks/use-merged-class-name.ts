import { useMemo } from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export const useMergedClassName = (...classLists: ClassNameValue[]) => {
  return useMemo(() => twMerge(classLists), [classLists]);
};
