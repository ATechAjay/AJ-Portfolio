import Home from "./components/Home/Home";
import Hero from "./components/Home/Hero";
import Project from "./components/pages/Project/Project";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collab from "./components/pages/Collab/Collab";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Hero /> },
        { path: "/project", element: <Project /> },
        { path: "/collab", element: <Collab /> },
        { path: "/thread", element: "Twitter thread" },
        { path: "/series", element: "Series" },
        { path: "/blog", element: "Blog" },
        { path: "/connect", element: "Connect" },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
