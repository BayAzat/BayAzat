let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let Q in user) {
    // ключи
    console.log( Q );  // name, age, isAdmin
    // значения ключей
    console.log( user[Q] ); // John, 30, true
  }