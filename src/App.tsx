import { Button } from "./components/ui/button";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
