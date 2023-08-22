import "./App.css";
import React from "react";
import Accordion from "./Components/Accordion";
import UserForm from "./forms/UserForm";
import Counter from "./ReduxExampleCounter/Counter";
import ErrorPage from "./Components/ErrorPage";
import RootLayout from "./Components/RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import GetAsyncRequest from "./HttpRequests/GetAsyncRequest";

function App() {
  // old style
  // const routerDefinitions = createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<Accordion />} />
  //     <Route path="/people" element={<GetAsyncRequest />} />
  //     <Route path="/userForm" element={<UserForm />} />
  //     <Route path="/rootLayout" element={<RootLayout />} />
  //   </Route>
  // );
  // const router = createBrowserRouter(routerDefinitions);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Accordion /> },
        { path: "/people", element: <GetAsyncRequest /> },
        { path: "/userForm", element: <UserForm /> },
        { path: "/counter", element: <Counter /> },
      ],
      errorElement : <ErrorPage />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
