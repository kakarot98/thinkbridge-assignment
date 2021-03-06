import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ListRows from "./ListRows.js";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import AddDialog from "./AddDialog";

const List = () => {
  const [productsList, setProductsList] = useState([]);

  const [addDialogFlag, setAddDialogFlag] = useState(false);

  const addItemClick = () => {
    setAddDialogFlag(true);
  };

  const fetchInventoryItems = async () => {
    await axios
      .get("http://localhost:3001/products")
      .then((res) => setProductsList(res.data))
      .catch((err) => console.log(err));

    //console.log(productsList);
  };

  const handleAddItem = async (productName, quantity, price, desc, category) => {
    if (productName === ""|| category==="" || quantity === 0 || price === 0 || desc === "" ) {
      window.alert("Please enter all the details");
      return;
    }
    await axios
      .post("http://localhost:3001/products", {
        productName,
        quantity,
        price,
        description: desc,
        category,
      })
      .then((res) => {
        if (res.data == "ok") {
          fetchInventoryItems();
        }
      });
  };

  const handleEditItem = async (name, editPrice, editQuant, editDesc, editCategory, id) => {
    await axios
      .put(`http://localhost:3001/products/${id}`, {
        productName: name,
        price: editPrice,
        quantity: editQuant,
        description: editDesc,
        category: editCategory,
      })
      .then((res) => {
        if (res.data == "ok") {
          fetchInventoryItems();
        }
      });
  };

  const handleDeleteItem = async (id) => {
    axios.delete(`http://localhost:3001/products/${id}`).then((res) => {
      if (res.data == "ok") {
        fetchInventoryItems();
      }
    });
  };

  useEffect(() => {
    fetchInventoryItems();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <colgroup>
          <col style={{ width: "15%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "5%" }} />
          <col style={{ width: "5%" }} />
          <col style={{ width: "15%" }} />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>
              <h3>Inventory List</h3>
            </TableCell>
            <TableCell>
              <Fab
                size="small"
                color="secondary"
                aria-label="add"
                onClick={() => addItemClick()}
              >
                <AddIcon />
              </Fab>
              <AddDialog
                addDialogFlag={addDialogFlag}
                setAddDialogFlag={setAddDialogFlag}
                handleAddItem={handleAddItem}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsList.map((product) => {
            console.log(product);
            return (
              <ListRows
                product={product}
                key={product.id}
                handleEditItem={handleEditItem}
                handleDeleteItem={handleDeleteItem}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
