import React from 'react'

const DashboardCard = () => {
    const cardData = [
        {
            title: "Sales Today",
            value: "2,450",
            change: "15"
        },
        {
            title: "Sakes This Week",
            value: "10,230",
            change: "8"
        },
        {
            title: "Sales This Month",
            value: "45,670",
            change: "12"
        },
    ];
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {cardData.map((card, index)=>(
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4 min-h-32 flex flex-col gap-2 border border-borderGray">
                <p className="text-textGray text-sm font-medium">{card.title}</p>
                <p className="text-2xl font-bold text-primary">{card.value}</p>
                <p className="text-sm text-boldGreen font-medium">+{card.change}% from last period</p>
            </div>
        ))}
    </div>
  )
}

export default DashboardCard