import { createBrowserRouter } from "react-router-dom";
import Main from "../routes/Main";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Information from "../pages/Information";
import ScheduleClinic from "../pages/ScheduleClinic";
import HotelBooking from "../pages/HotelBooking";
import SeminarSchedule from "../pages/SeminarSchedule";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/information",
        element: <Information />,
      },{
        path: "/seminar-schedule",
        element: <SeminarSchedule />,
      },{
        path: "/schedule-clinic",
        element: <ScheduleClinic />,
      },{
        path: "/hotel-booking",
        element: <HotelBooking />,
      },
    ],
  },
]);
export default router;
