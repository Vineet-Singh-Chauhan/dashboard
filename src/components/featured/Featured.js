import React from 'react'

//icons
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

//charts
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured flex-[2] drop-shadow-md  border-[0.5px] rounded'>
        <div className='text-gray-600 top flex justify-between items-center'>
            <h1 className='text-xl '>Total Revenue</h1>
            <MoreVertOutlinedIcon className='p-[1px]'/>
        </div>
        <div className="bottom flex flex-col text-center gap-[15px] justify-center items-center">
            <div className="featuredchart h-[200px] w-[200px] p-3">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>

            </div>
            <p className="title font-semibold text-gray-500">Total Sales made today</p>
            <p className="amount text-3xl ">$420</p>
            <div className="desc font-regular text-gray-500">Previous transactions processing. Last payments may not be included</div>
            <div className=" flex justify-between w-full">
                <div className="summary flex flex-col">
                    <p className="text-lg text-gray-600 text-center">Target</p>
                    <div className="item flex justify-center items-center text-red-500">
                    <ExpandMoreOutlinedIcon/>
                    <p className="targetamount">$420</p>
                    </div>
                </div>
                <div className="summary flex flex-col">
                    <p className="text-lg text-gray-600 text-center">Last Week</p>
                    <div className="item flex justify-center items-center text-green-500">
                    <ExpandMoreOutlinedIcon/>
                    <p className="targetamount">$420</p>
                    </div>
                </div>
                <div className="summary flex flex-col">
                    <p className="text-lg text-gray-600 text-center">Last Month</p>
                    <div className="item flex justify-center items-center text-green-500">
                    <ExpandMoreOutlinedIcon/>
                    <p className="targetamount">$420</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Featured