import React from 'react'
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button';

const EditDialog = ({editDialogFlag, setEditDialogFlag}) => {
  return (
    <Dialog open={editDialogFlag} aria-labelledby="form-dialog-title">
        <DialogTitle>Edit Inventory Item</DialogTitle>
        <DialogContent>
            Enter Stuff here
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setEditDialogFlag(false)}>Cancel</Button>
            <Button>Submit</Button>
        </DialogActions>
    </Dialog>
  )
}

export default EditDialog