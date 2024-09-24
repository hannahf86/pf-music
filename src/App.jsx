// REACT ROUTER DOM
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

// LAYOUT
import RootNav from "./Layout/RootNav";

// PAGES
import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import Services from "./Pages/Services";
import Music from "./Pages/Music";
import Contact from "./Pages/Contact";

// HELPERS
import Error from "./Pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      {/* ERROR HANDLING */}
      <Route index path="home" element={<Home />} />
      <Route path="bio" element={<Bio />} />
      <Route path="services" element={<Services />} />
      <Route path="music" element={<Music />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
