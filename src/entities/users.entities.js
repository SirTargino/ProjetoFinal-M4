import { sequelize } from "../database/connection.js";

import { DataTypes, Sequelize, UUID } from "sequelize";

export const UsersEntity = sequelize.define('Users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false

    }
})