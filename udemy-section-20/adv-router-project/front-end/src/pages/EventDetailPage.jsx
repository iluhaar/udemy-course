import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const { id } = useParams();

  return <div>EventDetailPage: {id}</div>;
};

export default EventDetailPage;
