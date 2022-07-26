"use strict";
import { loadSqlQueries } from "../utils";
import { sql as _sql } from "../../config";
import { connect, Int, NVarChar, Date } from "mssql";

const getTasks = async () => {
  try {
    let pool = await connect(_sql);
    const sqlQueries = await loadSqlQueries("tasks");
    const tasksList = await pool.request().query(sqlQueries.taskslist);
    return tasksList.recordset;
  } catch (error) {
    console.log(error.message);
  }
};

const getById = async (taskId) => {
  try {
    let pool = await connect(_sql);
    const sqlQueries = await loadSqlQueries("tasks");
    const task = await pool
      .request()
      .input("taskId", Int, taskId)
      .query(sqlQueries.taskbyId);
    return task.recordset;
  } catch (error) {
    return error.message;
  }
};

const creatTask = async (taskdata) => {
  try {
    let pool = await connect(_sql);
    const sqlQueries = await loadSqlQueries("tasks");
    const insertTask = await pool
      .request()
      .input("taskTitle", NVarChar(100), taskdata.taskTitle)
      .input("taskTask", NVarChar(1500), taskdata.taskTask)
      .query(sqlQueries.createTask);
    return insertTask.recordset;
  } catch (error) {
    return error.message;
  }
};

const updateTask = async (taskId, data) => {
  try {
    let pool = await connect(_sql);
    const sqlQueries = await loadSqlQueries("tasks");
    const update = await pool
      .request()
      .input("taskId", Int, taskId)
      .input("taskTitle", NVarChar(100), data.taskTitle)
      .input("taskTask", NVarChar(1500), data.taskTask)
      .query(sqlQueries.updateTask);
    return update.recordset;
  } catch (error) {
    return error.message;
  }
};

const deleteTask = async (taskId) => {
  try {
    let pool = await connect(_sql);
    const sqlQueries = await loadSqlQueries("tasks");
    const deleteTask = await pool
      .request()
      .input("taskId", Int, taskId)
      .query(sqlQueries.deleteTask);
    return deleteTask.recordset;
  } catch (error) {
    return error.message;
  }
};

export default {
  getTasks,
  getById,
  creatTask,
  updateTask,
  deleteTask,
};
