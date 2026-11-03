# Guia de estudo do código

Este app é feito só de arquivos de texto. Não tem instalação nem programas especiais.

## Os arquivos e o que cada um faz
| Arquivo | Para que serve |
|---|---|
| `index.html` | A "casca" da página. Só tem uma `div` vazia onde o JavaScript desenha as telas. |
| `css/style.css` | O visual: cores, tamanhos, layout. As cores ficam em variáveis no começo do arquivo. |
| `js/main.js` | Escolhe qual tela mostrar, conforme o endereço (`#/metronomo`). Registra o modo offline. |
| `js/views/home.js` | A tela inicial. |
| `js/views/metronomo.js` | A tela do metrônomo: botões, chips e a ligação com o motor. |
| `js/metronome.js` | O motor do metrônomo: gera os cliques e controla o tempo. |
| `js/views/afinador.js` | A tela do afinador: nota grande, medidor de cents, cordas e afinações. |
| `js/tuner.js` | O motor do afinador: liga o microfone e toca a nota de referência. |
| `js/pitch.js` | As contas: descobre a frequência do som (método YIN) e converte em nota e cents. |
| `js/views/braco.js` | O braço virtual desenhado em SVG e os dois exercícios (achar e tocar a nota). |
| `js/braco.js` | As contas do braço: que nota está em cada casa, sorteio e julgamento. |
| `js/views/leitura.js` | A tela de leitura: pauta desenhada em SVG, botões, microfone e estrelas. |
| `js/leitura.js` | As contas: sorteio das notas, posição na pauta, linhas suplementares, estrelas. |
| `js/views/partituras.js` | O player: desenha a tablatura, toca, move o cursor, repete compasso, espera você tocar. |
| `js/pecas.js` | As peças (todas originais) e as formas de acorde. Para criar a sua, copie uma e mude as casas. |
| `js/violao.js` | O som de violão sintetizado (Karplus-Strong), sem arquivos de áudio. |
| `js/views/habitos.js`, `js/habitos.js` | Sequência de dias, meta diária, calendário e backup (as contas ficam em `habitos.js`). |
| `js/views/pacotes.js`, `js/biblioteca.js` | Instalar/remover pacotes de peças (`pacotes/exemplo.json` mostra o formato). |
| `js/views/caged.js`, `js/caged.js` | O sistema CAGED: as 5 formas, como deslizam pelo braço, quiz e tocar a forma. |
| `js/bracosvg.js` | Desenha o braço em SVG; reaproveitado por várias telas. |
| `js/views/teoria.js`, `js/teoria.js`, `js/licoes.js` | Lições de teoria: o texto fica em `licoes.js`, as contas e os quizzes em `teoria.js`. |
| `js/db.js` | Guarda dados no celular (banco local IndexedDB). |
| `js/pratica.js` | Conta os minutos de prática do dia. |
| `sw.js` | O "service worker": guarda os arquivos para o app abrir sem internet. |
| `manifest.webmanifest` | Diz ao celular o nome e o ícone do app, para poder instalá-lo. |

## Seu primeiro experimento (5 minutos)
Troque algo pequeno, veja o resultado e, se não gostar, desfaça.
1. Abra `js/views/home.js` e troque `'para a Liz e a Lívia'` por outro texto.
2. Abra `css/style.css` e mude `--destaque: #E0A64A;` para outra cor, como `#6FCB8F`.
3. Em `js/metronome.js`, mude `BPM_MAX` para 300.

## Regra de ouro do modo offline
Quando mudar qualquer arquivo, aumente o número em `const VERSAO = 'llmusic-v1'` dentro de `sw.js`
(para `llmusic-v2`, `v3`...). Sem isso, o celular continua usando os arquivos velhos guardados.

## Como o metrônomo mantém o tempo certo
O JavaScript atrasa um pouco de vez em quando, e o ouvido percebe. Por isso o app não manda tocar cada clique na hora.
Ele agenda os cliques um pouco antes (até 120 ms à frente) no relógio de áudio, que é muito mais preciso.
Está explicado em comentários no topo de `js/metronome.js`.

## Como o afinador descobre a nota
Uma nota é uma onda que se repete. Em `js/pitch.js` o app compara o som com ele mesmo deslocado no tempo:
quando o deslocamento é igual ao período da onda, os dois ficam quase iguais. Esse período dá a frequência (Hz).
Depois a conta `69 + 12 × log2(f / 440)` transforma Hz em nota, e a sobra em "cents" (100 cents = 1 semitom).
Experimento: em `js/pitch.js`, mude `rmsMin` para 0.05 e veja o afinador ficar "surdo" a sons fracos.

## Curiosidade: o violão soa uma oitava abaixo do que está escrito
Na partitura de violão, a 6ª corda solta aparece como Mi3, mas soa Mi2. Por isso, no modo microfone da Leitura,
o app confere `escrito - 12` (veja `midiQueSoa` em `js/leitura.js`).

## Como colocar uma peça sua
Abra `js/pecas.js`, copie uma peça de `PECAS` e mude: `titulo`, `bpm` e os compassos. Em `melodia('C', [[corda, casa, duração], ...])`
a duração é em tempos (1 = semínima, 0.5 = colcheia, 2 = mínima). Cada compasso precisa somar o total do compasso.
Importante: o repositório é público. Use só músicas suas ou de domínio público.

## Seus dados e o backup
Tudo fica só neste celular (IndexedDB). Se você limpar os dados do navegador ou trocar de aparelho, perde tudo.
Por isso, de vez em quando, use Hábitos > Exportar e guarde o arquivo `.json` (e-mail, nuvem). Para recuperar, use Importar.
