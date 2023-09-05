import * as process from 'process';

export const getImageUrl = (filename: string) =>
  filename ? `${process.env.URL}/${filename}` : null;
