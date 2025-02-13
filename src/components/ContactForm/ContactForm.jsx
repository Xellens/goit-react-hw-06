import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ім'я є обов'язковим")
    .min(3, "Мінімум 3 символи")
    .max(50, "Максимум 50 символів"),
  number: Yup.string()
    .required("Номер телефону є обов'язковим")
    .min(3, "Мінімум 3 символи")
    .max(50, "Максимум 50 символів"),
});

function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values.name, values.number));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" className={s.error} />

        <label htmlFor="number">Number</label>
        <Field id="number" name="number" type="text" />
        <ErrorMessage name="number" component="div" className={s.error} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
