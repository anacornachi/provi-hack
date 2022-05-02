import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
  codigo: Yup.string().required('Este campo é obrigatório.'),
  quantidade: Yup.number().required('Este campo é obrigatório.'),
  unidade: Yup.string().required('Este campo é obrigatório.'),
  vencimento: Yup.date().required('Este campo é obrigatório.')
});

export const createProductResolver = yupResolver(validationSchema);
