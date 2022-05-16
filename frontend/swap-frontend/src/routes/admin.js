import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "../pages/Main";
import "assets/scss/theme.scss";
import AddProgram from "../pages/AddProgram";
import ManageApplication from "../pages/ManageApplication";
import ManageApplicationDetail from "../pages/ManageApplicationDetail";
import ManageStudent from "../pages/ManageStudent";
import ManageUser from "../pages/ManageUser";
import ManageInstructor from "../pages/ManageInstructor";
import ManageProgram from "../pages/ManageProgram";
import AdminProgramDetail from "../pages/AdminProgramDetail";
import ApplicationFormView from "components/dashboard/single/overview/ApplicationFormView";
import AdminMain from "../pages/ManageProgram";
import AddTemplate from "../pages/AddTemplate";

import MyPage from "../pages/MyPage";
import Application from "../pages/Application";
import ProgramDetail from "../pages/ProgramDetail";
import MyPageLayout from "../pages/MyPageLayout";

function Admin() {
  return (
    <Routes>
      <Route path="/admin/addprogram" element={<AddProgram />} />
      <Route path="/admin/addtemplate" element={<AddTemplate />} />

      <Route path="/admin" element={<AdminMain />} />
      <Route path="/admin/application" element={<ManageApplication />} />
      <Route path="/admin/application/detail/:id" element={<ManageApplicationDetail />} />
      <Route path="/admin/student" element={<ManageStudent />} />
      <Route path="/admin/instructor" element={<ManageInstructor />} />
      <Route path="/admin/user" element={<ManageUser />} />
      <Route path="/admin/program" element={<ManageProgram />} />
      <Route path="/admin/program/detail/:id" element={<AdminProgramDetail />} />
      <Route path="/admin/program/detail/:id/:applicantid" element={<ApplicationFormView />} />
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      {/* <Route path="/mypage" element={<MyPage />} /> */}
      <Route path="/program/:id/application" element={<Application />} />
      <Route path="/program/:id" element={<ProgramDetail />} />
      <Route path="/mypage" element={<MyPageLayout />} />
    </Routes>
  );
}

export default Admin;
