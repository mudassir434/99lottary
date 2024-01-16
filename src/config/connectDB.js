const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '103.193.72.22',
    user: 'grabdeal_usdt',
    password: 'grabdeal_usdt',
    database: 'grabdeal_usdt'
});


export default connection;