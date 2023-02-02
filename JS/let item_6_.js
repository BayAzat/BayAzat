let item_6;
let item_6_type;
item_6 = 15;

if (typeof item_6 == "string") {
    console.log("Type of item_6 is - " + typeof item_6)
    item_6_type = String(item_6_type);
    console.log("IF  = Now, type of item_6_type is " + typeof item_6_type)
} else if (typeof item_6 == "number") {
    console.log("Type of item_6 is - " + typeof item_6)
    item_6_type = Number(item_6_type);
    console.log("ELSE IF = Now, type of item_6_type is " + typeof item_6_type) 
} else  {
    console.log("Type of item_6 is - " + typeof item_6)
    item_6_type = Boolean(item_6_type);
    console.log("ELSE  = Now, type of item_6_type is " + typeof item_6_type) 
}

console.log("item_6 == " + item_6 + ", " +  "item_6_type == " + typeof(item_6_type))
console.log("==========")

let item_7;
item_7 = String(item_6);

let item_7_type;

if (typeof item_7 == "string") {
    console.log("Type of item_7 is - " + typeof item_7)
    item_7_type = String(item_7_type);
    console.log("IF  = Now, type of item_7_type is " + typeof item_7_type)
} else if (typeof item_7 == "number") {
    console.log("Type of item_7 is - " + typeof item_7)
    item_7_type = Number(item_7_type);
    console.log("ELSE IF = Now, type of item_7_type is " + typeof item_7_type) 
} else  {
    console.log("Type of item_7 is - " + typeof item_7)
    item_7_type = Boolean(item_7_type);
    console.log("ELSE  = Now, type of item_7_type is " + typeof item_7_type) 
}

console.log("item_7 == " + item_7 + ", " + "item_7_type == " + typeof(item_7_type))
console.log("==========")
