import React from 'react'
import { useSelector} from 'react-redux'

const UserList = () => {

    const userState = useSelector((state) => state.users)    
      const { name, email, contact, list } = userState;
    
     const newUser = list.slice().sort((a, b) => b.id - a.id);
    const renderedPosts = newUser.map((user)=>{
        return(
          <div className="col-12 col-md-6 col-lg-4" key={user.id}>
        <div className="card">
          <div className="card-body" >
            <h3 className="card-title">{user.name}</h3>
            <p className="card-text">{user.email}</p>
            <p className="card-text">{user.contact}</p>

          </div>
        </div>
      </div>

        )
      })

  return (
    <main className='App'>
         <div className="container">
                    <div className="row g-3">
                   {renderedPosts}
                   
                      {/* {user.map((elem)=>{
                        return(
                          <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                          <div className="card-body">
                          {/* <img src={photo} alt="" className="card-img img-fluid image"/> */}
                            {/* <h3 className="card-title">{elem.name}</h3>
                            <p className="card-text">{elem.email}</p>
                            <p className="card-text">{elem.contact}</p>
  
                          </div>
                        </div>
                      </div>
  
                        )
                      })} */}
                      
                    </div>
  
                  </div>
    </main>
  )
}

export default UserList