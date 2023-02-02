
// Ввод строки
let str = "@ASDsdfjkhbdjfknabalkjd@4fkandbfljksndbfjkladbfljksd@3";

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, 
// что не так в ведённой строке.
function check_type(str){
    if (/^[a-zA-Z\d@]+$/g.test(str)){  //  5. В строке должны быть буквы
        if (typeof str == "string"){
            console.log("Correct type! " + typeof str)
            return true
        } else {
            console.log("Please, enter string")
            return false
        } 
    } else {
        console.log("Please, enter correct string")
        return false
        }
}


//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
function check_length(str){
    if (str.length == 0){ //  9. Строка не должна быть пустой
        if (str.length >= 5 && str.length <= 64){
            console.log("Correct length! " + str.length)
            return true
            } else {
            console.log("Please, enter correct length of string")
            return false
             } 
        } else {
            console.log("Please, enter a value = " + str.length)
            return false        
    }
}


//  6. Должна быть хотя бы одна буква в верхнем регистре
function check_registr(str){
    if (str.match(/[A-Z]/g) != null){   
        console.log("Correct count of registr! = " + str.match(/[A-Z]/g).length)
        return true
    } else {
        console.log("Please, enter correct count of registr! = 0")
        return false
    }
}


//  7. Должна быть хотя бы одна цифра
function check_number(str){
    if (str.match(/\d/g) != null){     
            console.log("Correct count of number! = "+ str.match(/\d/g).length)
            return true
        } else {
            console.log("Please, enter correct count of number! = 0")
            return false    
        }
}


//  8. Должна быть хотя бы одна @
function check_symb(str){
    if (str.match(/@/g) != null){     
            console.log("Correct count of @! = "+ str.match(/@/g).length)
            return true
        } else {
            console.log("Please, enter correct count of @! = 0")
            return false    
        }
}


if (check_type(str) & check_length(str)  & check_registr(str) & check_number(str) & check_symb(str)){
    console.log("OK!")
} else {
    console.log("!! WRONG !!")
}

console.log("-------------- \nFinish!")