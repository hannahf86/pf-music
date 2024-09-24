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

// HELPERS
import Error from "./Pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      {/* ERROR HANDLING */}
      <Route index element={<Home />} />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
