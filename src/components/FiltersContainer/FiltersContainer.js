import "./FiltersContainer.css";
import { useFilter } from "../../contexts";

const FiltersContainer = () => {
  const { filterBy, setFilterBy } = useFilter();

  const filterHandler = (e) => {
    if (filterBy === e.currentTarget.childNodes[0].textContent) {
      console.log(e.currentTarget.childNodes[0].textContent);
      setFilterBy("Best");
    } else {
      setFilterBy(e.currentTarget.childNodes[0].textContent);
    }
  };

  return (
    <div className="filters-container">
      <button
        className={filterBy === "Best" ? "filter-active-chip" : "filter-chip"}
        onClick={filterHandler}
      >
        Best
        <span class="material-symbols-outlined">rocket</span>
      </button>
      <button
        className={filterBy === "Hot" ? "filter-active-chip" : "filter-chip"}
        onClick={filterHandler}
      >
        Hot
        <span class="material-symbols-outlined">local_fire_department</span>
      </button>
      <button
        className={filterBy === "New" ? "filter-active-chip" : "filter-chip"}
        onClick={filterHandler}
      >
        New
        <span class="material-symbols-outlined">new_releases</span>
      </button>
      <button
        className={filterBy === "Top" ? "filter-active-chip" : "filter-chip"}
        onClick={filterHandler}
      >
        Top
        <span class="material-symbols-outlined">leaderboard</span>
      </button>
    </div>
  );
};

export { FiltersContainer };
