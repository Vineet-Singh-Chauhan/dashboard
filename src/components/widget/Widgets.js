import React from 'react'

//icons
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widgets = (props) => {
    let data={};
    // temp
    const amount = 1000;
    const diff = 20 ;
    switch(props.type){
        case "user":
            data={
                title:"users",
                isMoney:false,
                link:"See all users",
                icon:(
                    <PersonOutlineOutlinedIcon className='icon bg-red-300 text-red-600'/>
                )
            }
            break;
            case "orders":
                data={
                    title:"orders",
                    isMoney:false,
                    link:"See all orders",
                    icon:(
                        <ShoppingCartOutlinedIcon className='icon  bg-green-300 text-green-600'/>
                    )
                }
                break;
                case "earning":
                    data={
                        title:"Earnings",
                        isMoney:true,
                        link:"View net earnings",
                        icon:(
                            <MonetizationOnOutlinedIcon className='icon bg-yellow-300 text-yellow-600'/>
                        )
                    }
                    break;
                    case "balance":
                        data={
                            title:"balance",
                            isMoney:true,
                            link:"See details",
                            icon:(
                                <AccountBalanceWalletOutlinedIcon className='icon bg-blue-300 text-blue-600'/>
                            )
                        }
                        break;
            default:
            break;
    };

  return (
    <div className='widget mr-3 flex flex-1 justify-between drop-shadow-lg border-[0.5px] rounded h-[200px] p-2'>
        <div className="left flex flex-col justify-between">
            <span className="title uppercase font-bold text-gray-700 text-sm">{data.title}</span>
            <span className="counter font-regular text-3xl ">{data.isMoney&&"$"}{amount}</span>
            <span className="link text-xs border-b-[0.5px] border-gray-700">{data.link}</span>
        </div>
        <div className="right flex flex-col justify-between">
            <div className="percentage items center text-green-500">
                <KeyboardArrowUpOutlinedIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets