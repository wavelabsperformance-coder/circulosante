# Círculo Santé — Landing Page

Landing page premium (mobile-first) para o projeto **Círculo Santé**, de Juliana Prado.

## Estrutura

```
circulo-sante/
├── index.html      → estrutura da página (seções/dobras)
├── styles.css      → todo o estilo (paleta, tipografia, texturas, animações)
├── script.js       → scroll reveal, brasas e formulário
└── assets/         → imagens (hero, retrato, símbolos e fogo tratados)
    ├── hero.jpg
    ├── portrait.jpg
    ├── fire.jpg
    ├── lotus.jpg
    ├── sri-yantra.jpg
    ├── tree-of-life.jpg
    ├── om.jpg
    └── dance.jpg
```

## Como rodar

É um site estático, sem build. Basta abrir `index.html` no navegador.
No VS Code, recomendo a extensão **Live Server** (botão "Go Live") para recarregar automático.

## Fontes

Usa Google Fonts (Cormorant Garamond + Jost), carregadas via `<link>` no `<head>`.
Precisa de internet para renderizar as fontes corretas. Para uso offline, baixar as
fontes e servir localmente (@font-face).

## Paleta (variáveis em styles.css → :root)

- Preto/café: `--ink #0B0806`
- Dourado: `--gold #E4C583`, `--gold-2 #C69A54`, `--gold-deep #8C6A38`
- Creme: `--cream #F1EADC`

## Texturas (símbolos e fogo)

Ficam ATRÁS do texto, fundidas ao preto via `mix-blend-mode` + máscara (classe `.tex`).
São atmosfera, nunca protagonistas. Para ajustar intensidade, mexer no `opacity`
de cada variação (`.tex.fire-r`, `.tex.center`, `.tex.top`, `.tex.bottom`, `.tex.dance`).

## ⚠️ Formulário (PENDENTE de integração)

O formulário da lista de interesse (seção final) hoje é **apenas visual**: valida
nome + WhatsApp e mostra a confirmação, mas **não envia nem armazena nada**.

Ver `script.js` → bloco marcado com `TODO integração`. Opções para conectar:
- Link `wa.me` (abre WhatsApp com mensagem pré-preenchida)
- Google Sheets (via Apps Script / webhook)
- CRM próprio

## Observações de conteúdo

- Fotos da Juliana: usar sempre como produzidas — não alterar rosto, corpo ou expressão.
  Apenas recorte/enquadramento é permitido.
- Datas dos encontros 2026 estão no `index.html` (seção "Calendário de encontros").
