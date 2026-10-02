# IA Generativa na ULS Baixo Alentejo

Landing e decks das edições de IA generativa que a [Ciência e Letras](https://github.com/hasp7)
dá para a **ULS Baixo Alentejo**: *ChatGPT, ChatBots na Gestão e Prática Profissional em Saúde*
(terças) e *ChatGPT, ChatBots para Médicos* (segundas). 30 horas e 8 sessões cada.

**Site:** https://hasp7.github.io/cel-ulsba/

- **Origem:** clone de [`hasp7/cel-genai-med`](https://github.com/hasp7/cel-genai-med) a
  2026-10-02, com o histórico. A partir daqui seguem separados: o que mudar lá não desce para aqui
  sozinho, e vice-versa.
- **Catálogo e calendário:** conteúdos, atividades, edições e quizzes vivem em
  [`marianacpais/cel-genai-healthcare-courses`](https://github.com/marianacpais/cel-genai-healthcare-courses)
  (`courses/genai-ulsba/`). Este repo é só o lado publicado.
- **Identidade visual:** contexto `cel` em `claude/design-md/` no hasp-HQ, com acentos SNS
  (verde `#007D5A`, azul `#3E75B5`, vermelho `#CE4A43`, tirados do site da ULSBA) só no que marca
  "agora" e na faixa do topo. Sem logótipos da ULSBA.

## Barra de cofinanciamento — obrigatória

A operação é cofinanciada (Pessoas 2030 · Portugal 2030 · União Europeia · República Portuguesa –
Saúde · SNS), e a publicitação do cofinanciamento tem de estar em **tudo** o que é publicado:

- **Landing:** rodapé, centrada (`shared/ulsba-sup.png`).
- **Decks:** cada `aula-N-M/index.html` inclui, antes do `Reveal.initialize`,
  `<script src="../shared/barra-financiamento.js"></script>`, que põe a barra pequena e centrada no
  fundo de cada slide. Elementos posicionados no fundo do slide ficam a 44px ou mais.

A imagem é a que veio com os documentos da operação; não se recorta nem se recolore.

## Estrutura

| Caminho | O que é |
|---|---|
| `index.html` | Hub: linha temporal, percurso e decks de apresentação |
| `shared/edicoes.js` | Datas, horários e temas das duas edições — alimenta a linha temporal e o percurso |
| `shared/barra-financiamento.js` | Injeta a barra de cofinanciamento nos slides |
| `shared/` | `cel-base.css` (identidade dos decks), `landing.css`, logótipo CeL, `ulsba-sup.png` |
| `recursos/` | Materiais de apoio que não dependem de edição |
| `aula-N-M/` | Deck do bloco M da sessão N, quando existir — ainda nenhum |
| `versions/` | Snapshots congelados por edição |

## O hub

Três secções, todas filtráveis pelo seletor de edição no topo:

- **Linha temporal** — uma faixa por edição, as oito sessões no dia em que acontecem, e a marca de hoje.
- **Percurso** — por edição, a sessão anterior, a atual e a próxima, com o tema de cada bloco.
  A *atual* é a de hoje ou, sem aula hoje, a primeira por dar. "Ver percurso completo" abre as oito.
- **Decks de Apresentação** — uma coluna por bloco publicado, uma linha por edição. Sem o 1.1
  (a apresentação do curso na ULSBA é outra) e, por agora, sem nenhum deck.

Tudo se calcula em cada visita a partir da data do browser: a página não precisa de ser tocada só
porque passou uma semana.

**Os dados vivem em `shared/edicoes.js`**, transcritos à mão dos YAML em
`courses/genai-ulsba/editions/`. Quando um tema ficar definido lá, muda-se aqui também.

> **O que não entra aqui.** O site é público. Zoom, passwords, URLs de Moodle, número de
> formandos e a escala ficam de fora — quem dá o quê chega aos formadores pelo convite de
> calendário, gerado do mesmo YAML pelo `eventos.mjs` da skill `cel-editions-op` (hasp-HQ).

## Como trabalhar

**Publicar um deck:** criar `aula-N-M/`, incluir o `barra-financiamento.js`, e acrescentar a
coluna e as células à tabela `#decks` do `index.html`. Acrescentar a coluna é o gesto que publica.
A etiqueta da ligação é só a data em que *aquela* edição dá o bloco (`06/10`, `12/10`).

**Código da edição no `?ed=`:** `saude1` e `med1`. Código desconhecido cai na primeira.

## Arquivar / tirar de circulação

1. `git tag` + **GitHub Release** com o deck em anexo — é o arquivo imutável, sobrevive a tudo
2. Desligar o **Pages** em *Settings → Pages* — o site morre, o conteúdo fica em git
3. Se também não quiseres o código à vista, pôr o repo **privado** (o que já desliga o Pages)

> Não existe Pages protegido por password fora do GitHub Enterprise. Se o conteúdo não puder
> ser público, o alojamento tem de ser outro (Cloudflare Pages, por exemplo).
