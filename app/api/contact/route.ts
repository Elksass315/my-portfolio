import { NextResponse } from "next/server";

type ContactPayload = {
    name?: string;
    email?: string;
    message?: string;
};

export async function POST(request: Request) {
    const payload = (await request.json()) as ContactPayload;
    const { name, email, message } = payload;

    if (!name || !email || !message) {
        return NextResponse.json(
            { success: false, message: "Name, email, and message are required." },
            { status: 400 }
        );
    }

    console.info("New contact request", { name, email, message });

    return NextResponse.json({ success: true, message: "Message received." });
}
