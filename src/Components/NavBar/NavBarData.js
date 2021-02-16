import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const NavBarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Budget",
        path: '/budget',
        icon: <FaIcons.FaMoneyBillAlt />,
        cName: 'nav-text'
    },
    {
        title: "Profile",
        path: '/profile',
        icon: <IoIcons.IoIosPerson />,
        cName: 'nav-text'
    },
    {
        title: "Investments",
        path: '/investments',
        icon: <AiIcons.AiOutlineLineChart />,
        cName: 'nav-text'
    }

    

]
