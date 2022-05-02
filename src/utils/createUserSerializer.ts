import {string} from 'yup';
import {capitalize} from './capitalize';

export default function createUserSerializer(data: TDonor) {
  data.name = capitalize(data.name);

  return data;
}
