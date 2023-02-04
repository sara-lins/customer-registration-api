export interface IContact {
  fullname: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export interface IContactResponse {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
  userId: string;
}

export interface IContactDataUpdate {
  fullname?: string;
  email?: string;
  phone?: string;
}
