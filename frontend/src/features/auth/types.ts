export type TLoginCommand = {
  email: string;
  password: string;
};

export type TRegisterCommand = {
  email: string;
  username: string;
  password: string;
};

export type TAccessToken = {
  access_token: string;
};
