import mysql2 from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export async function connection() {
  let connection = null;

  try {
    connection = await mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: "test",
    });

    console.log("Conexão bem sucedida!");
  } catch (err) {
    console.error(`Houve um erro ao fazer a conexão: ${err}`);
  }

  return connection;
}
