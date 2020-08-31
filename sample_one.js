var a = "hello";
var a = 10;
var a = 1.0;

let b = "hello";
// let b = 10;

const A = "CONST_A";

let boolean = true;
let float = 10.0 // notice no ;
let str = "string";
let queue_stack = [1,2,3, 1.0, true];
queue_stack.push(9,8);
queue_stack.unshift(100);
let element_one = queue_stack.pop();
let element_two = queue_stack.shift();
let elements = queue_stack.slice(1,3);
let added_element = queue_stack.slice(2, 0, "yes", "no");

let obj = {
  A: {
    B: 10
  },
  C: 10
};

if (a < 10) {
  console.log("inside the if");
}

if (a > 10) {
  console.log("not entering here")
} else {
  console.log("in the else")
}

if (a < 10 ){
  console.log("not entering here");
} else if (a == 5) {
  console.log("entering here in else if");
} else {
  console.log("not enetering here");
}

let yes = "yes";

switch (yes) {
  case "yes":
    console.log("in the yes");
    break;
  case "no":
    console.log("in the no");
    break;
  default:
    console.log("the default");
}

for(let i = 0; i < 10; i++){
  console.log(`the count: ${i}`);
}

let i = 0;

while (i <= 10) {
  console.log(`the count: ${i}`);
  i++;
}


function fun_name(arg_one){
  console.log(`fun name ${arg_one}`)
}

(function(arg_one){
  console.log(`js IIFE ${arg_one}`)
})(10)

let fun = function(arg_one){
  console.log(`fun assigned to a variable ${arg_one}`)
}

let obj_witj_fun = {
  A: function(arg_one, arg_two){
    console.log(`fun inside an object ${arg_one} ${arg_two}`)
  }
}

function greeeting_wrapper (greeting) {
  return function (name) {
    console.log(`${greeting} to ${name}`)
  }
}

function super_greeting(greeting_to, sencond_greeting) {
  return function (name_one, name_two){
    greeting_to(name_one);
    console.log(`${sencond_greeting} from ${name_one} to ${name_two}`)
  }
}

let hello_to = greeeting_wrapper("hellooo");
let hi_to = greeeting_wrapper("hi");
let hallo = greeeting_wrapper("hallo");

hello_to("jose");
hi_to("eva");
hallo("laura");
hello_to("juan");

let supa_greeting = super_greeting(hi_to, "hiiiii");
supa_greeting("jose", "eva");


console.log("printing something in console");
console.error("printing an error");

console.log({
  user_id: "A12GGf4"
});

console.log("A" == "A");
console.log("A" === "A")
console.log(1 == "1");
console.log(1 === "1");
let letter_a = "A";
console.log(letter_a == "A");
console.log(letter_a === "A");

let cool_object = {
  A: 10000,
  B: {
    C: 10000
  }
}

function super_side_effect(obj){
  console.log(obj)
  // let c = obj.C
  // delete obj.A
  // obj.A = "10000"
  // obj = {}
  obj = 10
  console.log(obj)
}
super_side_effect(cool_object)
console.log(cool_object);

let Person = function (name, lasName) {
  this.name = name;
  this.lasName = lasName;
  this.greeting = function (greeting_type) {
    console.log(`${greeting_type} to ${name} ${lasName}`);
  }
}

let p = new Person("juve", "guz");
p.greeting("hi");

class Person2 {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  greeting (greeting_type) {
    console.log(`${greeting_type} to ${this.name} ${this.lastName}`);
  }
}
let p2 = new Person2("juventino", "guzman");
p2.greeting("hello");

function Person3 (name, lastName) {
  this.name = name
  this.lastName = lastName
}
Person3.prototype.greeting = function () {
  console.log(`${this.name} ${this.lastName} says hello`)
}
let p3 = new Person3("juventino", "guzman");
p3.greeting("hello");


function on_click(envent){
  console.log(event);
  event.stopPropagation();
  console.log(`clicked the event ${event}`)
}

function on_key_up(event){
  console.log(event);
  console.log(`on key up the event ${event}`)
}

function on_change(event) {
  console.log(event);
  console.log(`on key up the event ${event}`)
}

export {
  on_click, on_key_up, on_change
}

