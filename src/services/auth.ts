import api from './api';

type Props = {
  email: string;
  password: string;
  role: string;
};

export const authenticate = async ({email, password, role}: Props) => {
  if (role == 'donor') {
    const {data} = await api.post('/donor/login', {
      email,
      password,
    });
    return data;
  } else {
    const {data} = await api.post('/donee/login', {
      email,
      password,
    });
    return data;
  }
};

export const signUp = async (userData: TDonor, role: string) => {
  if (role === 'donor') {
    const {data} = await api.post('/donor/create', {
      ...userData,
      confirmpassword: userData.password,
    });
    return data;
    // } else if (role === 'realEstate') {
    //   const {name, cnpj, state, initialBroker, initialProperties, ...user} =
    //     userData as TNewRealEstate;
    //   const {data} = await api.post('/realestate/register', {
    //     userData: {
    //       state,
    //       ...user,
    //       role: 'realEstate',
    //     },
    //     realEstateData: {
    //       name,
    //       cnpj,
    //       state,
    //       initialBroker: initialBroker === 'Sim',
    //       initialProperties,
    //     },
    // });
  }
};
