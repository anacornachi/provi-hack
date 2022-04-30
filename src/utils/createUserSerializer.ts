import {string} from 'yup';
import {capitalize} from './capitalize';

type Props = {
  firstName: string;
  lastName: string;
};

export default function createUserSerializer(data: Props) {
  data.firstName = capitalize(data.firstName);
  data.lastName = capitalize(data.lastName);

  return data;
}
