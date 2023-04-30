import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

const MySelectInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  //   console.log({ field, meta });Last Name

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};

export default MySelectInput;
