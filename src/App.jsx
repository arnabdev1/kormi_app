import HomePage from "./routes/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import SinglePage from "./routes/singlePage/singlePage";

/**
 * Main application component that sets up routing for different pages
 * using React Router's createBrowserRouter and RouterProvider.
 */
function App() {
  /**
   * Browser router configuration defining the main layout and associated routes.
   * Each route corresponds to a different page or feature in the application.
   */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Main layout component that wraps around child routes
      children: [
        {
          path: "/",
          element: <HomePage /> // Landing page that loads the homepage
        },
        {
          path: "/list",
          element: <ListPage /> // Displays a list of all available items
        },
        {
          path: "/:id",
          element: <SinglePage /> // Detailed page for a single item, showing all relevant details and photos
        },
        {
          path: "/profile",
          element: <ProfilePage /> // Displays the user's profile page after login
        },
        {
          path: "/login",
          element: <Login /> // Existing user login page
        },
        {
          path: "/register",
          element: <Register /> // New user registration page
        }
      ]
    }
  ]);

  /**
   * The RouterProvider component is used to provide the defined router to the app.
   * This sets up the routing for the entire application.
   */
  return (
    <RouterProvider router={router} />
  );
}

export default App;
