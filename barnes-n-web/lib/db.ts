import secureLog from "./SecureLog";
var mysql = require("mysql")

var connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});

export default connectionPool;

// export default async function executeQuery({ query, values }: { query: string, values: any }) {
//     try {
//         connectionPool.query(query, values, function (error: any, results: any, fields: any) {
//             if (error) throw error;
//             secureLog(results[0])
//             return results[0];
//         });
//     } catch (error) {
//         return { error };
//     }
// }