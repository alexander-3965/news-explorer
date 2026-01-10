import "./NothingFound.css";
import notFound from "../../assets/not-found_v1.svg";

function NothingFound() {
  return (
    <div className="nothing-found">
      <img
        src={notFound}
        alt="Not Found Image"
        className="nothing-found__image"
      />
      <h3 className="nothing-found__title">Nothing Found</h3>
      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NothingFound;
