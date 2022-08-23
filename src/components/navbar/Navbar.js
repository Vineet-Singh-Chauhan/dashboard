// import React from 'react'
//material Icons
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

//context
import { DarkModeContext } from '../../assets/context/darkModecontext';
import { useContext } from 'react';

//images
import avatar from "../../assets/images/avatar.webp";
const Navbar = () => {
const {dispatch} = useContext(DarkModeContext)
  return (
    <>
    <div className="navbar  m-2 rounded">
        <div className="wrapper h-[50px] flex justify-end md:justify-between w-full  items-center">
            <div className="searchbar px-3 py-1 mx-1 rounded bg-gray-100  justify-center items-center border-[0.5px] border-gray-400 hidden md:flex">
                <input type="text" placeholder="Looking for something ?" className='border-0 outline-0 bg-transparent text-lg '/>
                <SearchIcon/>
            </div>
            <div className="items flex flex-wrap">
                <div className="item mr-5 flex items-center gap-1">
                   <TranslateIcon/> English
                </div>
                <div className="item mr-5 flex items-center gap-1" onClick={()=>dispatch({type:"TOGGLE"})}>
                   <SettingsBrightnessIcon/> 
                </div>
                <div className="item mr-5 flex items-center gap-1">
                   <FullscreenIcon/> 
                </div>
                <div className="item mr-5 flex items-center gap-1 relative">
                   <NotificationsNoneIcon/> 
                   <div className='absolute text-xs rounded-full top-0 right-0 counter h-[15px] w-[15px] bg-red-600 text-white flex justify-center items-center'>1</div>
                </div>
                <div className="item mr-5 flex items-center gap-1 relative">
                   <ChatBubbleOutlineIcon/> 
                   <div className='absolute text-xs rounded-full top-0 right-0 counter h-[15px] w-[15px] bg-red-600 text-white flex justify-center items-center'>1</div>
                </div>
                <div className="item mr-5 flex items-center gap-1">
                   <FormatListBulletedIcon/> 
                </div>
                <div className="avatar">
                    <img src={avatar} alt="avatar" className='h-[40px] w-[40px] mr-5 rounded-full	'/>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Navbar