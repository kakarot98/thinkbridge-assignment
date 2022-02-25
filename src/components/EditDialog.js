import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const EditDialog = ({
  editDialogFlag,
  setEditDialogFlag,
  product,
  handleEditItem,
}) => {
  const [name, setName] = useState(product.productName);
  const [editPrice, setEditPrice] = useState(product.price);
  const [editQuant, setEditQuant] = useState(product.quantity);
  const [editDesc, setEditDesc] = useState(product.description);
  const [editCategory, setEditCategory] = useState(product.category);
  const [id, setId] = useState(product.id);

  return (
    <Dialog open={editDialogFlag} aria-labelledby="form-dialog-title">
      <DialogTitle>Edit Inventory Item</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: 200,
            width: 350,
          }}
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Product Name"
            margin="dense"
            type="string"
            margin="normal"
          />

          <TextField
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            label="Category"
            margin="dense"
            type="string"
            margin="normal"
          />

          <TextField
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            label="Description"
            margin="dense"
            type="string"
            margin="normal"
          />

          <TextField
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            label="Price"
            margin="dense"
            type="number"
            margin="normal"
          />

          <TextField
            value={editQuant}
            onChange={(e) => setEditQuant(e.target.value)}
            label="Quantity"
            margin="dense"
            type="number"
            margin="normal"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setEditDialogFlag(false)}>Cancel</Button>
        <Button
          onClick={() => {
            handleEditItem(
              name,
              editPrice,
              editQuant,
              editDesc,
              editCategory,
              id
            );
            setEditDialogFlag(false);
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
