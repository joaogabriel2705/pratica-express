import { connection } from './../../database/connection.js';

export const getAllUsers = async () => {

    try {
        const statement = await connection();
        
        const SQL = "SELECT * FROM user";
        
        const [result] = await statement.execute(SQL);
        
        await statement.end();

        return result;
    } catch (err) {
        console.error(`Erro ao fazer a consulta: ${err}`)
    }
}

export const getUser = async (id) => {
    try {
        const statement = await connection();

        const SQL = "SELECT * FROM user WHERE `id` = ?";

        const [result] = await statement.execute(SQL, [id]);

        await statement.end();

        return result;
    } catch (err) {
        console.error(`Erro ao achar usuário: ${err}`);
    }
}


export const insertUser = async (name, email, password) => {
    try {
        const statement = await connection();

        const SQL = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)"
        const [result] = await statement.execute(SQL, [name, email, password]);

        await statement.end();

        return result;
    } catch (err) {
        console.error(`Erro ao fazer inserção: ${err}`);
    }
}

export const deleteUser = async (id) => {
    try {
        const statement = await connection();
        
        const SQL = "DELETE FROM user WHERE `id` = ?";
        
        const [result] = await statement.execute(SQL, [id]);
        
        await statement.end();
        return result;
    } catch (err) {
        console.error(`Erro ao fazer a remoção do usuário: ${err}`);
    }
}

export const updateUser = async (id, name, email, password) => {
    try {
        const statement = await connection();

        const SQL = "UPDATE user SET `name` = ?, `email` = ?, `password` = ? WHERE `id` = ?"
        const [result] = await statement.execute(SQL, [name, email, password, id]);

        await statement.end();
        return result;
    } catch (err) {
        console.error(`Erro ao atualizar usuário: ${err}`);
    }
}