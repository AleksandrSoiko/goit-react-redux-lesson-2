import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/actions";

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handleFilterChange(statusFilters.all)}
        selected={statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.active)}
        selected={statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.completed)}
        selected={statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
