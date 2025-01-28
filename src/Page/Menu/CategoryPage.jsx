import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MenuPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/api/placeholder/400/300",
      title: "Espresso",
      category: "Drinks",
      price: 3.99,
      badge: "Hot",
      discount: null,
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Iced Latte",
      category: "Drinks",
      price: 4.99,
      badge: "Cold",
      discount: null,
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      title: "Chicken Sandwich",
      category: "Foods",
      price: 8.99,
      // badge: "Bestseller",
      discount: 10.99,
    },
    {
      id: 4,
      image: "/api/placeholder/400/300",
      title: "Caesar Salad",
      // category: "Foods",
      price: 7.99,
      // badge: "Healthy",
      discount: null,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    badge: "",
    discount: null,
  });

  const categories = ["Drinks", "Foods"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleCategoryChange = (value) => {
    setNewProduct({ ...newProduct, category: value });
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
      discount: null,
    });
  };

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-2xl font-bold">Category</h4>
        <Button onClick={() => setModalOpen(true)}>
          Add New Product
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <Button 
          variant={selectedCategory === "all" ? "default" : "outline"}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-xl font-semibold">{product.title}</h5>
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                  {product.category}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                {product.discount && (
                  <span className="text-gray-400 line-through">
                    ${product.discount}
                  </span>
                )}
                <span className={product.discount ? "text-red-600 font-bold" : "font-bold"}>
                  ${product.price}
                </span>
                {product.badge && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                    {product.badge}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Title"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
            />
            <Select
              value={newProduct.category}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Badge (e.g., Hot, Cold, New)"
              name="badge"
              value={newProduct.badge}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Original Price (for discount)"
              name="discount"
              type="number"
              value={newProduct.discount || ""}
              onChange={handleInputChange}
            />
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddProduct}>Add Product</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuPage;