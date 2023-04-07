
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Sales } from "./pages/Sales";

import ErrorPage from "./pages/Error";
import { FileForm } from "./pages/FileForm";

const router = createHashRouter([
  {
    path: "/",
    element: <FileForm />,
    errorElement: <ErrorPage />
  },
  {
    path: "/sales",
    element: <Sales />,
    errorElement: <ErrorPage />
  },
]);

export const Routes = () => {

  const userRouter = (() => {
    return router
  })()

  return (
    <>
      <Navbar />
      <RouterProvider router={userRouter} />
    </>
  )
}
