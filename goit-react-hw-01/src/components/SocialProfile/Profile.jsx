

/*
import Prof from "./SocialProfile/Prof";
import Status from "./SocialProfile/Status";

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

