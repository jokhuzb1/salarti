import CustomFooter from "../footer/Footer";
import Navbar from "../navbar/CustomNavbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <CustomFooter />
    </>
  );
};

export default RootLayout;
