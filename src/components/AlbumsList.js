import React from 'react'
import List from './List'
import Navbar from './Navbar'

// Get the albums list and pass it to the List component
const AlbumsList = (props) => {
  return (
    <>
      <Navbar page="Add Album" path="/albums-react/add-album" />

      <div className='albums-list'>
        {props.albums.map((album) => <List album={album} key={album.id} setUpdateAlbum={props.setUpdateAlbum} deleteAlbumFromList={props.deleteAlbumFromList} />)}
      </div>
    </>
  )
}

export default AlbumsList
