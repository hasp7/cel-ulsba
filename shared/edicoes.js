/* Edições ULSBA (ULS Baixo Alentejo) — dados da linha temporal e do percurso.
 *
 * FONTE DE VERDADE: os YAML em `courses/genai-ulsba/editions/` do repositório
 * marianacpais/cel-genai-healthcare-courses. Este ficheiro é uma transcrição do que lá está,
 * reduzida ao que pode ser público: data, horário, sessão e tema.
 *
 * A ESCALA NÃO ENTRA AQUI. Quem dá cada bloco fica de fora por duas razões. É a parte que mais
 * muda nos YAML, e sem verificação automática uma página pública desatualizada engana mais do
 * que informa. E publicá-la punha a escala à vista antes de as pessoas serem convidadas.
 * Quem dá o quê chega aos formadores pelo convite de calendário, gerado do mesmo YAML pelo
 * `eventos.mjs`. Zoom, Moodle, passwords e notas internas também não entram.
 *
 * Quando um YAML mudar, esta transcrição tem de ser refeita à mão. Datas e horários mexem
 * pouco — foi por isso que se optou por transcrever em vez de gerar.
 *
 * Campos de uma sessão:
 *   n       número da sessão na edição
 *   data    ISO, o dia da sessão
 *   blocos  [] por ordem; cada um { h: "16h00–18h00", tema }
 *   nota    linha curta, quando a sessão foge ao padrão (feriado antes, bloco único, etc.)
 */

const EDICOES = [
  {
    id: 'saude1',
    curso: 'saude',
    nome: 'Gestão e Prática Profissional em Saúde',
    sub: '1ª edição',
    horario: 'terças · 14h00–18h00',
    sessoes: [
      { n: 1, data: '2026-10-06', blocos: [
        { h: '14h00–16h00', tema: 'Apresentação; Caracterização da Turma' },
        { h: '16h00–18h00', tema: 'Intro IA' } ] },
      { n: 2, data: '2026-10-13', blocos: [
        { h: '14h00–16h00', tema: 'Personalização e Design prompting' },
        { h: '16h00–18h00', tema: 'Prompt Engineering I/II' } ] },
      { n: 3, data: '2026-10-20', nota: 'Sessão de 3H, bloco 2 de 1H', blocos: [
        { h: '14h00–16h00', tema: 'Por definir' },
        { h: '16h00–17h00', tema: 'Por definir' } ] },
      { n: 4, data: '2026-10-27', nota: 'Sessão de 3H, bloco 2 de 1H', blocos: [
        { h: '14h00–16h00', tema: 'Por definir' },
        { h: '16h00–17h00', tema: 'Por definir' } ] },
      { n: 5, data: '2026-11-03', blocos: [
        { h: '14h00–16h00', tema: 'Por definir' },
        { h: '16h00–18h00', tema: 'Por definir' } ] },
      { n: 6, data: '2026-11-10', blocos: [
        { h: '14h00–16h00', tema: 'Por definir' },
        { h: '16h00–18h00', tema: 'Por definir' } ] },
      { n: 7, data: '2026-11-17', blocos: [
        { h: '14h00–16h00', tema: 'Laboratório de Projeto' },
        { h: '16h00–18h00', tema: 'Laboratório de Projeto' } ] },
      { n: 8, data: '2026-11-24', blocos: [
        { h: '14h00–16h00', tema: 'Apresentação de Projetos Finais' },
        { h: '16h00–18h00', tema: 'Apresentação de Projetos Finais' } ] }
    ]
  },

  {
    id: 'med1',
    curso: 'med',
    nome: 'Médicos',
    sub: '1ª edição',
    horario: 'segundas · 14h00–18h00',
    sessoes: [
      { n: 1, data: '2026-10-12', blocos: [
        { h: '14h00–16h00', tema: 'Apresentação; Caracterização da Turma' },
        { h: '16h00–18h00', tema: 'Intro IA' } ] },
      { n: 2, data: '2026-10-19', blocos: [
        { h: '14h00–16h00', tema: 'Personalização e Design prompting' },
        { h: '16h00–18h00', tema: 'Prompt Engineering I/II' } ] },
      { n: 3, data: '2026-10-26', nota: 'Sessão de 3H, bloco 2 de 1H', blocos: [
        { h: '14h00–16h00', tema: 'Por definir' },
        { h: '16h00–17h00', tema: 'Por definir' } ] },
      { n: 4, data: '2026-11-02', nota: 'Sessão de 3H, bloco 2 de 1H', blocos: [
        { h: '14h00–16h00', tema: 'Por definir' },
        { h: '16h00–17h00', tema: 'Por definir' } ] },
      { n: 5, data: '2026-11-09', blocos: [
        { h: '14h00–16h00', tema: 'Por definir' },
        { h: '16h00–18h00', tema: 'Por definir' } ] },
      { n: 6, data: '2026-11-16', blocos: [
        { h: '14h00–16h00', tema: 'Por definir' },
        { h: '16h00–18h00', tema: 'Por definir' } ] },
      { n: 7, data: '2026-11-23', blocos: [
        { h: '14h00–16h00', tema: 'Laboratório de Projeto' },
        { h: '16h00–18h00', tema: 'Laboratório de Projeto' } ] },
      { n: 8, data: '2026-11-30', blocos: [
        { h: '14h00–16h00', tema: 'Apresentação de Projetos Finais' },
        { h: '16h00–18h00', tema: 'Apresentação de Projetos Finais' } ] }
    ]
  }
];

const CURSOS = [
  { id: 'todos', rotulo: 'Tudo' },
  { id: 'saude', rotulo: 'Gestão e Prática em Saúde' },
  { id: 'med',   rotulo: 'Médicos' }
];
