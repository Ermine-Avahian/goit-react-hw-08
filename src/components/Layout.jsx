import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";

const Layout = ({ children }) => {
  const layoutStyles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  return (
    <div style={layoutStyles}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
export default Layout;
