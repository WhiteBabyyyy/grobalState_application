import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DeafaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
