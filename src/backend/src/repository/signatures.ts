import {fetchConnection} from "./mariadb";
import {Signature} from "../models/signature";
import {parsePhoneNumber} from "awesome-phonenumber";

export async function insertSignature(signature: Signature): Promise<Signature> {
    let conn;
    try {
        conn = await fetchConnection();
        const res = await conn.query(`
               INSERT INTO signatures 
                    (phone, country, birthdate, level, signing_date) 
               VALUE (?, ?, ?, ?, ?)`,
            [
                signature.phone,
                signature.country,
                signature.birthdate,
                signature.level,
                new Date(),
            ]);
        console.log(res);
        signature.id = res.insertId;
        return signature;
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.end();
    }
}

export async function signatureExistsByPhone(phone: string): Promise<boolean> {
    const parsedPhone = parsePhoneNumber(phone);
    if (!parsedPhone.possible) {
        return false;
    }

    let conn;
    try {
        conn = await fetchConnection();
        const res = await conn.query(`SELECT 1 FROM signatures WHERE phone = ?`, [parsedPhone.number!.e164]);
        return res.length > 0;
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.end();
    }
}