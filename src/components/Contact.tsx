"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Mail, Phone, Instagram, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");

    const result = await submitContactForm(data);

    if (result.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Il y a une erreur");
    }
  };

  return (
    <section id="contact" className="scroll-mt-[100px] bg-white py-24 font-manrope">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Dark card */}
        <div className="overflow-hidden rounded-3xl bg-[#0F0F0F] p-8 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* ─── Left: Info ─── */}
            <div className="flex flex-col">
              {/* Badge */}
              <span className="inline-block w-fit rounded-full bg-[#27272A] px-5 py-2 text-sm font-semibold tracking-wide text-white">
                Contact
              </span>

              {/* Title */}
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                Nous Contacter
              </h2>

              {/* Description */}
              <p className="mt-4 text-base leading-[1.8] text-zinc-400">
                Vous avez un projet ? Contactez-nous pour en discuter. Nous
                sommes à votre écoute pour donner vie à vos idées.
              </p>

              {/* Info blocks */}
              <div className="mt-10 flex flex-col gap-6">
                {/* Bureau */}
                <div className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-zinc-400"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">Bureau</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      1355 Route de Duerne
                      <br />
                      69610 AVEIZE
                    </p>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:amenagement.max@gmail.com"
                  className="flex items-start gap-4 transition-colors hover:opacity-80"
                >
                  <Mail
                    size={20}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-zinc-400"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <p className="mt-1 text-sm text-zinc-400">
                      amenagement.max@gmail.com
                    </p>
                  </div>
                </a>

                {/* Téléphone */}
                <a
                  href="tel:0658696940"
                  className="flex items-start gap-4 transition-colors hover:opacity-80"
                >
                  <Phone
                    size={20}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-zinc-400"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Téléphone
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      06.58.69.69.40
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/Max_amenagement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 transition-colors hover:opacity-80"
                >
                  <Instagram
                    size={20}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-zinc-400"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Notre Instagram
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      @Max_amenagement
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* ─── Right: Form ─── */}
            <div className="rounded-2xl bg-white p-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Nom */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-zinc-900"
                  >
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    className={`w-full rounded-xl border px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition-colors focus:border-zinc-900 ${
                      errors.name ? "border-red-400" : "border-zinc-200"
                    }`}
                    {...register("name", { required: true })}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-zinc-900"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className={`w-full rounded-xl border px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition-colors focus:border-zinc-900 ${
                      errors.email ? "border-red-400" : "border-zinc-200"
                    }`}
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-semibold text-zinc-900"
                  >
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="06 00 00 00 00"
                    className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition-colors focus:border-zinc-900"
                    {...register("phone")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-zinc-900"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Décrivez votre projet..."
                    className={`w-full resize-none rounded-xl border px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition-colors focus:border-zinc-900 ${
                      errors.message ? "border-red-400" : "border-zinc-200"
                    }`}
                    {...register("message", { required: true })}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    "Envoyer"
                  )}
                </button>

                {/* Feedback */}
                {status === "success" && (
                  <div className="rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white">
                    Merci ! Max vous recontactera sous 48h.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-xl bg-red-500 px-4 py-3 text-center text-sm font-medium text-white">
                    {errorMsg || "Il y a une erreur"}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
