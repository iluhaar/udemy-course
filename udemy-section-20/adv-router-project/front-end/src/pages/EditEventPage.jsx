import { useParams } from "react-router-dom";

const EditEventPage = () => {
  const { id } = useParams();

  return <div>EditEventPage {id}</div>;
};

export default EditEventPage;
