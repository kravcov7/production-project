import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";

export interface StateSchema {
  loginForm: any;
  counter: CounterSchema;
  user: UserSchema;
}
