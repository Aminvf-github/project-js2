var users = [
    {user : "Alireza" , age : 21 , gender : "male"},
    {user : "Hadi" , age : 18 , gender : "male"},
    {user : "Ahmad" , age : 31 , gender : "male"},
    {user : "Maryam" , age : 17 , gender : "female"},
    {user : "Amir" , age : 38 , gender : "male"},
    {user : "Farhad" , age : 35 , gender : "male"},
    {user : "Fatemeh" , age : 22 , gender : "female"},
    {user : "Mehdi" , age : 43 , gender : "male"},
    {user : "Tarnam" , age : 64 , gender : "female"},
    {user : "Arian" , age : 31 , gender : "male"},
    {user : "Iman" , age : 28 , gender : "male"},
    {user : "Romina" , age : 21 , gender : "female"},
    {user : "Samyar" , age : 27 , gender : "male"},
    {user : "Ghazal" , age : 22 , gender : "female"},
    {user : "Shadi" , age : 43 , gender : "female"},
    {user : "Bahar" , age : 32 , gender : "female"},
    {user : "Hana" , age : 25 , gender : "female"},
    {user : "Sajad" , age : 13 , gender : "male"},
    {user : "Reza" , age : 53 , gender : "male"},
    {user : "Razie" , age : 32 , gender : "female"}
    ]	
var maleList = document.getElementById("male-list")
var femaleList = document.getElementById("female-list")
function showlist(){
    for (var i = 0; i < users.length; i++) {
        if (users[i].gender === "male") {
            createmale(users[i])  
        }else if(users[i].gender === "female"){
            createfemale(users[i])
        }
    }
}
function createmale(data) {
    var male = document.createElement("li");
    male.setAttribute("id" , "box")
    male.innerText = data.user;
    maleList.appendChild(male);
}
function createfemale(data) {
    var female = document.createElement("li");
    female.setAttribute("id" , "box")
    female.innerText = data.user;
    femaleList.appendChild(female);
}


