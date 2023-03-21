import { DataType, DataTypes } from "sequelize";
import db from "../db/connection";

const Producto = db.define('Producto',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    price: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false
    },
},{ paranoid: true} )

export default Producto;