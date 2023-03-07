export type FormInputProps = {
  register: any;
  errors: any;
};

export type SubmitButtonProps = {
  isLoading: boolean;
  title: string;
};

export type LoginDataState = {
  email: string;
  password: string;
};

export interface RegisterDataState extends LoginDataState {
  name: string;
}
