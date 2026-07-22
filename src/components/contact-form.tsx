"use client";

import { useState } from "react";
import Link from "next/link";

const initialState = {
  form_from: "",
  form_subject: "",
  form_content: "",
  agreeToPrivacy: false,
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (!form.agreeToPrivacy) {
      setNotice("Please agree to the Privacy Policy to continue.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form_from: form.form_from,
          form_subject: form.form_subject,
          form_content: form.form_content
        }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Something went wrong.");
      }

      setStatus("success");
      setNotice(payload.message ?? "Your message has been sent successfully.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setNotice(error instanceof Error ? error.message : "Unable to send your message right now.");
    }
  }

  function updateField(field: keyof typeof initialState, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="brand-shadow bg-white p-8 sm:p-10 rounded-2xl w-full max-w-4xl mx-auto">
      <p className="text-sm text-red-500 mb-6">* Required Information</p>
      
      <div className="grid gap-6">
        
        {/* Form From (Maps to form_from) */}
        <div className="relative">
          <input
            required
            id="form_from"
            type="text"
            value={form.form_from}
            onChange={(event) => updateField("form_from", event.target.value)}
            className="peer block w-full rounded-full border border-slate-300 bg-transparent px-6 pb-2 pt-6 text-sm text-slate-900 transition focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder-transparent"
            placeholder="Your Name / Email"
          />
          <label
            htmlFor="form_from"
            className="absolute left-6 top-2 z-10 origin-[0] -translate-y-0 scale-75 transform text-xs font-semibold uppercase tracking-wider text-slate-500 duration-150 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-brand-blue"
          >
            Your Name / Email <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Form Subject (Maps to form_subject) */}
        <div className="relative">
          <input
            required
            id="form_subject"
            type="text"
            value={form.form_subject}
            onChange={(event) => updateField("form_subject", event.target.value)}
            className="peer block w-full rounded-full border border-slate-300 bg-transparent px-6 pb-2 pt-6 text-sm text-slate-900 transition focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder-transparent"
            placeholder="Subject"
          />
          <label
            htmlFor="form_subject"
            className="absolute left-6 top-2 z-10 origin-[0] -translate-y-0 scale-75 transform text-xs font-semibold uppercase tracking-wider text-slate-500 duration-150 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-brand-blue"
          >
            Subject <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Form Content (Maps to form_content) */}
        <div className="relative">
          <textarea
            required
            id="form_content"
            value={form.form_content}
            onChange={(event) => updateField("form_content", event.target.value)}
            className="peer block w-full min-h-[140px] rounded-[2rem] border border-slate-300 bg-transparent px-6 pb-4 pt-8 text-sm text-slate-900 transition focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder-transparent resize-y"
            placeholder="Message / Question"
          />
          <label
            htmlFor="form_content"
            className="absolute left-6 top-3 z-10 origin-[0] -translate-y-0 scale-75 transform text-xs font-semibold uppercase tracking-wider text-slate-500 duration-150 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-brand-blue"
          >
            Message / Question <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      {/* Privacy Agreement */}
      <div className="mt-6 flex items-start gap-3">
        <div className="flex h-6 items-center">
          <input
            id="privacy"
            type="checkbox"
            checked={form.agreeToPrivacy}
            onChange={(event) => updateField("agreeToPrivacy", event.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue cursor-pointer"
          />
        </div>
        <label htmlFor="privacy" className="text-sm text-slate-700 cursor-pointer select-none">
          By submitting this form you agree to the terms of the{" "}
          {/* SEO FIX: Changed from /privacy-policy.pdf to the valid Next.js route /privacy-policy to resolve the 404 client error penalty */}
          <Link href="/privacy-policy" target="_blank" className="font-semibold text-brand-blue hover:underline">
            Privacy Policy
          </Link>.
        </label>
      </div>

      {/* Submit Area */}
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-slate-700 px-10 py-3.5 text-sm font-semibold uppercase tracking-widest text-white rounded-full transition hover:bg-brand-ink disabled:cursor-not-allowed disabled:opacity-70 shadow-md"
        >
          {status === "submitting" ? "Sending..." : "Submit"}
        </button>
        
        {notice && (
          <p className={`text-sm font-medium ${status === "error" ? "text-red-500" : "text-emerald-600"}`}>
            {notice}
          </p>
        )}
      </div>
    </form>
  );
}