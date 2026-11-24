# douglasoliveira.dev.br — Especificação do site

Site de serviços de desenvolvimento com foco em IA. Substitui o site estático atual deste repositório (o antigo fica no histórico do git).

Status: decisões fechadas em 21/11/2026, revisadas no mesmo dia após o primeiro desenho da home (ver §11).

---

## 1. Posicionamento

- **Marca pessoal**, profissional solo. Domínio `douglasoliveira.dev.br` (DNS no Cloudflare desde 24/11/2026). Sem "nós".
- **Público principal:** startups e SaaS que querem IA dentro do produto. **Secundário:** PMEs (via Agente de WhatsApp).
- **Narrativa:** 15 anos construindo sistemas em escala — hoje aplicados a colocar IA em produção. O diferencial é engenharia de produção, não prompt.
- **Vínculo atual:** engenheiro no Mercado Livre, dito explicitamente. Sem mensagem de escassez: o site convida, não filtra.
  - Nunca sugerir que o Mercado Livre é cliente ou endossa o trabalho.
  - Evitar atender concorrentes diretos do ML (logística/marketplace).

## 2. Oferta

Sem preços no site. Valores só na conversa.

| # | Serviço | Prova | Para quem |
|---|---|---|---|
| 1 | **IA dentro do seu produto** (chat, voz, RAG, automação de fluxos) — **destaque no hero** | Spindow | Startups e SaaS |
| 2 | **Agente de IA no WhatsApp** (atendimento, qualificação, venda) | Luvi | PMEs |
| 3 | **MVP com IA do zero** (web, mobile, pagamentos, painel) | Zammer, 09, K-hui, Pomelo | Fundadores |

Fora do escopo: treinamento corporativo, governança de IA, mentoria, retainer.

## 3. Prova social

### Camada 1 — escala (credibilidade)
- **"Onde trabalhei: Mercado Livre · CI&T"**, só os nomes, sem projetos nem detalhes.

### Camada 2 — IA em produção (cases com página própria)

**Spindow — case principal** (`/cases/spindow`)
- Plataforma de ensino de inglês para pessoas com dislexia. No ar; **sem números públicos**.
- IA: tutor conversacional (GPT-4o), geração de textos de lição, validação de gramática, tradução, voz sintetizada (gpt-4o-mini-tts), transcrição de fala (Whisper) para prática de pronúncia.
- Produto em volta: planos (Autonomia, Guiado, Personalizado), assinatura recorrente com cartão e Pix Automático, vínculo aluno–professor, agendamento via Google Calendar, métricas (MRR, permanência).
- Stack: monorepo TurboRepo/PNPM, Fastify + Prisma + PostgreSQL + Redis, Next.js 15, React 19, Tailwind, shadcn/ui, Stripe.
- Formato: problema → arquitetura (**diagrama do pipeline de voz e conversa**) → o que a IA faz → decisões → link para o produto.

**Luvi (ex-AutoPost IA)** (`/cases/luvi`)
- Estrategista de Instagram operando 100% via WhatsApp: atende lead, faz análise gratuita do perfil (nota 0–100 a partir de dado público), conduz à assinatura na conversa, gera posts (imagem + legenda) com memória do negócio ("DNA do negócio").
- Destaques técnicos: chatbot com Claude; cadência de reengajamento dentro da janela de 24h do WhatsApp; detecção de opt-out; checkout Stripe com estorno automático da garantia de 7 dias (idempotente); workers em fila com retry e recuperação por cron; auditoria no painel; BRL/USD.
- Stack: Next.js 16, Prisma/Postgres, Redis + fila (amqplib), Twilio, Stripe, Resend, next-intl.
- Encerramento descrito como: *"Projeto próprio, encerrado após o ciclo de validação. A arquitetura virou base dos agentes de WhatsApp que construo hoje."* Não mencionar falta de demanda nem métricas de receita.
- Formato: **diagrama do fluxo do agente** → decisões → aprendizados.

