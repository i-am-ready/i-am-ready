import {fetchConnection} from "./mariadb";
import {Signature} from "../models/signature";
import {parsePhoneNumber} from "awesome-phonenumber";
import {sign} from "crypto";

export async function insertSignature(signature: Signature): Promise<Signature> {
    let conn;
    try {
        conn = await fetchConnection();
        const res = await conn.query(`
               INSERT INTO signatures 
                    (phone, email, country, birthdate, level, signing_date) 
               VALUE (?, ?, ?, ?, ?, ?)`,
            [
                signature.phone,
                signature.email,
                signature.country,
                signature.birthdate,
                signature.level,
                signature.signingDate,
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

export async function fetchByPhone(phone: string): Promise<Signature | null> {
    const parsedPhone = parsePhoneNumber(phone);
    if (!parsedPhone.possible) {
        throw new Error(`Can't fetch by phone, because phone number '${phone}' is not possible (${parsedPhone.possibility})`);
    }

    let conn;
    try {
        conn = await fetchConnection();
        const res = await conn.query(`SELECT * FROM signatures WHERE phone = ?`, [parsedPhone.number!.e164]);
        if (res.length === 0) {
            return null;
        }

        const data = res[0];
        return {
            id: data.id,
            phone: data.phone,
            email: data.email,
            country: data.country,
            level: data.level,
            birthdate: new Date(Date.parse(data.birthdate)),
            signingDate: new Date(Date.parse(data['signing_date']))
        } as Signature;
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.end();
    }
}
