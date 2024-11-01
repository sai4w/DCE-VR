import { useState } from "react";
import loginCover from "../assets/images/bg-login.png";
import registerCover from "../assets/images/bg-register.png";
import { AuthWrapper } from "../components/auth/authWrapper";
import { RegisterForm_1 } from "../components/auth/forms/registerForm_1";
import { gender, gouvernorats, registerType } from "@src/types";
import { RegisterForm_2 } from "@src/components/auth/forms/registerForm_2";
import { RegisterForm_3 } from "@src/components/auth/forms/registerForm_3";
const RegisterPage = () => {
  const [formId, setFormId] = useState(0);
  const [formData, setFormData] = useState<registerType>({
    register_1: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      termsAndConditions: false,
    },
    register_2: {
      gender: gender.F,
      phone: "",
      birth: new Date(),
      region: gouvernorats.Tunis,
    },
  });
  const authProps =
    formId === 0
      ? {
          headerLabel: "Créer un compte",
          description: "Vous avez déjà un compte ?",
          showSocial: true,
          cover: loginCover,
          backButtonHref: "/login",
          backButtonLabel: "Connectez-vous",
          formPosition: "left",
        }
      : formId === 1
        ? {
            headerLabel: "Créer un compte",
            description: "Vous avez déjà un compte ?",
            showSocial: false,
            cover: registerCover,
            backButtonHref: "/login",
            backButtonLabel: "Connectez-vous",
            formPosition: "right",
          }
        : {
            headerLabel: "Créer un compte",
            description: "Vous avez déjà un compte ?",
            showSocial: false,
            cover: registerCover,
            backButtonHref: "/login",
            backButtonLabel: "Connectez-vous",
            formPosition: "right",
          };

  return (
    <AuthWrapper {...authProps}>
      {formId === 0 ? (
        <RegisterForm_1
          setFormId={setFormId}
          formData={formData}
          setFormData={setFormData}
        />
      ) : formId === 1 ? (
        <RegisterForm_2
          setFormId={setFormId}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <RegisterForm_3 formData={formData} />
      )}
    </AuthWrapper>
  );
};

export default RegisterPage;
