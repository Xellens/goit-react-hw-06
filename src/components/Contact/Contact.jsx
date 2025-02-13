import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  return (
    <li className={s.item}>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
