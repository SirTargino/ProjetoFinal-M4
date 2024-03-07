import { sequelize } from "../database/connection.js";

import { UsersEntity } from "./users.entities.js";

import { DataTypes, Sequelize, UUID } from "sequelize";

export const LocaisEntity = sequelize.define('Locais', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    ecoponto_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    adress_ecoponto: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    city_ecoponto: {
        type: DataTypes.STRING(50),
        allowNull: false

    },
    description_ecoponto: {
        type: DataTypes.TEXT,
    }
})