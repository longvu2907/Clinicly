import config from '../config';
import Home from '../pages/Home';
import Medicines from '../pages/Medicines';
import MedicineDetail from '../pages/Medicines/MedicineDetail';
import Patients from '../pages/Patients';
import NewPatient from '../pages/Patients/NewPatient';
import PatientDetail from '../pages/Patients/PatientDetail';
import LoginPage from '../pages/LoginPage/loginPage';
import ExaminationList from '../pages/List/examinationList';
import Bills from '../pages/Bills';
import BillDetail from '../pages/Bills/BillDetail';
import Staffs from '../pages/Manage/Staffs';
import StaffDetail from '../pages/Manage/Staffs/StaffDetail';
import Regulations from '../pages/Manage/Regulations';
import RegulationDetail from '../pages/Manage/Regulations/RegulationDetail';
const publicRoutes = [
  { path: config.routes.home, element: Home },
  { path: config.routes.login, element: LoginPage },
  { path: config.routes.patients, element: Patients },
  { path: config.routes.patient_new, element: NewPatient },
  { path: config.routes.patient_detail, element: PatientDetail },
  { path: config.routes.medicines, element: Medicines },
  { path: config.routes.medicine_detail, element: MedicineDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
