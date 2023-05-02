import { Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

const RegisterFormikPage = () => {
  return (
    <div>
      <h1> Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe de ser de 3 caracteres o más.")
            .max(15, "Debe tener 15 caracteres o menos.")
            .required("Requerido"),
          email: Yup.string()
            .email("Revise el formato del correo.")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Mínimo 6 letras.")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales.")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Javi" />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="javiramos@email.com"
            />

            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="******"
            />

            <MyTextInput
              label="Confirm password"
              name="password2"
              type="password"
              placeholder="******"
            />

            <button type="submit">Submit</button>

            <button type="submit" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
