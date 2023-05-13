export interface Signature {
  id: number;
  phone: string;
  email?: string;
  country: string;
  level: number;
  birthdate?: Date;
  signingDate: Date;
}
