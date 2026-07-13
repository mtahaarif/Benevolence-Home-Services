"use client";

import { useState } from "react";
import Link from "next/link";

const initialState = {
  fullName: "",
  address: "",
  email: "",
  phone: "",
  message: "",
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
        body: JSON.stringify(form),
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
        
        {/* Full Name */}
        <div className="relative">
          <input
            required
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className="peer block w-full rounded-full border border-slate-300 bg-transparent px-6 pb-2 pt-6 text-sm text-slate-900 transition focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder-transparent"
            placeholder="Full Name"
          />
          <label
            htmlFor="fullName"
            className="absolute left-6 top-2 z-10 origin-[0] -translate-y-0 scale-75 transform text-xs font-semibold uppercase tracking-wider text-slate-500 duration-150 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-brand-blue"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Address */}
        <div className="relative">
          <input
            required
            id="address"
            type="text"
            value={form.address}
            onChange={(event) => updateField("address", event.target.value)}
            className="peer block w-full rounded-full border border-slate-300 bg-transparent px-6 pb-2 pt-6 text-sm text-slate-900 transition focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder-transparent"
            placeholder="Address"
          />
          <label
            htmlFor="address"
            className="absolute left-6 top-2 z-10 origin-[0] -translate-y-0 scale-75 transform text-xs font-semibold uppercase tracking-wider text-slate-500 duration-150 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-brand-blue"
          >
            Address <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Email & Phone Row */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Email */}
          <div className="relative">
            <input
              required
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="peer block w-full rounded-full border border-slate-300 bg-transparent px-6 pb-2 pt-6 text-sm text-slate-900 transition focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder-transparent"
              placeholder="Email Address"
            />
            <label
              htmlFor="email"
              className="absolute left-6 top-2 z-10 origin-[0] -translate-y-0 scale-75 transform text-xs font-semibold uppercase tracking-wider text-slate-500 duration-150 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-brand-blue"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Phone */}
          <div className="relative flex">
            {/* Simulated Country Dropdown to match design */}
            <div className="flex items-center justify-center rounded-l-full border border-r-0 border-slate-300 bg-slate-50 px-4 text-lg">
              🇺🇸
            </div>
            <div className="relative w-full">
              <input
                required
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="peer block w-full rounded-r-full border border-l-slate-300 border-slate-300 bg-transparent px-4 pb-2 pt-6 text-sm text-slate-900 transition focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder-transparent"
                placeholder="Phone Number"
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-2 z-10 origin-[0] -translate-y-0 scale-75 transform text-xs font-semibold uppercase tracking-wider text-slate-500 duration-150 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-brand-blue"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
            </div>
          </div>
        </div>

        {/* Message / Question */}
        <div className="relative">
          <textarea
            required
            id="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="peer block w-full min-h-[140px] rounded-[2rem] border border-slate-300 bg-transparent px-6 pb-4 pt-8 text-sm text-slate-900 transition focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue placeholder-transparent resize-y"
            placeholder="Question / Comment"
          />
          <label
            htmlFor="message"
            className="absolute left-6 top-3 z-10 origin-[0] -translate-y-0 scale-75 transform text-xs font-semibold uppercase tracking-wider text-slate-500 duration-150 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-brand-blue"
          >
            Question / Comment <span className="text-red-500">*</span>
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
          <Link href="/privacy-policy.pdf" target="_blank" className="font-semibold text-brand-blue hover:underline">
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