import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import image from "../../assets/Picture/fried-rice.jpg"

const MenuPage = () => {
  const [products, setProducts] = useState([
    { id: 1, image: image, title: "Espresso", category: "Drinks", price: 3.99, badge: "Hot", discount: null },
    { id: 2, image: "/api/placeholder/400/300", title: "Iced Latte", category: "Drinks", price: 4.99, badge: "Cold", discount: null },
    { id: 3, image: "/api/placeholder/400/300", title: "Chicken Sandwich", category: "Foods", price: 8.99, discount: 10.99 },
    { id: 4, image: "/api/placeholder/400/300", title: "Caesar Salad", category: "Foods", price: 7.99, discount: null },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [newProduct, setNewProduct] = useState({ image: "", title: "", category: "", price: "", badge: "", discount: null });

  const categories = ["Drinks", "Foods"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleCategoryChange = (event) => {
    setNewProduct({ ...newProduct, category: event.target.value });
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
    setNewProduct({ image: "", title: "", category: "", price: "", badge: "", discount: null });
  };

  const filteredProducts = products
    .filter(product => selectedCategory === "all" || product.category === selectedCategory)
    .filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <Typography variant="h4" className="font-bold">Our Menu</Typography>
            <Typography className="text-gray-600">Discover our delicious offerings</Typography>
          </div>
          <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>Add New Product</Button>
        </div>

        {/* Search Bar */}
        
        <TextField
          variant="outlined" 
          placeholder="Search products..."
          fullWidth 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className="mb-4"
        />
      
          &nbsp;
        {/* Category Buttons */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          <Button variant={selectedCategory === "all" ? "contained" : "outlined"} onClick={() => setSelectedCategory("all")}>
            All
          </Button>
          {categories.map((category) => (
            <Button key={category} variant={selectedCategory === category ? "contained" : "outlined"} onClick={() => setSelectedCategory(category)}>
              {category}
            </Button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-4 gap-6 mt-3 w-400">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="shadow-md rounded-lg overflow-hidden">
              <CardMedia component="img" image={product.image} alt={product.title} />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" className="text-gray-500">{product.category}</Typography>
                <div className="flex items-center gap-2 mt-2">
                  {product.discount && (
                    <Typography variant="body2" className="text-gray-500 line-through">${product.discount}</Typography>
                  )}
                  <Typography variant="h6" className={product.discount ? "text-red-500" : "text-gray-900"}>
                    ${product.price}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dialog for Adding a Product */}
        <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="">
          <DialogTitle>Add New Product</DialogTitle>&nbsp;
          <DialogContent className="">
            <TextField label="Image URL" name="image" value={newProduct.image} onChange={handleInputChange} fullWidth className="" /> &nbsp;
            <TextField label="Title" name="title" value={newProduct.title} onChange={handleInputChange} fullWidth />&nbsp;
            <Select value={newProduct.category} onChange={handleCategoryChange} displayEmpty fullWidth>&nbsp;
              <MenuItem value="" disabled>Select category</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </Select>
            <TextField label="Price" name="price" type="number" value={newProduct.price} onChange={handleInputChange} fullWidth />&nbsp;
            <TextField label="Badge (e.g., Hot, Cold, New)" name="badge" value={newProduct.badge} onChange={handleInputChange} fullWidth />&nbsp;
            <TextField label="Original Price (for discount)" name="discount" type="number" value={newProduct.discount || ""} onChange={handleInputChange} fullWidth />&nbsp;
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setModalOpen(false)} color="secondary">Cancel</Button>
            <Button onClick={handleAddProduct} color="primary" variant="contained">Add Product</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default MenuPage;
