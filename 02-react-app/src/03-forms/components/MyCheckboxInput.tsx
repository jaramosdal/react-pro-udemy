import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

const MyCheckboxInput = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: "checkbox" });
  //   console.log({ field, meta });Last Name

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

export default MyCheckboxInput;
