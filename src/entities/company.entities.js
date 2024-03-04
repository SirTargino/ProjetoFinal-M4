import { sequelize } from "../database/connection.js";

import { DataTypes, Sequelize, UUID } from "sequelize";

export const CompanyEntity = sequelize.define('Company', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    company_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    adress: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING(14),
        unique: true
    }
})