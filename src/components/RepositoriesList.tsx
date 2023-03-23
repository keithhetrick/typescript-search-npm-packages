import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  return (
    <div >
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />{" "}
        <button>Search</button>
      </form>

      <br />

      {error ? <h3>{error}</h3> : false}
      {loading ? <h3>Loading...</h3> : false}

      <ul style={{ margin: "auto", width: "28vw", textAlign: "left", overflow: "auto", cursor: "pointer" }}>
        {!error && !loading
          ? data.map((name) => <li key={name}>{name}</li>)
          : false}
      </ul>
    </div>
  );
};

export default RepositoriesList;
