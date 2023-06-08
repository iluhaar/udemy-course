import { useLoaderData } from "react-router-dom";

import EventItem from "../components/events/EventItem";

const EventDetailPage = () => {
  const event = useLoaderData();

  return <EventItem event={event} />;
};

export default EventDetailPage;
