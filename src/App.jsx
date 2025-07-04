import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import {Applayout} from './components/Applayout'; 
import HomeComponent from "./modules/home";
import { AddExpanse } from "./pages/AddExpanse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: ([
      {
        path: "/",
        element: <HomeComponent />
      },
      {
        path: "/addexpanse",
        element: <AddExpanse />
      }
    ])
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
