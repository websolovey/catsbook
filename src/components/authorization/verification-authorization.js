import { isLogin } from "../../actions/action_login";

function verificationOfAuthorization(login, pass, disp, userData, err) {
  if (login === userData.userName && pass === userData.password) {
    localStorage.setItem("isLogin", "true");
    disp(isLogin(true));
  } else {
    
    err(true);
  }
}

export default verificationOfAuthorization;
