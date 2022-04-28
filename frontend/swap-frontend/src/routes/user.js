import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import Application from "../pages/Application";
import ProgramDetail from "../pages/ProgramDetail";

function Admin() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/admin/*" element={<Navigate replace to="/" />} />
        <Route path="/program/:id/application" element={<Application />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
      </Routes>
    </>
  );
}

export default Admin;