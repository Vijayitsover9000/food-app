import { useFormik } from "formik";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <label className="email-label" htmlFor="email">
          Email :
          <input
            className="email-input-box"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {/* {formik.errors.email && formik.touched.email && formik.errors.email} */}
        </label>
        <label className="password-label">
          Set Password :
          <input
            className="password-input-box"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {/* {errors.password && touched.password && errors.password} */}
        </label>
        <button
          className="login-submit-button"
          type="submit"
        //   disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
