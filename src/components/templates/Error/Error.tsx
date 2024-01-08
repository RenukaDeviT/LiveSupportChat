import SplashLoader from "components/templates/Loader/SplashLoader";

const Error = () => (
    <SplashLoader>
      <>
        <h6 className="content yellow">
          "Oops! It seems there was an error during the live chat.{" "}
        </h6>
        <h6 className="content">
          Our live chat session feature is undergoing maintenance to bring you even
          better service!"
        </h6>
      </>
    </SplashLoader>
  );

export default Error;