### Camada 3 — amplitude (cards na Home, sem página própria)

| Projeto | Descrição | Extra |
|---|---|---|
| Zammer Sorvetes | Site institucional + sistema interno: catálogo, estoque da fábrica, pedidos das lojas próprias e franqueadas, perfis Fábrica/Loja | Nome, logo, depoimento |
| 09 Iluminação | ERP sob medida: clientes, orçamentos, pedidos, catálogo, estoque com reserva e alerta de mínimo | Nome, logo, depoimento |
| K-hui | Site + plataforma de gestão de academia com sistema de créditos e tokens | Nome, logo, depoimento |
| Pomelo | App nativo iPhone/iPad/Mac: converte, comprime e edita arquivos pelo menu Compartilhar, processamento 100% no aparelho | Links App Store + pomelofiles.app |

Depoimentos: uma frase, pergunta sugerida *"Em uma frase, o que mudou na operação depois do sistema?"*. Cliente sem autorização cai para descrição anonimizada.

### Sem
Demo de IA ao vivo, vídeos, números inventados.

## 4. Estrutura

```
/                 Home
/cases/spindow    Case principal
/cases/luvi       Case agente de WhatsApp
/notas            Lista de textos
/notas/[slug]     Texto
/privacidade      Política de privacidade (LGPD — o formulário coleta dados)
/en/...           Espelho em inglês de tudo
```

### Home, em ordem
1. **Hero** — título, subtítulo, CTA "Conte sobre seu projeto".
2. **Faixa de logos** — Mercado Livre · CI&T.
3. **Projetos** — diagrama, 3 linhas, link para o case.
4. **Serviços** — os 3, "IA no seu produto" primeiro. Subtítulo da seção pode usar: "Seu produto merece mais que um chat colado na lateral."
5. **Outros trabalhos** — Luvi, Zammer, 09, K-hui, Pomelo, com depoimentos.
6. **Como trabalho** — conversa → construção → entrega com o time do cliente apto a manter.
7. **Sobre** — foto, 15 anos, ML hoje.
8. **FAQ** — franco ("Você faz treinamento? Não.").
9. **Contato** — formulário + calendário.

Fora: páginas por serviço, páginas de case para a camada 3 (adicionar quando houver busca orgânica que justifique).

## 5. Copy

- Primeira pessoa, direto, frases curtas, afirmações verificáveis. Proibido: "revolucione", "potencialize", "o futuro é agora" e similares.
- **Hero:**
  > **Coloco IA dentro do seu produto. E ela funciona em produção.**
  > Sou engenheiro há 15 anos, hoje no Mercado Livre. Construo chat, voz, agentes e automações para startups e SaaS, do protótipo ao ar.
- Versão `/en` com revisão humana, não tradução literal.
- Copy completa passa por revisão de copywriting antes de publicar.

### Notas (lançamento: 2–3 textos, MDX, sem data em destaque)
- "O que aprendi colocando um agente de vendas no WhatsApp em produção"
- "IA para acessibilidade: voz e dislexia no Spindow"
- "Por que o seu MVP de IA não precisa de um agente (ainda)"

Rascunhos podem ser gerados a partir dos repositórios; voz final do autor.

## 6. Conversão

- **Formulário curto (4 campos):** o que você constrói · estágio da empresa · prazo · faixa de orçamento (até R$ 15 mil / R$ 15–50 mil / acima de R$ 50 mil / ainda não sei; equivalentes em USD no `/en`).
- Faixa compatível → **calendário Cal.com embutido** aparece na hora. "Ainda não sei" → resposta por e-mail.
- Calendário só com os horários liberados pelo autor.
- Envio via Resend, de `site@douglasoliveira.dev.br` para `contato@douglasoliveira.dev.br` (redirecionado para a caixa pessoal).
- Anti-spam: Cloudflare Turnstile.
- Sem botão de WhatsApp, sem newsletter.

## 7. Visual

