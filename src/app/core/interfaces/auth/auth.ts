import { WritableSignal, signal } from "@angular/core";

export abstract class IUser {
  id!: number;
  name!: string;
  email!: string;
  email_verified_at?: any;
  phone!: string;
  phone_verified_at!: string;
  role!: string;
  profile_link?: any;
  code?: any;
  gender?: any;
  image?: any;
  date_of_birth?: any;
  created_at!: string;
  updated_at!: string;
  deleted_at?: any;
  token!: string;
  public isLoggedIn: WritableSignal<boolean> = signal(false)

}
