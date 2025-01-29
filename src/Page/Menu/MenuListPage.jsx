import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import image from "../../assets/Picture/fried-rice.jpg";

const MenuPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: image,
      title: "Fried",
      category: "Accessories",
      price: 61.99,
      badge: "New",
      discount: null,
    },
    {
      id: 2,
      image: image,
      title: "Product 2",
      category: "Eco-friendly",
      price: 61.99,
      badge: "Eco",
      discount: null,
    },
    {
      id: 3,
      image: "img",
      title: "Product 3",
      category: "Footwear",
      price: 50.99,
      badge: "-10%",
      discount: 61.99,
    },
    {
      id: 4,
      image: "img",
      title: "Product 3",
      category: "Footwear",
      price: 50.99,
      badge: "-10%",
      discount: 61.99,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    badge: "",
    discount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    const productToAdd = {
      ...newProduct,
      id: products.length + 1,
      price: parseFloat(newProduct.price),
      discount: newProduct.discount ? parseFloat(newProduct.discount) : null,
    };
    setProducts([...products, productToAdd]);
    setModalOpen(false);
    setNewProduct({
      image: "",
      title: "",
      category: "",
      price: "",
      badge: "",
      discount: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h4 className="text-2xl font-bold text-center mb-8">Menu</h4>

      <Button
        variant="contained"
        className="mb-20"
        onClick={() => setModalOpen(true)}
      >
        Add New Product
      </Button>

      <div className="grid grid-cols-4 gap-6 mt-3">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden shadow-md">
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              className="object-cover hover:scale-105 transition-transform "
            />

            <CardContent>
              <Typography variant="h6" className="font-semibold">
                {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {product.category}
              </Typography>
              <div className="flex items-center gap-2 mt-2">
                {product.discount && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="line-through"
                  >
                    ${product.discount}
                  </Typography>
                )}
                <Typography
                  variant="h6"
                  color={product.discount ? "error" : "primary"}
                >
                  ${product.price}
                </Typography>
                {product.badge && (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                    {product.badge}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Material UI Dialog */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent className="space-y-4">
          <TextField
            label="Image URL"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Title"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Category"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={newProduct.price}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Badge"
            name="badge"
            value={newProduct.badge}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Discount (Optional)"
            name="discount"
            type="number"
            value={newProduct.discount || ""}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleAddProduct}
            color="primary"
            variant="contained"
          >
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MenuPage;
