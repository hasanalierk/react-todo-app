import React from "react";
import { useTodo } from "../../../contexts/TodoContext";
import Item from "./Item";

let filtered = null;

const List = () => {
  const { todos, filter } = useTodo();

  filtered = todos;
//! Anlatıyorum sakince oku biraz karışık burası. İlk basta filtered diye bir şey tanımladık jsx in dışında ve onu null a eşitledik, daha sonra jsx in içinde değerini değiştirdik, bizim todosu filtered a aktardık ve aşagıdaki mape de onu yazdık, hani hatırla önceden todos yazıyodu orda. Sonra bir kosul olusturduk, bu arada şunuda unutma TodoContext e filter diye state tanımlamıstık onuda burda kullanıyoruz farkettıysen, herneyse sonra işte kosulu olusturduk esas önemli nokta burası kosulda dedikki, filter "all" a eşit değilse filtered i filtrele ve filteredin yeni değerini kendisine ata. Filtreleme olayımızda şöyle, filter "active" e eşitse eger todo.completed i false olanları al, eğer değilse todo.completedi true olanları al ve filtereda ata. Ve böylelikle filtereda yeni değer tanımlamıs oluyoruz ve maplarkende ona göre mapleyip ekrana basıyor. Umarım anlamışsındır :) anlamadıysan eger "https://gelecegiyazanlar.turkcell.com.tr/konu/egitim/react-301/filtreleme-islemleri" link bu dakika 7.50 den sonra izleyebilirsin özet geçiyor orda :)
  if (filter !== "all") {
    filtered = filtered.filter((todo) =>
      filter === "active" ? todo.completed === false : todo.completed === true
    );
  }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default List;
