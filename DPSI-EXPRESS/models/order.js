// models/order.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const customer = require('./customer');
const employee = require('./employee');
const shipper = require('./shipper');
const Order = sequelize.define('Order', {
orderID: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},
customerID: {
type: DataTypes.INTEGER,
allowNull: false,
references:{
    model:customer,
    key:'customerID'
}
},
firstName: {
type: DataTypes.STRING,
allowNull: false
},
employeeID: {
type: DataTypes.INTEGER,
allowNull: false,
references:{
    model:employee,
    key:'employeeID'
}
},
orderDate: {
    type: DataTypes.DATE,
    allowNull: false
    },
    shipperID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model:shipper,
        key:'shipperID'
    }
    }
    });

    Order.belongsTo(customer,{foreignKey:'customerID'});
    customer.hasMany(customer,{foreignKey:'customerID'});

    Order.belongsTo(employee,{foreignKey:'employeeID'});
    employee.hasMany(employee,{foreignKey:'empolyeeID'});

    Order.belongsTo(shipper,{foreignKey:'shipperID'});
    shipper.hasMany(shipper,{foreignKey:'shipperID'});

    module.exports = Order;