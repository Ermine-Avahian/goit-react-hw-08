import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
{
  /*const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage")); */
}

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/contacts" element={<ContactsPage />} /> */}
      </Routes>
    </Layout>
  );
};

export default App;
