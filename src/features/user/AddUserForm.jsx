import { nanoid } from "@reduxjs/toolkit";
import { setContact, setData, setEmail, setName, deleteData } from "./UserSlice";
import { useDispatch, useSelector } from "react-redux";

const AddUserForm = () => {
  // const name = useSelector((state) => state.users.name);
  // const email = useSelector((state) => state.users.email);
  // const contact = useSelector((state) => state.users.contact);
  const {name, email, contact} = useSelector((state) => state.users);


  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("saved")
    if(name && email && contact){
        dispatch(
            setData({
              id: nanoid(),
              name,
              email,
              contact,
            })
          );
          dispatch(setName(""));
          dispatch(setEmail(""));
          dispatch(setContact(""));
          dispatch(deleteData());
    }
   
  };
  const onNameChanged = (e) =>{
  console.log('Name Changed:', e.target.value);
  dispatch(setName(e.target.value));
  }
  const onEmailChanged = (e) => dispatch(setEmail(e.target.value));
  const onContactChanged = (e) => dispatch(setContact(e.target.value));

  const canSave = Boolean(name) && Boolean(email) && Boolean(contact);

  return (
    <main className="App">

      <div className="h3 m-5">User's Details</div>
      <section>
      <form>
                <label htmlFor="postTitle">Full Name:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={name}
                    onChange={onNameChanged}
                />
                <label htmlFor="postContent">Email:</label>
                <input
                    type='mail'
                    id="postContent"
                    name="postContent"
                    value={email}
                    onChange={onEmailChanged}

                />
                 <label htmlFor="postContent">Contact:</label>
                <input
                    type='number'
                    id="postContent"
                    name="postContent"
                    value={contact}
                    onChange={onContactChanged}

                />
                <button type='button' disabled= {!canSave} onClick={handleSubmit}>Save Data</button>
                </form>
    
      </section>
    </main>
  );
};


export default AddUserForm;