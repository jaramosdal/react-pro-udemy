import "../styles/styles.css";

const FormikBasicPage = () => {
  return (
    <div>
      <h1> Formik Basic Tutorial</h1>

      <form noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />
        <span>First Name is required</span>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />
        <span>Last Name is required</span>

        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" />
        <span>Email is required</span>
        <span>Check for a valid email format</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;
