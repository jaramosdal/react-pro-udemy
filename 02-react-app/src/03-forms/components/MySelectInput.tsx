import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

const MySelectInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  //   console.log({ field, meta });Last Name

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

export default MySelectInput;
