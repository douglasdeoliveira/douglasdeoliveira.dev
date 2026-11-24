"use client";

import { useActionState } from "react";
import Script from "next/script";
import { sendContact, type ContactState } from "@/app/actions";

const budgets = ["Até R$ 15 mil", "R$ 15–50 mil", "Acima de R$ 50 mil", "Ainda não sei"];
const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });

  const f = state.fields;

  if (state.status === "sent") {
    return (
      <div className="card form" role="status">
        <div className="sent">
          <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
          <strong className="h3">Recebi, obrigado</strong>
          <span className="body">Vou ler com calma e te responder por e-mail com um horário para conversarmos.</span>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="card form">
      <div className="formrow">
        <label className="field">Nome
          <input name="name" type="text" autoComplete="name" required maxLength={120} defaultValue={f?.name} />
        </label>
        <label className="field">E-mail
          <input name="email" type="email" autoComplete="email" required maxLength={200} defaultValue={f?.email} />
        </label>
      </div>
      <label className="field">O que você quer construir?
        <textarea name="message" rows={4} required minLength={10} maxLength={5000} defaultValue={f?.message} placeholder="Ex.: um assistente que responde dúvidas dos clientes dentro do nosso app" />
      </label>
      <fieldset className="budgets">
        <legend>Investimento previsto (opcional)</legend>
        <div className="chips">
          {budgets.map((b) => (
            <label key={b} className="chip">
              <input type="radio" name="budget" value={b} defaultChecked={f?.budget === b} />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </fieldset>
      {siteKey && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
          <div className="cf-turnstile" data-sitekey={siteKey} data-theme="dark" data-language="pt-br" />
        </>
      )}
      {state.status === "error" && <p className="form-error" role="alert">{state.message}</p>}
      <button type="submit" className="btn btn-primary" disabled={pending} style={{ marginTop: 4 }}>
        {pending ? "Enviando…" : "Enviar mensagem"}
        <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
      </button>
    </form>
  );
}
