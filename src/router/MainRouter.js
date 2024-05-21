import { Route } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import React from "react";
import NotFoundPage from "../NotFoundPage";

const UserLayout = React.lazy(() => import('../component/layout/UserLayout'));
const Dashboard = React.lazy(() => import('../component/user/dashboard/Dashboard'));
const LoginForm = React.lazy(() => import('../component/nav/Login'));
const Signup = React.lazy(() => import('../component/nav/SignUp'));
const Details = React.lazy(() => import('../component/user/dashboard/details/Seasondetail'));
const EventsDetails = React.lazy(() => import('../component/user/dashboard/details/EventsDetails'));
const Kathmandu = React.lazy(() => import('../component/nav/navdetails/Kathmandu'));
const Chitwan = React.lazy(() => import('../component/nav/navdetails/Chitwan'));
const Lumbini = React.lazy(() => import('../component/nav/navdetails/Lumbini'));
const Annapurna = React.lazy(() => import('../component/nav/navdetails/Annapurna'));
const Pokhara = React.lazy(() => import('../component/nav/navdetails/Pokhara'));
const Everest = React.lazy(() => import('../component/nav/navdetails/Everest'));
const Advanture = React.lazy(() => import('../component/nav/navdetails/thingsToDetails/Advanture'));
const Nature = React.lazy(() => import('../component/nav/navdetails/thingsToDetails/Nature'));
const Culture = React.lazy(() => import("../component/nav/navdetails/thingsToDetails/Culture"));
const Wellness = React.lazy(() => import("../component/nav/navdetails/thingsToDetails/Wellness"));
const TripIdeas = React.lazy(() => import("../component/nav/navdetails/trip/TripIdeas"));
const BookYourTicket = React.lazy(() => import("../component/nav/navdetails/trip/BookYourTicket"));
const TravelDetails = React.lazy(() => import("../component/nav/navdetails/trip/TravelDetails"));
const AboutNepal = React.lazy(() => import("../component/nav/navdetails/trip/AboutNepal"));
const TravelUpdates = React.lazy(() => import("../component/nav/TravelUpdates"));
const About = React.lazy(() => import("../component/user/dashboard/details/Footer/About"));
const ContactUs = React.lazy(() => import("../component/user/dashboard/details/Footer/ContactUs"));
const Yamori = React.lazy(() => import("../component/user/dashboard/details/eventsfestival/Yamori"));
const Holi = React.lazy(() => import("../component/user/dashboard/details/eventsfestival/Holi"));
const Indrajatra = React.lazy(() => import("../component/user/dashboard/details/eventsfestival/Indrajatra"));
const PashupatiArati = React.lazy(() => import("../component/user/dashboard/details/eventsfestival/PashupatiArati"));
const UdhauliParva = React.lazy(() => import("../component/user/dashboard/details/eventsfestival/UdhauliParva"));

export const MainRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
      <Route path="/" element={<UserLayout />} />
      </Route>
      <Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<Signup />} />

      </Route>
      <Route>
      <Route path="/details" element={<Details />} />
      <Route path="/eventsdetails" element={<EventsDetails />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/kathmandu" element={<Kathmandu />} />
      <Route path="/chitwan" element={<Chitwan />} />
      <Route path="/lumbini" element={<Lumbini />} />
      <Route path="/annapurna" element={<Annapurna />} />
      <Route path="/pokhara" element={<Pokhara />} />
      <Route path="/everest" element={<Everest />} />
      <Route path="/advanture" element={<Advanture />} />
      <Route path="/nature" element={<Nature />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/wellness" element={<Wellness />} />
      <Route path="/tripideas" element={<TripIdeas />} />
      <Route path="/aboutnepal" element={<AboutNepal />} />
      <Route path="/bookyourticket" element={<BookYourTicket />} />
      <Route path="/traveldetails" element={<TravelDetails />} />
      <Route path="/travelupdate" element={<TravelUpdates />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/yamori" element={<Yamori />} />
      <Route path="/holi" element={<Holi />} />
      <Route path="/indrajatra" element={<Indrajatra />} />
      <Route path="/pashupatiarati" element={<PashupatiArati />} />
      <Route path="/udhaiparva" element={<UdhauliParva />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
