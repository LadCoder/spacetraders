import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/',
        icon: <AiIcons.AiOutlineDashboard/>,
    },
    {
        title: 'Loans',
        path: '/loans',
        icon: <FaIcons.FaRegMoneyBillAlt/>,
    },
    {
        title: 'Fleet',
        path: '/fleet',
        icon: <GiIcons.GiInterceptorShip/>,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FaIcons.FaUsersCog/>,
    },
]