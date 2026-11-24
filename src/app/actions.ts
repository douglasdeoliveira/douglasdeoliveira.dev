"use server";

export type ContactFields = { name: string; email: string; message: string; budget: string };
export type ContactState = { status: "idle" | "sent" | "error"; message?: string; fields?: ContactFields };

const BUDGETS = ["Até R$ 15 mil", "R$ 15–50 mil", "Acima de R$ 50 mil", "Ainda não sei"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Sem chave só passa fora de produção, para o formulário funcionar em desenvolvimento.
  if (!secret) return process.env.NODE_ENV !== "production";
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  const name = String(form.get("name") ?? "").trim().slice(0, 120);
  const email = String(form.get("email") ?? "").trim().slice(0, 200);
  const message = String(form.get("message") ?? "").trim().slice(0, 5000);
  const budgetRaw = String(form.get("budget") ?? "");
  const budget = BUDGETS.includes(budgetRaw) ? budgetRaw : "não informado";
  // Devolvido nos erros para o formulário não perder o que a pessoa escreveu.
  const fields = { name, email, message, budget: budgetRaw };

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return { status: "error", fields, message: "Preencha nome, um e-mail válido e conte um pouco sobre o projeto." };
  }

  if (!(await verifyTurnstile(String(form.get("cf-turnstile-response") ?? "")))) {
    return { status: "error", fields, message: "Não consegui confirmar que você não é um robô. Tente de novo." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contato] RESEND_API_KEY ausente; mensagem não enviada:", { name, email, budget });
      return { status: "sent" };
    }
    return { status: "error", fields, message: "O envio está indisponível agora. Escreva para contato@douglasdeoliveira.dev." };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Site <site@douglasdeoliveira.dev>",
      to: [process.env.CONTACT_TO ?? "contato@douglasdeoliveira.dev"],
      reply_to: email,
      subject: `Novo contato: ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\nInvestimento: ${budget}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("[contato] Resend respondeu", res.status, await res.text());
    return { status: "error", fields, message: "Não consegui enviar agora. Tente de novo ou escreva para contato@douglasdeoliveira.dev." };
  }
  return { status: "sent" };
}
