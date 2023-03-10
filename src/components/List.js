import React from 'react'
import { Link } from "react-router-dom";

// Get the album details and pass it to the List component
const List = (props) => {
  return (
    <div className='list'>
      <h3>{props.album.title}</h3>
      <div className='button-group'>
        <Link to="/update-album"><button className="update-btn" onClick={() => props.setUpdateAlbum(props.album)}>Update</button></Link>
        <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button>
      </div>
    </div>
  )
}

export default List
