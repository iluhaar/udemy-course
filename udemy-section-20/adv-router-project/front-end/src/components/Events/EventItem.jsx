import { Link } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={`${event.image}?text=${event.title}`} alt={event.title} />
      <Link to={`/events/${event.id}`}>
        <h1>{event.title}</h1>
      </Link>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={`${event.id}/edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
