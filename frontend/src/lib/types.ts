export type TResponse<T> = {
  data?: T;
  error?: { error: string; message: string; statusCode: number };
};

export type TParams = {
  params: {
    slug: string;
  };
};
