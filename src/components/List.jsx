import React from 'react'

import Item from './Item'

const List = ({messages}) => {
    return(
     <React.Fragment>
        {messages.map((message) => {
        return(
          <Item message={message}/>
        )
      })}
     </React.Fragment>
    )
}

export default List
