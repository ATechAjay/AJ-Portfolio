import Home from "./components/Home/Home";
import Hero from "./components/Home/Hero";
import Project from "./components/pages/Project/Project";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collab from "./components/pages/Collab/Collab";
import Series from "./components/pages/Series/Series";
// import Thread from "./components/pages/Thread/Thread";

import { lazy, Suspense } from "react";

const LazyThreadLoad = lazy(() => import("./components/pages/Thread/Thread"));

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: (
        <h1 style={{ textAlign: "center", color: "red" }}>
          Something went wrong. 😥
        </h1>
      ),
      children: [
        { path: "/", element: <Hero /> },
        { path: "/project", element: <Project /> },
        { path: "/collab", element: <Collab /> },
        {
          path: "/thread",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <LazyThreadLoad />
            </Suspense>
          ),
        },
        { path: "/series", element: <Series /> },
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
