import {getConnection, sql, queries} from '../database';

export const getProducts =  async (req,res) => {
    try{
    const pool = await getConnection();
    const result = await pool.request().query
    (queries.getAllProducts);
    res.json(result.recordset);
    } catch(error){
    res.status(500);
    res.send(error.message);
    }
};

export const createNewProduct = async (req, res) =>{
    const {name,description} = req.body
    let {quantity} = req.body;

    if(name == null || description == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }
    if (quantity == null) quantity = 0;

    try{
        const pool = await getConnection();
        //Recibimos los valores, lo enviamos a la base de datos; Estamos pasando un valor dentro de la consulta
        await pool
        .request()
        .input("name", sql.VarChar, name) // "PRODUCT TEST"
        .input ('description', sql.Text, description) //"asadaas"
        .input('quantity', sql.Int, quantity) //30
        .query(queries.addNewProduct)
    
        res.json({name,description,quantity});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const getProductByid = async (req,res) =>{
    const {id} = req.params;
    
    const pool= await getConnection();
    const result= await pool.request()
    .input('Id', id)
    .query(queries.getProductByid);

    res.send(result.recordset[0]);
};

export const deleteProductByid = async (req,res) =>{
    const {id} = req.params;
    
    const pool= await getConnection();
    const result= await pool.request()
    .input('Id', id)
    .query(queries.deleteProductByid);

    res.sendStatus(204);
};

export const getTotalProducts = async (req,res) =>{
    
    const pool= await getConnection();
    const result= await pool
    .request()
    .query(queries.getTotalProducts);
    
    res.json(result.recordset[0][''])
};

export const updateProductByid = async (req,res) =>{
    const {name, description, quantity} =req.body;
    const {id} = req.params;

    if((name == null || description == null, quantity == null)){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'});
    }

    const pool= await getConnection();
    await pool
    .request()
    .input('name',sql.VarChar,name)
    .input('description',sql.Text,description)
    .input('quantity',sql.Int,quantity)
    .input('id',sql.Int,id)
    .query(queries.updateProductByid);

    res.json({name,description,quantity});
};