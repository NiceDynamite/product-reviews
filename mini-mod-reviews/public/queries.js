//connecting to the database........
const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'puser',
//   host: 'localhost',
//   database: 'mvp',
//   password: 'asd123',
//   port: 5432,
// })

const pool = new Pool({
    // Format: postgres://user:password@host:5432/database
    
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

const getReviews = async (req, res) => {
    console.log("Grabing reviews");
    try{
        const data = await pool.query('SELECT * FROM reviews');
        console.log(data);
        res.send(data);
    }
    catch (error){
        console.log(error);
        res.end();
    }
   
  }









module.exports = {
    getReviews,
  }