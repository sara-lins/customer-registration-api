import { Prisma } from "@prisma/client";
import { hashSync } from "bcryptjs";

export const admUserMock = {
  email: "johndoe@mail.com",
  fullname: "John Doe",
  password: hashSync("123456"),
  phone: "88888888888",
  role: "ADM",
};

export const admLoginMock = {
  email: "johndoe@mail.com",
  password: "123456",
};

export const clientUserMock = {
  email: "pauldoe@mail.com",
  fullname: "Paul Doe",
  password: hashSync("123456"),
  phone: "88888888889",
  role: "client",
};

export const clientLoginMock = {
  email: "pauldoe@mail.com",
  password: "123456",
};

export const ContactMock = {
  email: "suzandoe@mail.com",
  fullname: "Suzan Doe",
  password: hashSync("123456"),
  phone: "88888888887",
  role: "Contact",
};
