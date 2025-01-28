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


const MenuPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image:'img',
      title: "Fried",
      category: "Accessories",
      price: 61.99,
      badge: "New",
      discount: null,
    },
    {
      id: 2,
      image:'img',
      title: "Product 2",
      category: "Eco-friendly",
      price: 61.99,
      badge: "Eco",
      discount: null,
    },
    {
      id: 3,
      image:'img',
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
    discount: null,
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
      discount: null,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h4 className="text-2xl font-bold text-center mb-8">Menu</h4>

      <Button className="mb-6" onClick={() => setModalOpen(true)}>
        Add New Product
      </Button>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
            <CardContent className="p-4">
              <h5 className="text-xl font-semibold mb-2">{product.title}</h5>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <div className="flex items-center gap-2">
                {product.discount && (
                  <span className="text-gray-400 line-through">
                    ${product.discount}
                  </span>
                )}
                <span className={product.discount ? "text-red-600 font-bold" : "font-bold"}>
                  ${product.price}
                </span>
                {/* bg-blue-500 */}
                {product.badge && (
                  <span className=" text-white px-2 py-1 rounded-full text-sm"> 
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
            <Input
              placeholder="Category"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Badge"
              name="badge"
              value={newProduct.badge}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Discount (Optional)"
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