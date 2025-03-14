export interface User {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isVerified: boolean;
  balances: Balance[];
  employmentType?: string;
  experience?: string;
  monthlyIncome?: string;
  idCard?: string;
  idRecord?: string;
  taxNumber?: string;
}

export interface Transaction {
  id: string;
  userId: string;
  status?: string;
  type?: string;
  amount?: number;
  currency?: string;
  createdAt: string;
  updatedAt: string;
  note?: string;
}

export interface Balance {
  id: string;
  userId: string;
  value: number;
  currency: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Price {
  symbol: string;
  price: number;
}
