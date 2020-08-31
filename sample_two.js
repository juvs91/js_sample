let get_element_of_dog_string = (dog_name) => {
  return `<li> ${dog_name} </li>`;
}

let get_element_of_dog_node = (dog_name) => {
  var newDiv = document.createElement("li"); 
  var newContent = document.createTextNode(dog_name); 
  newDiv.appendChild(newContent);
  return newDiv
}

export {
  get_element_of_dog_string,
  get_element_of_dog_node
}