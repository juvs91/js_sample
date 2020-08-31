import {on_click, on_key_up, on_change} from './sample_one.js'
import {get_element_of_dog_string, get_element_of_dog_node} from './sample_two.js'
let events_action_map = {
  "click": on_click,
  "key_up": on_key_up,
  "change": on_change
}

let default_event = () => {
  console.log("default event")
}

let append_event_to_dom_element = (event_type, dom_elements_to_add_event) => {
  if (dom_elements_to_add_event[Symbol.iterator] === undefined || dom_elements_to_add_event[Symbol.iterator] === null) {
    dom_elements_to_add_event = [dom_elements_to_add_event]
  }
  for(let i = 0; i < dom_elements_to_add_event.length; i++) {
    let event_to_add = events_action_map[event_type] || default_event
    dom_elements_to_add_event[i].addEventListener(event_type, event_to_add)
  }
}
export {
  append_event_to_dom_element,
  get_element_of_dog_string,
  get_element_of_dog_node,
  events_action_map
}