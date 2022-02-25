import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

const AddDialog = ({ addDialogFlag, setAddDialogFlag, handleAddItem }) => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  return (
    <Dialog open={addDialogFlag} aria-labelledby="form-dialog-title">
      <DialogTitle>Add an Inventory Item</DialogTitle>
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
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            autoFocus
            label="Product Name"
            margin="dense"
            type="string"
            margin="normal"
          />

          <TextField
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
            margin="dense"
            type="string"
            margin="normal"
          />

          <TextField
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            label="Description"
            margin="dense"
            type="string"
            margin="normal"
          />

          <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="Price"
            margin="dense"
            type="number"
            margin="normal"
          />

          <TextField
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            label="Quantity"
            margin="dense"
            type="number"
            margin="normal"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setAddDialogFlag(false)}>Cancel</Button>
        <Button
          onClick={() => {
            handleAddItem(productName, quantity, price, desc, category);
            setAddDialogFlag(false);
            setProductName("");
            setQuantity(0);
            setPrice(0);
            setDesc("");
            setCategory("")
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDialog;
