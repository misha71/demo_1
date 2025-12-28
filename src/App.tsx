import React from "react";
import { Alert } from "./components/Alert";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRouter } from "./router/AppRouter";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="page">
        <div className="container">
          <Alert />
          <AppRouter />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
