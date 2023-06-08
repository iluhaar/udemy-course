import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error has occurred";
  let message = "Oops, somethings went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page not found";
    message = "Sorry, we could not find this page";
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
