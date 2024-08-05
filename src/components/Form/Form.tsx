import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormProps } from "./types";
import {
  ButtonContainer,
  ErrorText,
  InputContainer,
  Label,
  SubmitButton,
} from "./styles";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  avatar: Yup.string().url("Invalid URL").required("Required"),
  description: Yup.string()
    .min(10, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  website: Yup.string().url("Invalid URL").required("Required"),
});

const PatientForm = ({ onSubmit, submitText }: FormProps) => (
  <Formik
    initialValues={{
      name: "",
      avatar: "",
      description: "",
      website: "",
    }}
    validationSchema={UserSchema}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <Field id="name" type="text" name="name" autoComplete="on" />
          <ErrorMessage name="name" component={ErrorText} />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="avatar">Avatar URL</Label>
          <Field id="avatar" type="text" name="avatar" />
          <ErrorMessage name="avatar" component={ErrorText} />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="description">Description</Label>
          <Field id="description" as="textarea" name="description" />
          <ErrorMessage name="description" component={ErrorText} />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="website">Website</Label>
          <Field id="website" type="text" name="website" />
          <ErrorMessage name="website" component={ErrorText} />
        </InputContainer>

        <ButtonContainer>
          <SubmitButton type="submit" disabled={isSubmitting} $variant="dark">
            {submitText}
          </SubmitButton>
        </ButtonContainer>
      </Form>
    )}
  </Formik>
);

export default PatientForm;
