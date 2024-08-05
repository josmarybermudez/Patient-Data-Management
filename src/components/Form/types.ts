export type FormValues = {
  name: string;
  avatar: string;
  description: string;
  website: string;
};

export interface FormProps {
  onSubmit: (values: FormValues) => void;
  submitText: string;
}
