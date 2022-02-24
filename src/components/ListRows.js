import React, {useState, useEffect} from 'react'
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Dialog from "@mui/material/Dialog"
// import DialogActions from "@mui/material/DialogActions"
// import DialogContent from "@mui/material/DialogContent"
// import DialogTitle from "@mui/material/DialogTitle"
// import TextField from "@mui/material/TextField"
import EditDialog from './EditDialog';

const ListRows = () => {

    const [editDialogFlag, setEditDialogFlag] = useState(false)

    const editDialogBoxOpen = () => {
        setEditDialogFlag(()=> true)
    }

  return (
    <TableRow>
        <TableCell>Shirt</TableCell>
        <TableCell align='right'>$199.9</TableCell>
        <TableCell align='right'>200</TableCell>
        <TableCell align='right'>This is a clothing item</TableCell>
        <TableCell align='right'>
        <Stack spacing={1} direction="row-reverse">
        <Button variant="contained" color="secondary">Delete</Button>
      <Button variant="outlined" color='primary' onClick={()=>editDialogBoxOpen()}>Edit</Button>
      <EditDialog editDialogFlag={editDialogFlag} setEditDialogFlag={setEditDialogFlag}/>
    </Stack>
        {/* <Button variant="outlined" color='primary'>Edit</Button>
        <Button variant="contained" color='secondary'>Delete</Button> */}
        </TableCell>
    </TableRow>
  )
}

export default ListRows