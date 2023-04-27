import { useState } from 'react'
import Table from './Table'
import Form from './Form'

const LinkContainer = (props) => {
  const handleRemove = (index) => {
    const tempArray = props.setState.favLink;
    tempArray.splice(index, 1); 
    props.setState ({ favLink : tempArray }); 
  }

  const handleSubmit = (favLink) => {
    this.useState({
      favLinks: [...useState.favLink, favLink]
      });
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <Table linkData= {props.setState.favLink} removeLink= {(index) => handleRemove(index)} />

      <br />

      <h3>Add New</h3>
      <Form addNew= {(favLink) => handleSubmit(favLink)} /> 
    </div>
  )
}

export default LinkContainer