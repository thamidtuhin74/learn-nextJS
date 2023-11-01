import React from 'react';

const DashboardLayout = ({ children } : {children: React.ReactNode}) => {
    return (
        <div>
            <div>
                <p className='bg-blue-400'>this is DashboardLayout</p>
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;