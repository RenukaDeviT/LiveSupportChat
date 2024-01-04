import { string as yupString, object as yupObject } from 'yup';
import validationErrors from './validationErrors';

const userNameValidation = yupString().required(validationErrors.required);
const passwordValidation = yupString().required(validationErrors.required);

const validation = {
    username: userNameValidation,
    password: passwordValidation
  };
  

export const signInValidationSchema = yupObject().shape({
    username: validation.username,
    password: validation.password,
  });

export default validation;