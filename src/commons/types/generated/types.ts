export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ICheckAuthNumberInput = {
  authNumber: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type ICreateUserInput = {
  email: Scalars['String']['input'];
  nickname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type IMutation = {
  __typename?: 'Mutation';
  CheckAuthNumber: Scalars['String']['output'];
  CreateUser: IUser;
  Logout: Scalars['String']['output'];
  login: Scalars['String']['output'];
  resotreAccessToken: Scalars['String']['output'];
  sendEmail: IUser;
};


export type IMutationCheckAuthNumberArgs = {
  checkAuthNumberInput: ICheckAuthNumberInput;
};


export type IMutationCreateUserArgs = {
  SignUpUser: ICreateUserInput;
};


export type IMutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type IMutationSendEmailArgs = {
  email: Scalars['String']['input'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchUser: IUser;
  isVailEmail: IUser;
  isVailNickName: IUser;
};


export type IQueryIsVailEmailArgs = {
  email: Scalars['String']['input'];
};


export type IQueryIsVailNickNameArgs = {
  nickname: Scalars['String']['input'];
};

export type IUser = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};
