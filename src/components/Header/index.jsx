import React from "react";
import NewTodoForms from "./NewTodoForm";


const Header = () => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <NewTodoForms />
    </header>
  );
};

export default Header;
