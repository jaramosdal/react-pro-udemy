import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MyTextInput } from "../components";

const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik
        initialValues={{
          name: "Javi",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label }) => {
              return (
                <MyTextInput
                  key={name}
                  type={type as any}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              );
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicFormPage;
