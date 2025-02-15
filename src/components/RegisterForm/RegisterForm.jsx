import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./RegisterForm.module.css";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name is too long")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Registration successful!");
      })
      .catch(() => {
        toast.error("Registration failed. Please try again.");
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form} autoComplete="off">
        <label className={s.label}>
          Username
          <Field className={s.input} type="text" name="name" />
          <ErrorMessage className={s.error} name="name" component="div" />
        </label>

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
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
