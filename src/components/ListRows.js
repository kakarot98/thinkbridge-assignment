import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import Dialog from "@mui/material/Dialog"
// import DialogActions from "@mui/material/DialogActions"
// import DialogContent from "@mui/material/DialogContent"
// import DialogTitle from "@mui/material/DialogTitle"
// import TextField from "@mui/material/TextField"
import EditDialog from "./EditDialog";

const ListRows = ({product, handleEditItem, handleDeleteItem}) => {
  const [editDialogFlag, setEditDialogFlag] = useState(false);
  
  
  const editDialogBoxOpen = () => {
    setEditDialogFlag(() => true);
  };

  return (
    <TableRow key={product.id}>
      <TableCell align="left">{product.productName}</TableCell>
      <TableCell align="center">{product.category}</TableCell>
      <TableCell align="center">{product.description}</TableCell>
      <TableCell align="center">${product.price}</TableCell>
      <TableCell align="center">{product.quantity}</TableCell>
      
      <TableCell align="center">
        <Stack spacing={1} direction="row-reverse">
          <Button variant="contained" color="secondary" onClick={()=>handleDeleteItem(product.id)}>
            Delete
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => editDialogBoxOpen()}
          >
            Edit
          </Button>
          <EditDialog
            product={product}
            editDialogFlag={editDialogFlag}
            setEditDialogFlag={setEditDialogFlag}
            key={product.id}
            id={product.id}
            handleEditItem={handleEditItem}
          />
        </Stack>
        {/* <Button variant="outlined" color='primary'>Edit</Button>
        <Button variant="contained" color='secondary'>Delete</Button> */}
      </TableCell>
    </TableRow>
  );
};

export default ListRows;
