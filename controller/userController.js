import { getAllUsers, insertUser, deleteUser, updateUser } from "./../model/DAO/userDAO.js";
import bcrypt from "bcrypt";

export const getAll = async (req, res) => {
  try {
    const users = await getAllUsers();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ 
        message: `Erro ao listar usuários ${err}` 
    });
  }
};

export const insert = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Preencha todos os campos!"});
  }
  
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await insertUser(name, email, hashedPassword);

    res.status(201).json({
      message: "Sucesso ao criar usuário!",
      user: result,
    });
  } catch (err) {
    res.status(500).json({
      message: `Erro ao criar usuário ${err}`,
    });
  }
};

export const update = async (req, res) => {
  const id = req.params['id'];
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Preencha todos os campos!"});
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await updateUser(id, name, email, hashedPassword);

    res.status(201).json({
      message: "Sucesso ao atualizar usuário",
      user: result
    });
  } catch (err) {
    res.status(500).json({
      message: `Erro ao atualizar: ${err}`,
    })
  }
}

export const remove = async (req, res) => {
  const id = req.params['id'];

  try {
    const result = await deleteUser(id);

    res.status(201).json({ 
      message: "Usuário removido!", 
      info: result
    });
  } catch (err) {
    res.status(500).json({
      message: `Não foi possível remover o usuário: ${err}`
    });
  }
}