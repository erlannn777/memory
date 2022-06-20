import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Services from "./services";
import ServiceDetailsFirst from "./services/serviceDetailsFirst";
import ServiceDetailsSecond from "./services/serviceDetailsSecond";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../store";
import CreateServiceModal from "./services/createServiceModal";
import EditServiceModal from "./services/editserviceModal";
import AllOrders from "./orders";

import NewOrderModal from "./orders/orderModal";
import NewOrders from "./orders/newOrders";
import Statistics from "./statistics";
import Users from "./users";
import QA from "./QA";
import Chat from "./chat";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetailsFirst />} />
          <Route path="/services/:id/:id" element={<ServiceDetailsSecond />} />
          <Route path="/all-orders" element={<AllOrders />} />
          <Route path="/new-orders" element={<NewOrders />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <CreateServiceModal />
        <NewOrderModal />
      </BrowserRouter>
      <EditServiceModal />
    </Provider>
  );
}

export default App;
