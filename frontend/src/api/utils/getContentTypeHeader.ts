export const getContentTypeHeader = (body: FormData | any) => {
  if (!(body instanceof FormData)) {
    return { 'Content-Type': 'application/json' };
  }
};
