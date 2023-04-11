import { Formik, Field, Form } from "formik";
import React from "react";
import validationsSchema from "./validation";
import { useTodo } from "../../../contexts/TodoContext";

const NewTodoForms = () => {
  const { addTodo } = useTodo();
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        // setTodos((prev) => [
        //   ...prev,
        //   { //!buda olur ama daha düzenli olması ve baska ınputtanda veri girilebilir belki diye bunuda contexte fonksıyon haline getirdik öyle kullandık
        //     id: uuidv4(),
        //     text: values.text,
        //     completed: false,
        //   },
        // ]);
        addTodo(values.text);
        bag.resetForm();
      }}
      validationSchema={validationsSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
          required
        />
      </Form>
    </Formik>
  );
};

export default NewTodoForms;
