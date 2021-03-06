import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Este campo é obrigatório.'),
  adminName: Yup.string().required('Este campo é obrigatório.'),
  cnpj: Yup.string().required('Este campo é obrigatório.'),
  cep: Yup.string().required('Este campo é obrigatório.'),
  email: Yup.string()
    .email('Por favor, verifique se o e-mail é válido')
    .required('Este campo é obrigatório.'),
  password: Yup.string()
    .min(8, 'A senha precisa de pelo menos 8 digitos')
    .required('Este campo é obrigatório.'),
});

export const createDoneeResolver = yupResolver(validationSchema);
