import ErrorLoader from "components/templates/Loader/ErrorLoader";

const Error = () => (
    <ErrorLoader>
      <>
        <h6 className="content">
          "Oops! It seems there was an error during the live chat.{" "} <br /> Our live chat session feature is undergoing maintenance to bring you even
          better service!"
        </h6>
      </>
    </ErrorLoader>
  );

export default Error;
