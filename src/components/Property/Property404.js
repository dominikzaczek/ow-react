import { Link } from 'react-router-dom';

export default function Property404({ id }) {
  return (
    <div>
      <h1>404</h1>
      <p>
        Property with id <b>{id}</b> does not exist.
      </p>
      <Link to="/">Go back</Link>
    </div>
  );
}
