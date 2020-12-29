import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import AppRoutes from './AppRoutes';
import Footer from "./components/Footer";
import { initAPI } from './actions/api';

const AppContent = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(initAPI());
  }, [dispatch]);
  
  return (
    <div id="garnett-site">
      <div className="page-body">
        <Header />
        <div className="main-content">
          <MenuBar />
          <AppRoutes />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppContent;
