'use client';

import { useState, type ChangeEvent, type FormEvent } from "react";

const initialFormState = {
    name: "",
    email: "",
    message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
    const [formData, setFormData] = useState(initialFormState);
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string | null>(null);

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("loading");
        setError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const payload = (await response.json().catch(() => null)) as { message?: string } | null;
                throw new Error(payload?.message || "Failed to send message.");
            }

            setStatus("success");
            setFormData(initialFormState);
        } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "Unexpected error occurred.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                    Name
                    <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-2xl border border-slate-800/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400"
                        placeholder="Your name"
                    />
                </label>
                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                    Email
                    <input
                        required
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-2xl border border-slate-800/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400"
                        placeholder="name@email.com"
                    />
                </label>
            </div>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                Message
                <textarea
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-2xl border border-slate-800/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400"
                    placeholder="Share a bit about your project, problem, or partnership idea."
                />
            </label>
            <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-sky-500/90 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
                <p className="text-xs font-medium text-emerald-400">Thanks! Your message is on its way.</p>
            )}
            {status === "error" && error && (
                <p className="text-xs font-medium text-rose-400">{error}</p>
            )}
        </form>
    );
}
