import { json } from "react-router-dom";

export const loadEventDetails = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();

    return resData.event;
  }
};
