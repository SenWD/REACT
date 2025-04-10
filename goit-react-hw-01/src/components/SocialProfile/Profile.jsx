/*
import  "./userData.json";
const userData = JSON.parse(userData);

  */

import Prof from "./SocialProfile/Prof";
import Status from "./SocialProfile/Status";


/*
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




try {
  //const userData = JSON.parse(userData);
  <Profile dlist={userData} />
      
} catch (error) {
  console.log(error.name); 
  console.log(error.message); 
  console.log(error.stack);
}

*/

  export const Profile = ({dlist}) => {
    
 
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

