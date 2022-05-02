import BasicPage from "components/BasicPage";
import Layout from "layouts/BasicLayout";
import AuthProvider from "providers/AuthProvider";
import React from "react";
import { Route, Routes } from "react-router";
import Index from "./pages/Index";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/:type/:page" element={<BasicPage />} />
          <Route path="*" element={<p>404 not found</p>} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
