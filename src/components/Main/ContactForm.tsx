"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

type Status = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const { theme } = useTheme();
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    social: "",
    message: "",
  });

  const inputClass =
    theme === "dark"
      ? "bg-white/5 border-white/15 placeholder:text-white/40 focus:border-white/40"
      : "bg-black/5 border-black/15 placeholder:text-black/40 focus:border-black/40";

  const buttonClass =
    theme === "dark"
      ? "bg-white text-black hover:bg-white/90"
      : "bg-black text-white hover:bg-black/90";

  const handleChange =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setValues({ name: "", email: "", social: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto pt-4 md:pt-6 text-left">
      <div className="text-center mb-4 md:mb-6">
        <h3 className="text-xl md:text-2xl font-bold tracking-widest">
          SEND ME A MESSAGE
        </h3>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-3 max-w-xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            required
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChange("name")}
            className={`w-full px-3 py-2 text-sm rounded-lg border outline-none transition-colors ${inputClass}`}
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange("email")}
            className={`w-full px-3 py-2 text-sm rounded-lg border outline-none transition-colors ${inputClass}`}
          />
        </div>

        <input
          type="url"
          placeholder="Social link (optional)"
          value={values.social}
          onChange={handleChange("social")}
          className={`w-full px-3 py-2 text-sm rounded-lg border outline-none transition-colors ${inputClass}`}
        />

        <textarea
          required
          rows={4}
          placeholder="How can I help you?"
          value={values.message}
          onChange={handleChange("message")}
          className={`w-full px-3 py-2 text-sm rounded-lg border outline-none transition-colors resize-none ${inputClass}`}
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className={`w-full py-2.5 text-sm font-semibold rounded-lg transition-colors disabled:opacity-50 cursor-pointer ${buttonClass}`}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-xs text-center opacity-80 pt-1">
            Thanks! Your message has been sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-center opacity-80 pt-1">
            Something went wrong. Please try emailing me directly instead.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
