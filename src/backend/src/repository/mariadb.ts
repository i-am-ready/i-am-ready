import mariadb, {PoolConfig, PoolConnection} from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    port: 49153,
    user: 'root',
    password: 'Pass4mariadb',
    database: 'iamready',
    connectionLimit: 50
} as PoolConfig);

export async function fetchConnection(): Promise<PoolConnection> {
    try {
        let conn = await pool.getConnection();
        console.log("Total connections: ", pool.totalConnections());
        console.log("Active connections: ", pool.activeConnections());
        console.log("Idle connections: ", pool.idleConnections());
        return conn;
    }
    catch(err) {
        console.log(err);
        throw err;
    }
}