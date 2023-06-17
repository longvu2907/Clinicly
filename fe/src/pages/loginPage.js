import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from 'antd';
import React from 'react';
import { LoginComponent } from '../components/Login/loginComponent';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
const { Content } = Layout;

export const LoginPage = () => {
  return (
    <Layout>
      <Content className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="max-w-md w-full flex text-center translate-x-5">
            <FontAwesomeIcon
              icon={faMoon}
              alt="Logo"
              className="h-[10rem] mr-2 text-primary-200 items-center justify-center"
            />
            <h2 className="font-bold text-primary-100 text-[80px] capitalize">Clinicly</h2>
          </div>
          <h2 className="font-bold text-primary-100 text-[40px] w-full max-w-md translate-x-6 text-center space-y-5">
            Đăng nhập
          </h2>
          <LoginComponent />
        </div>
      </Content>
    </Layout>
  );
};
