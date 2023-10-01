import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CategoTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:'1.2rem',fontFamily:'cario'}}>categorey Number</TableCell>
            <TableCell  style={{fontSize:'1.2rem',fontFamily:'cario'}}>categorey Name</TableCell>
            <TableCell style={{fontSize:'1.2rem',fontFamily:'cario'}}>unit Name</TableCell>
            <TableCell style={{fontSize:'1.2rem',fontFamily:'cario'}}>brand Name</TableCell>
            <TableCell style={{fontSize:'1.2rem',fontFamily:'cario'}}>categorey Caliber</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell  style={{fontSize:'1rem',fontFamily:'cario'}}>{item.catNumber}</TableCell>
              <TableCell style={{fontSize:'1rem'}}>{item.catName}</TableCell>
              <TableCell style={{fontSize:'1rem'}}>{item.unitName}</TableCell>
              <TableCell style={{fontSize:'1rem',fontFamily:'cario'}}>{item.brandName}</TableCell>
              <TableCell style={{fontSize:'1rem'}}>{item.catCaliber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoTable;
