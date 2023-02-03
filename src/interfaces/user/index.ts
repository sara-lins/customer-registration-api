import { Role } from "@prisma/client";

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  fullname: string;
  email: string;
  password: string;
  role: Role;
  phone: string;
  created_at: string;
  updated_at: string;
}

export interface IUserResponse {
  id: string;
  fullname: string;
  email: string;
  password?: string;
  role: Role;
  phone: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserDataUpdate {
  fullname?: string;
  email?: string;
  password?: string;
  phone?: string;
}
