//import mysql module
let mysql = require("mysql2");

//create connection
let con = mysql.createConnection({
    host: "localhost", //mysql host
    user: "root", //mysql user
    password: "28072001", //mysql password
    database: "sakila" //mysql database name
});

//create function to start connect 
function startConnection() {
    con.connect((err) => {  // This line invokes or callback the connect method of an object named 'con'.
        if (err) throw err; // If there's an error during connection, it throws the error.
        console.log("Connected!") // If the connection is successful, it logs "Connected!" to the console.
    })
}

//  create function savuser registered data
async function saveUser(userName, phoneNumber, email, country, password) {
    startConnection();
    let data = await con.promise().query(`insert into user_data (userName,phoneNumber,email,country,password) values ('${userName}',${phoneNumber},'${email}','${country}','${password}')`)
    return data[0];
};


//create function get api for register data
async function getUser() {
    
    //start connection
    startConnection();

     //get data from database query
    let data = await con.promise().query("select * from user_data");
    return data[0];
}

// create function for update user data 
async function updateUser(userName, phoneNumber, email, country,id) {
    startConnection();
    let data = await con.promise().query(`update user_data set userName = "${userName}",phoneNumber="${phoneNumber}",email="${email}",country="${country}" where id=${id}`);
    return data[0];
}

//create function for delete data
async function deleteUser(id){
    startConnection();
    let data = await con.promise().query(`delete from user_data  where id=${id}`);
    return data[0];
}





//  create function savuser registered data
async function saveDairy(userName, phoneNumber, email, country, password) {
    startConnection();
    let data = await con.promise().query(`INSERT INTO dairy(title,description,date,location) Values("${title}","${description}","${date}","${location}")`) 
    return data[0];
};

//create function for get dairy
async function getdairy(){
    startConnection();
    let data = await con.promise().query("select * from dairy");
    return data[0];
}

// create function for update user data 
async function updateDairy(title, description, date, location,diary_id) {
    startConnection();
    let data = await con.promise().query(`update dairy set title = "${title}",description="${description}",date="${email}",date="${date}",location="${location}" where diary_id=${diary_id}`);
    return data[0];
}

//create function for delete data
async function deleteDairy(diary_id){
    startConnection();
    let data = await con.promise().query(`delete from dairy  where diary_id=${diary_id}`);
    return data[0];
}


//we need to export above functions
module.exports = {
    saveUserData: async (userName, phoneNumber, email, country, password) => saveUser(userName, phoneNumber, email, country, password),
    getUserData: async () => getUser(),
    updateUserData: async (userName, phoneNumber, email, country,id) => updateUser(userName, phoneNumber, email, country,id),
    deleteUserData: async(id)=> deleteUser(id),


    getDairyData : async()=>getdairy(),
    saveDairyData: async (title, description, date, location) => saveDairy(title, description, date, location),
    updateDairyData : async (title, description, date, location,diary_id)=>updateDairy(title, description, date, location,diary_id) ,
    deleteDairyData : async(diary_id)=>deleteDairy(diary_id)
}