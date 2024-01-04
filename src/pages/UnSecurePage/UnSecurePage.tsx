import SplashLoader from "components/templates/Loader/SplashLoader";

const UnSecurePage = () => (
    <SplashLoader>
      <>
        <h6 className="content yellow">
          "Oops! It seems there was an error during the page load.{" "}
        </h6>
        <h6 className="content">
          Unsecure Connection!!!
        </h6>
      </>
    </SplashLoader>
  );

export default UnSecurePage;
