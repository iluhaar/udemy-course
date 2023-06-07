import EventItem from "../components/Events/EventItem";

const events = [
  {
    id: 1,
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    date: "2021-05-12",
    image: "https://via.placeholder.com/250x100.png",
  },

  {
    id: 2,
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    date: "2021-05-30",
    image: "https://via.placeholder.com/250x100.png",
  },
  {
    id: 3,
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    date: "2021-05-30",
    image: "https://via.placeholder.com/250x100.png",
  },
];

const EventsPage = () => {
  return (
    <>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </>
  );
};

export default EventsPage;
