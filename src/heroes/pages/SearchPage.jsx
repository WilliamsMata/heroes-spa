import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
    onResetForm();
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-12 col-sm-5 animate__animated animate__fadeIn">
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search Hero"
              name="searchText"
              autoComplete="off"
              className="form-control "
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-12 col-sm-7 mt-2 mt-sm-0">
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a Hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            There's no hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
