import { useState } from "react";
import Layout from './shared/components/Layout'
import Navbar from "./shared/components/NavBar";
import { DashboardPage } from "./features/dashboard/DashBoardPage";
import { DeviceControlPage } from "./features/device-control/DeviceControlPage";
import {HistoryPage} from './features/history/HistoryPage'
function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <DashboardPage/>
          </div>
        );
      case 'control':
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Điều khiển thiết bị</h1>
            <DeviceControlPage/>
          </div>
        );
      case 'history':
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Lịch sử dữ liệu</h1>
            <HistoryPage/>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <Layout>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="container mx-auto">
        {renderPage()}
      </div>
    </Layout>
  );
}

export default App;