import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop:'4em'
  },
});

const loop = ['1', '2', '3', '4', '5'];

export default function ProductList() {
  const classes = useStyles();
  return (
    <Container>
      <TableContainer>
        <Typography variant={'h3'} style={{fontSize:'3em'}}>
          Product List
        </Typography>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>sl.no</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Nationality</TableCell>
              <TableCell align="center">Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loop.map(val => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {val}
                </TableCell>
                <TableCell align="center">zala kinga,Pema </TableCell>
                <TableCell align="center">female</TableCell>
                <TableCell align="center">chinese</TableCell>
                <TableCell align="center">75</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
    ;
}
