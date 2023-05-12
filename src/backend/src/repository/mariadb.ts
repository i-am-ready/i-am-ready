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
        return await pool.getConnection();
    }
    catch(err) {
        console.log(err);
        throw err;
    }
}