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

Estado atual: **Nível 1 completo** (4 módulos, 26 aulas). Níveis 2 a 8 mapeados, com
conteúdo em preparação — acompanhe pela tela de Auditoria.
