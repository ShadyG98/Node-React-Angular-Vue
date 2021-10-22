import { createNewProduct, getProductByid } from "../controllers/products.controller";

export const queries = {
    getAllProducts: 'SELECT * FROM Products',
    addNewProduct: 'INSERT INTO Products (name,description,quantity) VALUES (@name,@description,@quantity)',
    getProductByid: 'SELECT * FROM Products WHERE Id = @id',
    deleteProductByid: 'DELETE FROM [webstore].[dbo].[Products] WHERE Id= @id',
    getTotalProducts: 'SELECT COUNT(*) FROM Products',
    updateProductByid: 'UPDATE Products SET Name = @name, Description = @description, Quantity = @Quantity WHERE id = @id'
};