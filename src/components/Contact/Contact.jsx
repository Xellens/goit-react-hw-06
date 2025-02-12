import s from "./Contact.module.css";
import PropTypes from "prop-types";

function Contact({ contact, onDeleteContact }) {
  const { id, name, number } = contact;

  return (
    <li className={s.item}>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
