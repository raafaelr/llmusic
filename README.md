# LLMusic

Meu app de estudo de violão e música, em homenagem à Liz e à Lívia.

App web instalável (PWA) que funciona **offline** no celular. Sem anúncios, sem conta, sem servidor: tudo fica no aparelho.

## Marcos
- [x] Marco 1: base do app (offline, banco local, paisagem) e metrônomo sintetizado
- [x] Marco 2: afinador cromático e de violão (6 afinações)
- [x] Marco 3: braço virtual e reconhecimento de notas
- [x] Marco 4: leitura à primeira vista e pontuação (estrelas)
- [x] Marco 5: player de tablatura (3 peças originais, som sintetizado, esperar eu tocar)
- [x] Marco 6: pacotes de peças, sequência de dias, calendário e backup
- [x] Marco 8: CAGED, teoria em lições e leitura completa (sustenidos/bemóis e ritmo)
- [x] Marco 7: APK (Capacitor via GitHub Actions) com lembrete diário — veja [APK.md](APK.md)

## Importante
Este repositório é público. Não coloque nele PDFs de livros nem nada que seja só seu.

Para entender cada arquivo, leia o [APRENDER.md](APRENDER.md).

## Menu lateral e botão Voltar
Aba na borda esquerda (ou arrastar da borda) abre o menu com todas as telas. No APK o botão Voltar do Android volta para a tela anterior (fecha o menu se aberto); na tela inicial pede para tocar de novo para sair (plugin @capacitor/app).

## Importar tablaturas
Tela **Importar** (também pelo botão "＋ Importar" em Partituras). Lê PDF com tablatura em texto, PDF desenhado (números sobre 6 linhas), Guitar Pro (.gp3–.gp7/.gpx), MusicXML, AlphaTex e texto ASCII; você revisa/edita como texto, ouve e guarda em "Minhas tablaturas". PDF só de imagem (digitalizado) não tem leitura automática: o app mostra a imagem ao lado do editor.
Bibliotecas incluídas (funcionam offline), em `js/vendor`: pdf.js (Apache-2.0) e AlphaTab (MPL-2.0).

## Curso de violão (8 níveis)

Além das ferramentas, o LLMusic tem um curso completo de violão clássico, organizado
como um conservatório: 8 níveis progressivos, módulos, aulas, exercícios e avaliações.

- **Grade curricular** (`#/curso`): os 8 níveis, com módulos e aulas.
- **Aula** (`#/aula/<id>`): teoria aprofundada, desenhos interativos, áudio, exercícios,
  questionário e avaliação prática.
- **Meu progresso** (`#/painel`): onde você está, o que já dominou, pontos fracos e
  próximas atividades.
- **Auditoria curricular** (`#/auditoria`): todo assunto previsto com o seu estado
  (planejado, em desenvolvimento, implementado, validado).

Uma aula só é considerada **dominada** quando o questionário teórico atinge 75% de acerto
*e* a avaliação prática é confirmada. O app não finge avaliar a sua execução por áudio.

Também fazem parte do curso:

- **Biblioteca de Técnicas** (`#/tecnicas`): as 23 técnicas do violão clássico, cada uma
  com passo a passo, digitação, exercícios, erros comuns e critérios de autoavaliação.
- **Central de Exercícios** (`#/exercicios`): 49 exercícios filtráveis por nível, disciplina,
  técnica, dificuldade, tempo e objetivo, com registro de prática e de andamento atingido.
- **Repertório** (`#/repertorio`): 44 obras **em domínio público**, do Renascimento ao
  século XX, com filtros por período, nível, tonalidade, técnica e compositor, ficha de
  estudo, aulas relacionadas e registro do seu estágio em cada peça.
- **Meu Plano de Estudos** (`#/plano`): cinco rotinas prontas (20, 30, 45, 60 e 90 minutos)
  com blocos marcáveis, cronômetro, plano semanal editável, metas e histórico de sessões.
- **Avaliações** (`#/avaliacoes`): prova teórica de cada nível, com questões sorteadas entre
  as aulas já estudadas (mínimo de 75%), e avaliação prática a partir dos critérios de
  domínio das aulas, com histórico.
- **Tutor pedagógico** (`#/tutor`): diagnóstico por sintoma, recomendação do que estudar,
  glossário, gerador de plano de exercício e panorama por disciplina. É **baseado em regras**
  e roda offline — não é um chat de IA e não escuta você tocar; isso está escrito na tela.
- **Biblioteca de Materiais** (`#/materiais`): tabelas de consulta rápida (afinação, figuras,
  armaduras, cifras, termos italianos, símbolos do violão, ornamentos), catálogo de métodos
  e guia prático de direito autoral.

Estado atual: **os 8 níveis estão completos** — 233 de 233 assuntos da grade, 167 aulas,
verificados por um validador automático que confere, em cada aula, teoria, representação
visual, atividade prática, questionário com no mínimo quatro perguntas e avaliação prática
com critério de domínio.

## Direito autoral

O repositório é público, então nada protegido entra aqui:

- A Biblioteca de Repertório só lista obras em **domínio público**, com o ano de morte do
  autor declarado em cada ficha.
- Os compositores ainda protegidos (Villa-Lobos, Rodrigo, Brouwer) têm aulas próprias que
  ensinam a linguagem e preparam a técnica com **exercícios originais**, sem reproduzir
  partitura, e indicam a edição licenciada.
- Os exemplos musicais escritos nas aulas são de obras em domínio público ou foram
  compostos para este curso.
