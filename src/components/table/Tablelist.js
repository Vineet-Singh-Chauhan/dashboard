import React from 'react'
//table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tablelist = () => {
  
    const rows = [
    {
        id:"131131",
        product:"Acerr nitro 5",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-y18evSMdsIbh_wVTfJro8G7f86ilk9nbg&usqp=CAU",
        customer:"john doe",
        date:"1 March",
        amount:785,
        method:"Cash on delivery",
        status:"approved",
    },
    {
        id:"893298",
        product:"Nokia 21121",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmKKoK6vLPx0LQI6hNxemx0usO4tPIKDnZA&usqp=CAU",
        customer:"john doe",
        date:"1 March",
        amount:785,
        method:"Cash on delivery",
        status:"pending",
    },


    ]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tablecell'>Tracking ID</TableCell>
            <TableCell className='tablecell'>Project</TableCell>
            <TableCell className='tablecell'>Image</TableCell>
            <TableCell className='tablecell'>Lead</TableCell>
            <TableCell className='tablecell'>DeadLine</TableCell>
            <TableCell className='tablecell'>Amount</TableCell>
            <TableCell className='tablecell'>Payment Method</TableCell>
            <TableCell className='tablecell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >{row.product}</TableCell>
              <TableCell ><div className="cellimg flex items-center">
                <img src={row.img} alt="img" className='h-[42px] w-[42px] rounded-full object-cover '/></div></TableCell>
              <TableCell >{row.customer}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >{row.method}</TableCell>
              <TableCell ><span className={`status ${row.status==="approved"?"text-green-600 bg-green-200":"text-red-600 bg-red-300"} p-2 rounded`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tablelist