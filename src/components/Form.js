import { useState } from 'react'

const Form = () => {
  const handleChange = (event) => {
    if(event.target.id === "link")
      this.useState({ linkname: event.target.value}); 
    else 
      this.useState({ url: event.target.value}); 
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    let newFavLink = {linkname: useState.linkName, url: useState.url};
    this.useState({ linkName: '', url: ''});
    this.props.addNew(newFavLink);
  }

  return (
    <form>
      <label for="link">Link Name : </label>
      <input type="text" id="link" onChange={(event) =>handleChange(event)}/> 
      <label for="url">URL : </label>
      <input type="text" id="url" onChange={(event) =>handleChange(event)}/>
      <button type="submit" onClick={() => onFormSubmit()}>Submit</button>
    </form>
  )
}

export default Form