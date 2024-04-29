import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state && location.state.error;

  return (
    <div id="error-page" className="text-center mt-10 font-serif">
      <h1 className="text-red-600 text-xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error ? error.message : "Not Found!"}</i>
      </p>
    </div>
  );
}