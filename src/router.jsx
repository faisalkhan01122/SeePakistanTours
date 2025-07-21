import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";

import ContactUsPage from "./pages/ContactUsPage";
import HoneyMoonDealPage from "./pages/HoneyMoonDealPage";
import DestinationsPage from "./pages/DestinationsPage";
import AzadKashmirPage from "./pages/AzadKashmirPage";
import ChitralVallyPage from "./pages/ChitralVallyPage";
import FairyMeadows from "./pages/FairyMeadows";
import MureeTours from "./pages/MureeTours";
import HunzaValleyPage from "./pages/HunzaValleyPage";
import NaranKaghanPage from "./pages/NaranKaghanPage";
import SkarduValleyPage from "./pages/SkarduValleyPage";
import SwatValleyPage from "./pages/SwatValleyPage";
import OneDayTourPage from "./pages/OneDayTourPage";
import ForeignerToursPage from "./pages/ForeignerToursPage";
import CarRentalspage from "./pages/CarRentalspage";
import GetQuote from "./pages/GetQuote";
import ChitralPage from "./pages/ChitralVallyPage";
import FairyMeadowsContent from "./pages/FairyMeadows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "honeymoon-deals",
        element: <HoneyMoonDealPage />,
      },
      {
        path: "destinations",
        element: <DestinationsPage />,
      },
      {
        path: "destination/azad-kashmir-tours",
        element: <AzadKashmirPage />,
      },
      {
        path: "destination/chitral-valley-tours",
        element: <ChitralVallyPage />,
      },
      {
        path: "destination/fairy-meadows-pakistan",
        element: <FairyMeadows />,
      },
      {
        path: "destination/hunza-valley-tours",
        element: <HunzaValleyPage />,
      },
      {
        path: "destination/murree-tours",
        element: <MureeTours />,
      },
      {
        path: "destination/naran-kaghan-tours",
        element: <NaranKaghanPage />,
      },
      {
        path: "destination/skardu-valley-tours",
        element: <SkarduValleyPage />,
      },
      {
        path: "destination/swat-valley-tours",
        element: <SwatValleyPage />,
      },
      {
        path: "destination/1-day-tour",
        element: <OneDayTourPage />,
      },
      {
        path: "destination/foreigner-tours",
        element: <ForeignerToursPage />,
      },
      {
        path: "car-rentals-2",
        element: <CarRentalspage />,
      },

      {
        path: "destination/fairy-meadows-pakistan",
        element: <FairyMeadowsContent />,
      },
      {
        path: "get-a-quote",
        element: <GetQuote />,
      },
    ],
  },
]);

export default router;
