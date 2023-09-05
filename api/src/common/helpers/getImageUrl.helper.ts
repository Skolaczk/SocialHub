import * as process from 'process';

export const getImageUrl = (filename: string) =>
  `${process.env.URL}/${filename}`;
