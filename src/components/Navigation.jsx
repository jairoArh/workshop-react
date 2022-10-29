import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Add, Admin, List, Update, User } from "../views/index";

export const Navigation = ({ rol, createTask, eraseTask, tasks }) => {
  return (
    <Routes>
      {rol === "admin" ? (
        <Fragment>
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/add"
            element={
              <Add
                createTask={createTask}
                eraseTask={eraseTask}
                tasks={tasks}
              />
            }
          />
          <Route path="/update" element={<Update />} />
        </Fragment>
      ) : (
        <Fragment>
          <Route path="/user" element={<User />} />
          <Route path="/list" element={<List />} />
        </Fragment>
      )}
    </Routes>
  );
};
