import ejs from "ejs";
import { DbHelper } from "../DatabaseHelper";
import { sendEmail } from "../Helper";

const dbInstance = new DbHelper();

export interface User {
    userid: string;
    username: string;
    Email: string;
    Password: string;
    isDeleted: number;
    isEmailSent: number;
    role: string;
}

//function for sending an email when a citizen registers
export async function run() {
    try {
        const users = (await dbInstance.query("SELECT * FROM Users WHERE isEmailSent = 0")).recordset as User[]

        for (const user of users) {
            try {
                const data = await ejs.renderFile("Template/register.ejs", { name: user.username })
                console.log(data)

                const messageOption = {
                    to: user.Email,
                    from: process.env.EMAIL,
                    subject: "Welcome to Citizen Connect360!",
                    html: data
                }

                await sendEmail(messageOption)

                await dbInstance.query(`UPDATE Users SET isEmailSent = 1 WHERE userid='${user.userid}'`)
            } catch (err) {
                console.error(`Error processing user ${user.userid}:`, err)
            }
        }
    } catch (error) {
        console.log("Error querying users:", error)
    }
}
//function for sending an email when a citizen registers
export async function reset() {
    try {
        const users = (await dbInstance.query("SELECT * FROM Users WHERE isPasswordReset = 1")).recordset as User[]

        for (const user of users) {
            try {
                const data = await ejs.renderFile("Template/register.ejs", { name: user.username })
                console.log(data)

                const messageOption = {
                    to: user.Email,
                    from: process.env.EMAIL,
                    subject: "Forgot Password Email",
                    html: data
                }

                await sendEmail(messageOption)

                await dbInstance.query(`UPDATE Users SET isPasswordReset = 0 WHERE userid='${user.userid}'`)
            } catch (err) {
                console.error(`Error processing user ${user.userid}:`, err)
            }
        }
    } catch (error) {
        console.log("Error querying users:", error)
    }
}