- **Direção escolhida (21/11/2026, via impeccable): Página de status.** O site é a página de status dos sistemas que o autor mantém em produção. Contrato completo em `.impeccable/surfaces/src-app-locale-page-tsx.md`; fatos do produto em `PRODUCT.md`.
  - Fundo branco, tinta quase preta, uma grotesca com algarismos tabulares.
  - Único motivo gráfico: barras de atividade com os commits mensais reais de cada repositório.
  - Verde só para estado medido ao vivo; "desativado" (Luvi) e "em construção" são marcas impressas, não cores.
  - Hero: "Coloco IA dentro do seu produto." em escala de exibição; abaixo, a lista de sistemas com tempo de resposta medido no navegador do visitante e a linha "de plantão" com a foto do autor.
  - Cases escritos como notas de incidente.
- **Não pode parecer:** agência, template de IA, portfólio júnior, corporativo e frio.
- As propostas em `docs/propostas/` (folha de contato, pôster fixo, só tipografia) foram descartadas como direção e ficam só como registro; as capturas em `docs/propostas/img/` continuam úteis.
- DESIGN.md é escrito no fim, a partir do site construído.

## 8. Stack

| Peça | Escolha |
|---|---|
| Framework | Next.js (App Router) |
| Hospedagem | Vercel |
| Conteúdo | MDX no repositório |
| i18n | next-intl (pt padrão, `/en`) |
| E-mail | Resend |
| Anti-spam | Cloudflare Turnstile |
| Agenda | Cal.com embutido |
| Analytics | Vercel Analytics (sem banner de cookies) |
| Redes | GitHub, LinkedIn |

Sem banco de dados, sem CMS, sem autenticação, sem chamadas de IA no site.

## 9. Pendências do autor

- [ ] Confirmar que o contrato com o Mercado Livre permite prestar serviço por fora.
- [ ] Pedir depoimentos e logos de Zammer, 09 Iluminação e K-hui.
- [ ] Definir horários disponíveis no Cal.com.
- [ ] Configurar redirecionamento de `contato@douglasoliveira.dev.br` e verificar domínio no Resend.
- [ ] Revisar a versão em inglês.
- [ ] Decidir o destino de `douglasdeoliveira.dev` (DNS hoje no NS1): redirecionar 301 para `douglasoliveira.dev.br` ou deixar expirar.

## 10. Decisões descartadas (e por quê)

- **Raio-X de IA do produto (demo interativa):** retirado; o cliente interessado entra em contato e conta do projeto.
- **Vídeos dos produtos:** só diagramas.
- **Preços visíveis:** valores só na conversa.
- **Marca de estúdio / "nós":** trabalho solo; soaria falso para B2B.
- **Blog com frequência:** não cabe na agenda; blog abandonado é prova negativa.
- **Astro:** mais leve, mas exige stack nova sem ganho que compense.

## 11. Revisão de 21/11/2026 (após o primeiro desenho)

- **Sprint de diagnóstico removido** da oferta. Ficam 3 serviços: IA no seu produto, Agente de IA no WhatsApp, MVP com IA.
- **Sem histórico de commits nem indicação de "no ar"**: os projetos são só referenciados (imagem, nome, uma linha, link).
- **Cases com menos detalhe**: nada de notas de incidente; uma linha e um link por projeto.
- **Onde trabalhei**: removido da home. A profissão fica no Sobre, logo abaixo de "Oi, eu sou o Douglas.": selo "Engenheiro de software, atualmente no [logo Mercado Livre]" (logo oficial no build; nunca sugerir que o ML é cliente).
- **CTA**: "Abrir um projeto" e a escassez ("poucos projetos por vez") soavam como má vontade. O convite passa a ser caloroso; o formulário continua curto.
- **Visual**: a direção "Página de status" foi descartada. Nova direção pedida pelo autor: tecnológica e moderna, com parallax e animações, usando como referência componentes do 21st.dev.
