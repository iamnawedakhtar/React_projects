import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const [btnname, setBtnname] = useState("Add Todo");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos); // how to get acces from store

  const addTodoHandler = (e) => {
    e.preventDefault();
     
    todos.forEach(todo => {
      if(todo.isEditable==true)
        {
          update=true;
        }
    });
   if(update==false)
    {
      dispatch(addTodo(input));
      setInput(""); // good practice to clean the input space after adding
    }
    else
    {
        setBtnname("Update");
        dispatch(appendTodo(input));
        setInput(""); // good practice to clean the input space after adding
        setBtnname("Add Todo");
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {btnname}
      </button>
    </form>
  );
}

export default AddTodo;
