import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Blog } from "./components/Blog";
import  { BlogArticlePage } from "./components/BlogArticlePage";
import { blogLoader } from "./loader/blogLoader";
import  { WorksArticlePage } from "./components/WorksArticlePage";
import { workLoader } from "./loader/workLoader";

const router = createBrowserRouter([
  {
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>  
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/works",
        children: [
          {
            index: true,
            element: <Works />,
          },
          {
            path: ':worksId',
            element: <WorksArticlePage />,
            loader: workLoader,
            errorElement: <p>404 Not Found</p>,
          },
         ],
      },
      {
        path: "/blog",
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ':articleId',
            element: <BlogArticlePage />,
            loader: blogLoader,
            errorElement: <p>404 Not Found</p>,
          },
         ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
