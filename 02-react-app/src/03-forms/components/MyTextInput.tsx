import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  //   console.log({ field, meta });Last Name

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

export default MyTextInput;
