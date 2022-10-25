import HttpService from 'utils/http';
import { LoginReq } from './../model/LoginModel';
import { saveToken } from 'utils/jwt';

export const login = async (loginData: LoginReq) => {
  // Fake for FE pass Login:
  const { email, password } = loginData;
  if (email === 'admin' && password === 'admin') {
    const token = 'testtokenloginapp';
    await saveToken(token);
    return Promise.resolve(token);
  } else {
    return Promise.reject({ code: 401, data: null, message: ['Email/Password invalid'] });
  }
  // const apiEndpoint = 'login';
  // return HttpService.post(apiEndpoint, loginData)
  //   .then(async (res: any) => {
  //     if (!res?.token) {
  //       return;
  //     }
  //     const { token } = res;
  //     await saveToken(token);
  //     console.log('Repson login', token);
  //     return token || {};
  //   })
  //   .catch(() => {
  //     return false;
  //   });
};
