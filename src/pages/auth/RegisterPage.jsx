import { useEffect } from "react";
import LoginOrRegisterForm from "../../components/LoginOrRegisterForm";


const RegisterPage = () => {
  useEffect(() => {
    document.title = "Register --- Movie"
  })
  return <LoginOrRegisterForm loginOrRegister={"register"} />;
};

export default RegisterPage;