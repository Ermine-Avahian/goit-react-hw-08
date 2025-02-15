import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <div>
        <p className={s.name}>
          <i className="fas fa-user"></i>
          {name}
        </p>
        <p className={s.number}>
          <i className="fas fa-phone"></i>
          {number}
        </p>
      </div>
      <button
        className={s.btnDelete}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
