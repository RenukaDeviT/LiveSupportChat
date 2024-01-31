import ErrorLoader from "components/templates/Loader/ErrorLoader";

const UnSecurePage = () => (
    <ErrorLoader>
      <>
        <h6 className="content">
          "Oops! It seems there was an error during the page load.{" "} <br />
          Unsecure Connection!!!
        </h6>
      </>
    </ErrorLoader>
  );

export default UnSecurePage;
