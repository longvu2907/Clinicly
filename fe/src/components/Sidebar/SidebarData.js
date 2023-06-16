import IMAGES from '../assets/images/index.js';
export const SidebarData = [
  {
    id: 1,
    title: 'Clinicly',
    path: '/',
    icon: <img src={IMAGES.logoClinicly} className="sidebar-logo-img" alt="dashboard" />,
    cName: 'nav-text',
  },
  {
    id: 2,
    title: 'Tổng quan',
    path: '/',
    icon: <img src={IMAGES.logoDashboard} className="sidebar-icon-img" alt="dashboard" />,
    cName: 'nav-text',
  },
  {
    id: 3,
    title: 'Danh sách đợi khám',
    path: '/',
    icon: <img src={IMAGES.logoList1} className="sidebar-icon-img" alt="list1" />,
    cName: 'nav-text',
  },
  {
    id: 4,
    title: 'Danh sách khám',
    path: '/',
    icon: <img src={IMAGES.logoList2} className="sidebar-icon-img" alt="list2" />,
    cName: 'nav-text',
  },
  {
    id: 5,
    title: 'Bệnh nhân',
    path: '/',
    icon: <img src={IMAGES.logoPatient} className="sidebar-icon-img" alt="patient" />,
    cName: 'nav-text',
  },
  {
    id: 6,
    title: 'Kho thuốc',
    path: '/',
    icon: <img src={IMAGES.logoDrugs} className="sidebar-icon-img" alt="drugs" />,
    cName: 'nav-text',
  },
  {
    id: 7,
    title: 'Hoá đơn',
    path: '/',
    icon: <img src={IMAGES.logoBill} className="sidebar-icon-img" alt="bill" />,
    cName: 'nav-text',
  },
  {
    id: 8,
    title: 'Quản lý',
    path: '/',
    icon: <img src={IMAGES.logoManage} className="sidebar-icon-img" alt="manage" />,
    cName: 'nav-text',
  },
  {
    id: 9,
    title: 'Đăng xuất',
    path: '/',
    icon: <img src={IMAGES.logoLogout} className="sidebar-icon-img" alt="manage" />,
    cName: 'nav-text',
  },
];