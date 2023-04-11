import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: true,
    },
  ]);

  const addTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), text: text, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    const cloned_todos = [...todos];
    //! bu alanın türkçe meali şöyle typei checbox olan inputa onchange fonksıyonunu tanımladık ve inşa ettik burda. Fonksiyonu anlatayım sana cloned_todos dediğimiz mevzu context ımızdekı verileri attık buna ki referansları degısmesın diye. Sonra tıkladıgımız inputun id si ile bizim eski verilerimizin id sini karşılarştırdık ve aynıysa eğer itemIndex değişkenıne ata dedık. DİPNOT:findIndex methodu bunu saglıyoru bize
    //! Daha sonra itemIndex artık bize tıkladıgımız todo nun index ini dönüyor ya hani işte onu kullanarak aşagısında hemen bir değişken tanımlayıp bir işlem yaptık onu bakınca anlarsın zaten, devamınıda sakince bak kardo anlıcan sinir yapma HER ŞEY ÇOK GÜZEL OLACAK ALLAHIN İZNİYLE :)))
    //? Bir dipnot daha eklıyorum hatırlarsan ilk basta bunu ıtem.jsx componentınde tanımlamıstık daha sonra belki baska yerdede kullanırız dıye contexte tasıdık bunuda unutma dıye hatırlatıyım dedım
    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    const item = todos[itemIndex];
    item.completed = !item.completed;
    setTodos(cloned_todos);
  };

  const destroyTodo = (id) => {
    const cloned_todos = [...todos];
    //! Evet türkçe mealini yazıyorum, aslında her sey toggleTodo ile aynı yaptık, incelersen anlıcan kardo, tek fark orda üstünü çizdiriyoduk şu işlemle (item.completed = !item.completed), burda ise silmek istediğimiz için splice methodunu kullandık, splice methodunuda kısaca anlatıcak olursam, normalde 3 tane parametre alıyo bu method, ılk parametre kacıncı ındexten ıtıbaren baslıyım diye soruyor, ikinci parametre kaç tane siliyim diye soruyor, üçüncü parametre ise sildiğimin yerine ne ekliyim diye soruyor. Biz burda üçüncü parametreye ıhtıyac duymadık zaten silme ıslemı yaptığımız için ilk 2 parametresi yetti bize, başkada açıklıcak bir şey yok sakince incele anlıcan zaten toggleTodo ile aynı herşey
    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    cloned_todos.splice(itemIndex, 1);
    setTodos(cloned_todos);
  };

  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    destroyTodo,
    filter,
    setFilter,
  };

  return (
    <TodoContext.Provider value={values}> {children} </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
  }
  return context;
};
