

import Stats2 from "./stats2";

/*
const friends = [ {
  avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
  name: "Mango",
  isOnline: true,
  id: 1812
},
{
  avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
  name: "Kiwi",
  isOnline: false,
  id: 1137
},
{
  avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
  name: "Ajax",
  isOnline: true,
  id: 1213
},
{
  avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
  name: "Jay",
  isOnline: true,
  id: 1714
},
{
  avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
  name: "Poly",
  isOnline: false,
  id: 1284
}

];

*/


export const FriendList = ({friends}) => {

  return (
  <> 
      {friends.map(lis => {
              return( 
              <>

<Stats2>
        <div>
       
       
                <picture>
                    <img src={lis.avatar}  alt="User avatar" width="50"/>  
                </picture>
            
                <p key={lis.id}><b>{lis.name}</b></p>
                
                { lis.isOnline  ?  <p style={{color : "green"}}>Online</p> : <p style={{color : "red"}}>Offline</p>  }
           
             
       
        </div> 
</Stats2> 
</>
                );
  
            }  )}                           
 </>
  )}

  