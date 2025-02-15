import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import toast from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    toast.success("You have successfully logged in!");
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <Field className={s.input} type="email" name="email" />
          <ErrorMessage className={s.error} name="email" component="div" />
        </label>

        <label className={s.label}>
          Password
          <Field className={s.input} type="password" name="password" />
          <ErrorMessage className={s.error} name="password" component="div" />
        </label>

        <button className={s.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
