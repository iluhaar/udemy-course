import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EventDetailPage";

import RootLayout from "./components/RootLayout/RootLayout";
import EventsNavigation from "./components/Events/EventsNavigation";
import ErrorPage from "./pages/ErrorPage";
import { loadEvents } from "./utils/loaders/eventsLoader";
import { loadEventDetails } from "./utils/loaders/eventDetailsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "events",
        element: <EventsNavigation />,
        children: [
          {
            path: "",
            element: <EventsPage />,
            loader: loadEvents,
          },
          {
            path: ":id",
            element: <EventDetailPage />,
            loader: loadEventDetails,
          },
          {
            path: "new",
            element: <NewEventPage />,
          },
          {
            path: "id/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
