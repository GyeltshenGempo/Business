import * as Yup from 'yup';
import {messages} from '../../shared/SharedModels/Validations';

export const signUpValidation = Yup.object().shape({
  phone: Yup.number().required(messages.required),
  password: Yup.string().required(messages.required),
  email: Yup.string().required(messages.required),
  profile_attributes: Yup.object().shape({
    first_name: Yup.string().required(messages.required),
    last_name: Yup.string().required(messages.required),
    gender: Yup.string().required(messages.required),
    //dob: Yup.date().nullable().required(messages.required),
  }),
  confirmation_password: Yup.string().required(messages.required).when('password', {
    is: val => (!!(val && val.length > 0)),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Password Mismatch'
    )
  }),
});

export const signInValidation = Yup.object().shape({
  login: Yup.string().required(messages.required),
  password: Yup.string().required(messages.required),
});

export const signUpInitialValues = {
  email: '',
  phone: '',
  profile_attributes: {first_name: '', last_name: '', gender: ''},
  password: '',
  role_ids: [2]
};


export const gender = [{title: 'Male', value: 'male'}, {title: 'Female', value: 'female'}];
