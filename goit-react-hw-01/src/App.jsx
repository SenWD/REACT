import "./SocialProfile/Prof"
import  "./SocialProfile/Status"

/*

import Stats2 from "./Friends/stats2";

import  Tables from "./TransactionHistory/Tables";




*/

const userData = [ {

  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
        }
 },
];



const  Profile = ({dlist}) => {
 
  return (
    <>
    
      {dlist.map(lis => {
          return( 

          <>
        
      
             <Prof>  
            
            <div>

           <picture>
               <img src={lis.avatar}  alt="User avatar" width="150"/>  
               </picture>
              
              <p key={lis.id}><b>{lis.username}</b></p>
              <p><span>@</span>{lis.tag}</p>
              <p>{lis.location}</p>
            
          
       
            <Status>
            <div>
    
    <li>
      <span>Followers</span>
      <br></br>
      <b><span>{lis.stats.followers}</span></b>
      </li>
                </div> 
            </Status>    
                   
               
                  <Status>
                <div>
                  <li>
                    
                    
                      <span>Views</span>
                      <br></br>
                      <b><span>{lis.stats.views}</span></b>
                  </li>
                  </div>  
                    </Status>
                    <Status>
                  <div>
                
                    <li>
                      <span>Likes</span>
                      <br></br>
                      <b><span>{lis.stats.likes}</span></b>
                    </li>
                  </div>
                    </Status>
                    </div>
              
              
              </Prof>   
                  
                  
          </>

              );
   
              }
            )
          }
         
     </>
    )

}




function App() {
  
  return (
    <>
      <div>
      <Profile dlist={userData} /> 
      </div>
      
      
      
    </>
  )
}

export default App
