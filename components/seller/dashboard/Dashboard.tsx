import DashboardCard from '@/components/seller/dashboard/DashboardCard'
import React from 'react'
import OrdersStatus from './OrdersStatus'
import RevenueChart from './RevenueChart'
import StockWarning from './StockWarning'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center w-full'>
      <div className='w-full'>
        <h1 className='text-3xl font-semibold'>Welcome back, John Doe!</h1>
        <p>You&apos;ve made <span className="font-bold">$2,450</span> today.</p>
      </div>
      <DashboardCard />
      <OrdersStatus />
      <RevenueChart />
      <StockWarning />
    </div>
  )
}

export default Dashboard