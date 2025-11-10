export type UserSchema = {
  id: string;
  rol: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
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

export type SessionPayload = {
  userId: string;
  role: string;
  expiresAt: Date;
};
