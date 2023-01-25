import './App.scss';
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import Footer from "./shared/Footer";
import {useLocation} from "react-router-dom/cjs/react-router-dom";
import {useEffect, useState} from "react";

const App = () => {
  const location = useLocation();
  const [isFullPage, setIsFullPage] = useState(false);
  useEffect(() => {
    const fullPageLayoutRoutes = ['/login', '/register'];
    setIsFullPage(fullPageLayoutRoutes.includes(location.pathname));
  }, [location]);

  return (
    <div className="container-scroller">
      {!isFullPage && <Navbar/>}
      <div className="container-fluid page-body-wrapper">
        {!isFullPage && <Sidebar/>}
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes/>
            {/*{isFullPage && <SettingsPanelComponent/>}*/}
          </div>
          {!isFullPage && <Footer/>}
        </div>
      </div>
    </div>
  );
}

export default App;
