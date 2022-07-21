import { useEffect } from "react";
import LoginOrRegisterForm from "../../components/LoginOrRegisterForm";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login --- Movie"
  })
  return <LoginOrRegisterForm loginOrRegister={"login"} />;
};

export default LoginPage;