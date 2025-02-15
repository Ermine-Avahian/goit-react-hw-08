import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, changePhoneFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.searchBox}>
      <div>
        <p className={s.label}>Find contacts by name</p>
        <input
          type="text"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          placeholder="Search by name"
        />
      </div>
      <div>
        <p className={s.label}>Find contacts by phone</p>
        <input
          type="text"
          onChange={(e) => dispatch(changePhoneFilter(e.target.value))}
          placeholder="Search by phone"
        />
      </div>
    </div>
  );
};
export default SearchBox;
