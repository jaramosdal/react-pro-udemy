import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

const MyCheckboxInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  //   console.log({ field, meta });Last Name

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};

export default MyCheckboxInput;
