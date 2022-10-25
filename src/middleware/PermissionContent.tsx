import React from 'react';
// import * as AUTH from 'pages/auth/store/Constants';
import { Route, Redirect } from 'react-router-dom';
// import { isEmpty } from 'utils/helpers';
// import { secretKey } from './../config/config';
// import * as jwt from 'jsonwebtoken';
// import { getAuth } from 'utils/jwt';

// const allowedUserChecker = (roles: any, module, middleware) => {
//   if (isEmpty(roles)) {
//     return false;
//   }
//   let isAdmin =
//     roles.name.toLowerCase() == AUTH.ADMIN_NAME.toLowerCase() ||
//     roles.roleId == 1;
//   if (!isAdmin) {
//     let moduleCheck = roles.modulePermissions.find(
//       (roleModule) => roleModule.moduleFunctionId === module.moduleFunctionId
//     );
//     if (isEmpty(moduleCheck)) return false;
//     if (isEmpty(middleware)) return true;
//     return moduleCheck[middleware];
//   }
//   return true;
// };

const PermissionContent = (props) => {
  // const authInfo = getAuth();
  // const authInfo = JSON.parse(localStorage.getItem('profile'));
  // const userRoles = authInfo && authInfo.roles ? authInfo.roles[0] : {};
  const access = false;
  // if (
  //   props.name === AUTH.MODULE_DASHBOARD ||
  //   props.name === 'ChatWidget' ||
  //   props.name === 'SupportChat' ||
  //   props.name === 'UserProfile' ||
  //   props.name === 'UserChangePassword'
  // ) {
  //   access = true;
  // } else {
  //   const module = AUTH.ALL_MODULES.find((module) => module.key == props.name);
  //   access = allowedUserChecker(userRoles, module, props.middle);
  // }
  // if (!access) openNotificationWithIcon('error', 'Bạn không có quyền truy cập');
  return access ? <Route {...props} /> : <Redirect to="/" />;
  // let token = localStorage.getItem('utk');
  // if (token !== '' && token !== undefined && token !== null) {
  // const decoded = jwt.verify(token, secretKey);
  // let pageCurrent = props.middle;
  // let indexPer = decoded.permissions.findIndex(
  //   per => per.path === pageCurrent.url && per.method === pageCurrent.method
  // );
  // return indexPer > -1 ? (
  // 	<Route {...props} />
  // ) : (
  // 	<Redirect from="/" to="/Dashboard" />
  // );
  // return <Route {...props} />;
  // } else {
  //   return false;
  // }
};

export default PermissionContent;
