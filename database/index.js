var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'arena_world'
});

connection.connect((error, results) => {
  if (error) {
    console.log("ERROR DB connection failed")
  } else {
    console.log("DB connected successfully!")
  }
});

let searchQuery = (callback) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.log("ERROR search query failed");
      callback(error, null);
    } else {
      console.log("Search query successful!")
      callback(null, results);
    }
  })
}


let insertQuery = (user, callback) => {
  connection.query(`INSERT INTO users (firstName, lastName, position, height, weight_lbs, school, wins, losses) VALUES ('${user.firstName}', '${user.lastName}', '${user.position}', ${user.height}, ${user.weight_lbs}, '${user.school}', ${user.wins}, ${user.losses})`, (error, results) => {
    if (error) {
      console.log("ERROR insert query failed", error);
      callback(error, null);
    } else {
      console.log("insert query successful!")
      callback(null, results);
    }
  })
}

// module.exports = {
//   searchQuery,
//   insertQuery
// }

module.exports.searchQuery = searchQuery;
module.exports.insertQuery = insertQuery;


// firstName: "Andrew",
// lastName: 'Ngo',
// position: "Quarterback",
// height: 5.9,
// weight_lbs: 150,
// school: 'Rancho Bernardo High School',
// wins: 10,
// losses: 2
//
// INSERT INTO users (firstName, lastName, position, height, weight_lbs, school, wins, losses) VALUES ("Andrew", 'Ngo', "Quarterback", 5.9, 150, 'Rancho Bernardo High School', 10, 2)
//
// "Andrew", 'Ngo', "Quarterback", 5.9, 150, 'Rancho Bernardo High School', 10, 2

// ${product.firstName}, ${product.lastName}, ${product.position}, ${product.height}, ${product.weight_lbs}, ${product.school}, ${product.wins}, ${product.losses}
