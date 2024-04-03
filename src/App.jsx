import Home from "./components/Home/Home";
import Hero from "./components/Home/Hero";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Hero /> },
        { path: "/project", element: "Project" },
        { path: "/blog", element: "Blog" },
        { path: "/thread", element: "Twitter thread" },
        { path: "/series", element: "Series" },
        { path: "/collab", element: "Collab" },
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
