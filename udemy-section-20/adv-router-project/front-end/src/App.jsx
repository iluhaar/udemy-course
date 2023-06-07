import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EventDetailPage";

import RootLayout from "./components/RootLayout/RootLayout";
import EventsNavigation from "./components/Events/EventsNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "events",
        element: <EventsNavigation />,
        children: [
          { path: "", element: <EventsPage /> },
          {
            path: ":id",
            element: <EventDetailPage />,
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
