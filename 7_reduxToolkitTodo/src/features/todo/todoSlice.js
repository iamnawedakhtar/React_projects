import { createSlice , nanoid} from "@reduxjs/toolkit"

const initialState= {    // ye jo alag se kiya hai niche bhi declare kar sakte the 
    todos : [{id:1 ,text : " hellp world "}]   
}

export const todoSlice= createSlice (
    {
        name : "todo",
        initialState,   
        reducers :
        {
            addTodo: (state , action)=>{

                const todo ={
                    id: nanoid(),
                    text : action.payload      
                }
                state.todos.push(todo);
            },
            removeTodo: (state , action)=>{
                const id= action.payload;
                state.todos= state.todos.filter((todo)=> (todo.id !== action.payload))
            }
            // ,
            // updateTodo : ()=>{

            // }
        }

    }    
)

export const {addTodo, removeTodo} =todoSlice.actions;  // bcoz these will be used in individual components 

export default todoSlice.reducer;  // jo jo reducers store me rigister honge unse hi value lekee aupdate karega thats why jistne reducers likhe hai unko export karna padega (as store is very restrictive )

// action.payload me jo chiz behji hoti hai uska access milta hai like id ,text etx