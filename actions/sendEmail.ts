"use server"
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { error } from "console";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => { 
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail,500)) { 
        return {
            error: "Invalid sender email"
        }
    }
     if (!validateString(message,5000)) { 
        return {
            error: "Invalid message"
        }
    }
  
    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "sethisanuja1998@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            text: message as string,
    
        });
    } catch (err) {
        console.log(err);

    }
};