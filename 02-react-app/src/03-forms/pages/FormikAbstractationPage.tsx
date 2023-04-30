import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import MyTextInput from "../components/MyTextInput";
import MySelectInput from "../components/MySelectInput";
import MyCheckboxInput from "../components/MyCheckboxInput";

const FormikAbstractationPage = () => {
  return (
    <div>
      <h1> Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos.")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos.")
            .required("Requerido"),
          email: Yup.string()
            .email("Debe ser un email válido.")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], `Debe de aceptar las condiciones`),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Javi"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Ramos"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="javiramos@email.com"
              type="email"
            />

            <MySelectInput label="Job Type" name="jobType">
              <option value="">Pick somethingc</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelectInput>

            <MyCheckboxInput label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAbstractationPage;
