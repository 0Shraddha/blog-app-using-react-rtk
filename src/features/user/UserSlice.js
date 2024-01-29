import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name : 'users',
    initialState : {
        list : [
            {id : 1, name : "Shraddha Dongol", email : "shraddha@gmail.com", contact : 9860123456}
        ],
    name : "",
    email : "",
    contact : "",
    },
    reducers : {
        setName(state,action){
            state.name = action.payload
        },
        setEmail(state,action){
            state.email = action.payload
            
        },
        setContact(state, action){
            state.contact = action.payload

        },
        setData(state,action){
            const {id, name, email, contact} = action.payload;
            const initialState = state.list ? [...state.list] : []
            initialState.push({id:id, name, email, contact})
            state.list = initialState;
            console.log("list:", state.list);

        },
        updateData(state,action){
            const {id, name, email, contact} = action.payload;
        },
        deleteData(state,action){
           state.list= state.list.filter((item)=> item.id != action.payload
           )
        }
    }
})
export const { setName, setEmail, setContact, setData, deleteData} = UserSlice.actions;
export default UserSlice.reducer;