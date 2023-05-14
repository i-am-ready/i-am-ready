import {fetchConnection} from "./mariadb";

export async function fetchCountryCode(ip: number): Promise<string | null> {
    let conn;
    try {
        conn = await fetchConnection();
        const res = await conn.query(`SELECT * FROM ip2location_db1 WHERE ? BETWEEN ip_from AND ip_to`, [ip]);
        if (res.length === 0) {
            return null;
        }

        const data = res[0];
        return data['country_code'];
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.end();
    }
}
