import cover from "../assets/images/bg-login.png";

import { useState } from "react";
import { AuthWrapper } from "../components/auth/authWrapper";
import { LoginForm } from "../components/auth/forms/login-form";
const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <AuthWrapper
      headerLabel="Bienvenue"
      description="Vous n'avez pas de compte ?"
      loading={loading}
      showSocial={true}
      cover={cover}
      backButtonHref="/register"
      backButtonLabel="Inscrivez-vous"
      formPosition="left"
    >
      <LoginForm loading={loading} setLoading={setLoading} />
    </AuthWrapper>
  );
};

export default LoginPage;
