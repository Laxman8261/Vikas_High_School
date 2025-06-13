import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import OurManagement from './components/OurManagment/OurManagment';
import Principalreview from './components/principalreview/Principalreview';
import { ChairmanMessage } from './components/chairmanMessage/ChairmanMessage';
import CollegeAdmissions from './components/admissions/CollegeAdmissions';
import JrCollegeAdmissions from './components/admissions/JrCollegeAdmissions';
import SchoolAdmissions from './components/admissions/SchoolAdmissions';
import Facility from './components/facility/Facility';
import BlogPage from './components/blog/BlogPage';
import RightCurriculum from './components/curriculum/RightCurriculum';
import RightFaculty from './faculty/RightFaculty';
import SchoolFacilities from './components/SchoolFacilities/SchoolFacilities';
import RightCapability from './components/RightCapability/RightCapability';
import Toppers from './components/toppers/Toppers';
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<OurManagement />} />
        <Route path="/OurPrincipalsView" element={<Principalreview />} />
        <Route path="/ChairmanMessage" element={<ChairmanMessage />} />
        <Route path="/SchoolAdmissions" element={<SchoolAdmissions />} />
        <Route path="/JrCollegeAdmissions" element={<JrCollegeAdmissions />} />
        <Route path="/CollegeAdmissions" element={<CollegeAdmissions />} />
        <Route path="/Facility" element={<Facility />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/RightCurriculum" element={<RightCurriculum />} />
        <Route path="/RightFaculty" element={<RightFaculty />} />
        <Route path="/SchoolFacilities" element={<SchoolFacilities />} />
        <Route path="/RightCapability" element={<RightCapability />} />
        <Route path="/Toppers" element={<Toppers />} />
      </Routes>

      <Footer />
    </Router>
  );
};
export default App