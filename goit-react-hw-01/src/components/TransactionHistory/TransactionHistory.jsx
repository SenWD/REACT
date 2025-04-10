

import "./Tables"

export const TransactionHistory = ({items}) => {
    
    return (
      <> 
 

  <table>

  <thead >
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
                         
  <tbody>
   {items.map((lis) => {
     return( 
    <>
 
   <tr>

      <td>{lis.type}</td>
      <td>{lis.amount}</td>
      <td>{lis.currency}</td>
  </tr>
  
   </>
     )})}
  </tbody>
  
  </table>
 
  </>                   
   ) }   
                  
