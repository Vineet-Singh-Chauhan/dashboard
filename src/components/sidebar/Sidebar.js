// import React from 'react'

// material icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';

//router
import { Link } from 'react-router-dom';
//context
import { DarkModeContext } from '../../assets/context/darkModecontext';
import {useContext} from "react";

const Sidebar = () => {
//context
const {dispatch} = useContext(DarkModeContext)
  return (
    <>
    <div className="sidebar flex-1 border-r-[0.5px] border-gray-600 min-h-screen  ">
        <div className="top h-[50px] flex justify-center items-center drop-shadow-md bg-red-700 m-2 rounded text-white
          ">
                <Link to="/">
            <span className="logo text-xl font-semibold">
                Asper
            </span>
            </Link>
        </div>
        <div className="center pl-2">
            <ul className="p-0 m-0">
                <p className="title font-bold tracking-wider text-xs decoration-slate-50 	text-slate-500 mb-2 mt-3">MAIN</p>
                <li>
                <Link to="/">
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1 hover:text-gray-600"><DashboardIcon className="mr-1 text-red-600 icon "/>Dashboard</span>
                </Link>
                </li>
                <li>
                <Link to="/users">
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1   hover:text-gray-600"><PeopleIcon  className="mr-1 icon text-blue-600 "  /> Users</span>
                </Link>
                </li>
                <li><Link to="/todo">
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1  hover:text-gray-600"><TaskAltIcon  className="mr-1 icon text-green-600 "  /> Todo</span>
                </Link></li>
                <li>
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1  hover:text-gray-600"><LocalOfferIcon  className="mr-1"  /> Projects</span>
                </li>
                <li>
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1  hover:text-gray-600"><LocalShippingIcon  className="mr-1"  />Meets</span>
                </li>
                <li>
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1  hover:text-gray-600"><QueryStatsIcon  className="mr-1"  />Growth</span>
                </li>
                <p className="title font-bold tracking-wider text-xs decoration-slate-50 	text-slate-500	mb-2 mt-3">LISTS</p>
                <li>
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1  hover:text-gray-600"><CircleNotificationsIcon  className="mr-1"  /> Notifications</span>
                </li>
                <li>
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1  hover:text-gray-600"><SettingsSuggestIcon  className="mr-1"  /> System Health</span>
                </li>
                <li>
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1  hover:text-gray-600"><CloudSyncIcon  className="mr-1"/> Logs</span>
                </li>
                <li>
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1  hover:text-gray-600"><SettingsIcon  className="mr-1"/> Settings</span>
                </li>
                <li>
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1  hover:text-gray-600"><ContactPageIcon  className="mr-1"/> Profile</span>
                </li>
                <li>
                    <span className="flex justify-start items-center my-1 cursor-pointer p-1  hover:text-gray-600"><LogoutIcon  className="mr-1"/> Logout</span>
                </li>
            </ul>
        </div>
        <p className="title font-bold tracking-wider text-xs decoration-slate-50 	text-slate-500	mb-2 mt-3 pl-2">THEME</p>
        <div className="bottom flex items-center pl-2">
            <div className="colorOption h-[20px] w-[20px] rounded-sm border-[1px] border-purple-400 cursor-pointer bg-white mr-1" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption h-[20px] w-[20px] rounded-sm border-[1px] border-purple-400 cursor-pointer bg-black mr-1" onClick={()=>dispatch({type:"DARK"})}></div>
            <div className="colorOption h-[20px] w-[20px] rounded-sm border-[1px] border-purple-400 cursor-pointer flex " onClick={()=>dispatch({type:"TOGGLE"})}>
                <div className="w-1/2 bg-white"></div>
                <div className="w-1/2 bg-black"></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar