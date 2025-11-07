export type UserSchema = {
  id: number;
  rol: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  state: string;
};

export type LoginFormState =
  | {
      errors?: {
        username?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
