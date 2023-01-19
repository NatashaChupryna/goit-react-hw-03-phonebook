import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { Button } from './Form.styled';
import styled from '@emotion/styled';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(3).required('Name is required'),
  number: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .min(7)
    .required('Phone number is required'),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values.name);
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <ContactsForm>
        <label>
          Name :
          <NameInput type="text" name="name" placeholder="Nataliia" />
          <ErrorMessages name="name" component="div" />
        </label>

        <label>
          Number :
          <NumberInput type="tel" name="number" placeholder="+380XXXXXXXXX" />
          <ErrorMessages name="number" component="div" />
        </label>
        <Button type="submit">Add contact</Button>
      </ContactsForm>
    </Formik>
  );
};

const ContactsForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NameInput = styled(Field)`
  margin-left: 25px;
  :focus-visible {
    box-shadow: #516aed 0px 5px 15px;
    border: none;
    outline: transparent;
  }
`;
const NumberInput = styled(Field)`
  margin-left: 10px;
  :focus-visible {
    box-shadow: #516aed 0px 5px 15px;
    border: none;
    outline: transparent;
  }
`;
const ErrorMessages = styled(ErrorMessage)`
  color: red;
`;
