# LLMusic — instruções para o Claude

App pessoal de estudo de violão clássico, do Rafael, dedicado às filhas Liz e Lívia.
PWA offline-first + APK Android. Repositório **público**. Tudo em **português**.

## Como trabalhar aqui

**Use a skill `ponytail` no nível `full` em toda tarefa de código.** A menor mudança
que resolve o problema inteiro. Reaproveite antes de criar. Não crie arquivo novo se
um existente pode abrigar o código. Não adicione dependência sem necessidade real.

Economia de contexto: leia só o que precisa, diffs pequenos, nada de relatório
gigante para tarefa simples.

Termine toda resposta dizendo **o que não foi verificado** e qual é o risco. Isso
importa mais do que parece: boa parte dos defeitos deste projeto foi achada medindo
(contraste calculado, pixel medido, digest de assinatura comparado), não olhando.

Não faça pela metade nem deixe "depois a gente faz". Se dá para fazer de uma vez, faça.

O dono do projeto está **aprendendo a programar** com ele. Comente o código em
português explicando *por que*, não *o que*. Não há etapa de build: o que está no
repositório é o que roda.

## Regras que não se negociam

- **Direito autoral.** Nunca comitar partitura, gravação ou material protegido. O
  repositório é público. Só domínio público ou licenciado. Em particular: nada dos
  PDFs do Henrique Pinto nem do arranjo "A neném do papai".
- **Nada de funcionalidade simulada.** Se algo exige tecnologia que não existe aqui,
  diga qual é a dependência e proponha algo viável. Não finja que funciona.
- **Nunca afirmar que o app avaliou uma execução por áudio** sem haver análise sonora
  de verdade implementada.
- **Não criar botão sem função.**
- **Sem dados pessoais, sem compartilhamento público, sem infraestrutura multiusuário.**
- **APK:** não mudar o identificador (`com.llmusic.app`), a chave de assinatura nem o
  mecanismo de atualização. Instalação por cima tem de preservar os dados.

## Arquitetura

JavaScript puro, ES modules, **sem framework e sem build**. ~110 arquivos `.js`.

- `js/main.js` — roteador por hash. O mapa `TELAS` liga rota → módulo. Cada tela
  exporta `montar(raiz, ir, arg)` e devolve uma função de desmontagem.
- `js/db.js` — IndexedDB v2. Gavetas: `config`, `pratica`, `progresso`, `sessoes`,
  `avaliacoes`. APIs: `Config`, `Pratica`, `Progresso`, `Sessoes`, `Avaliacoes`,
  `Backup.exportar/importar`.
- `js/curso/curriculo.js` — 8 níveis, 22 módulos, 167 aulas, 233 assuntos.
  `acharAula(id)`, `todasAsAulas(niveis)`, `carregarNivel(n)`.
- `js/curso/blocos.js` — vocabulário dos blocos de aula. Toda figura sai como
  `<figure class="bloco-fig emoldurado">`.
- `js/curso/progresso.js` — `NOTA_MINIMA = 0.75`, `pedeViolao(aula)`, `proximaPratica()`.
- `js/musica/notacao.js` — gravação da pauta. Um espaço da pauta = `2 * H`. Cabeça de
  nota com a altura de um espaço, haste de 3,5 espaços, direção pela 3ª linha.
  Segue o *Behind Bars* (Gould).
- `js/musica/diagramas.js` — violão e mão. O violão é desenhado **em escala real**
  (1 mm = 0,9 unidade): escala 650 mm, corpo 487, bojos 278/243/368, pestana 52,
  boca 87. Trastes pela fórmula `1 - 2^(-n/12)`. A mão usa medidas antropométricas.
  `silhuetaViolao` é compartilhada com o diagrama de postura — mexeu nela, confira a postura.
- `js/nativo.js` — ponte com o Capacitor. `nativo()`, `plugin(nome)`,
  `salvarNoCelular`, `compartilharArquivo`, `Lembretes`.
- `js/icones.js` — ícones Tabler embutidos + aviso de licença.
- `sw.js` — **gerado**. Nunca edite à mão.

## Antes de dar qualquer coisa por pronta

```sh
node scripts/validar-curso.mjs      # 167 aulas, 0 erros
node scripts/conferir-contraste.mjs # WCAG nos dois temas
node scripts/gerar-sw.mjs           # regenera sw.js, js/versao.js, versao.json
```

Os três rodam no workflow `conferir.yml`. **Rode `gerar-sw.mjs` sempre que mudar
qualquer arquivo do app**, senão o celular continua servindo o cache velho.

Para ver na tela: `python3 -m http.server 8765` e abrir `localhost:8765`. Playwright
(Chromium) está disponível para conferir as telas de verdade — conferir a 360 px e
nos dois temas (`data-tema="claro"` / `"escuro"`) pega quase todo problema visual.

## APK

- Workflow `.github/workflows/apk.yml`, publica em Releases na tag `apk-latest`.
- **`gh workflow run` não funciona** (GraphQL bloqueado). Use:
  `gh api -X POST repos/raafaelr/llmusic/actions/workflows/apk.yml/dispatches -f ref=main`
- Chave fixa em `chaves/debug.keystore` (senha `android`, alias `androiddebugkey`).
  O digest esperado do certificado é `6632f26e88bfd67e7d5d81cb0e2b317d371484d77492aab1f198b575259b594e`.
  Ela está no repositório de propósito, para o CI assinar sempre igual e a atualização
  instalar por cima. É uma troca consciente: qualquer pessoa pode assinar um APK com
  essa chave. Não "corrija" isso sem combinar antes.
- O `ajustar-android.sh` injeta a `signingConfig` no `build.gradle`. Copiar a chave
  para `~/.android/` **não** basta.
- `.gitignore` tem `/android/` com barra na frente — sem ela, `icons/android/` some.
- Depois de mudar o app, **gere o APK de novo**.

## Armadilhas já conhecidas (não repetir)

- O WebView do Android **não baixa arquivo** por `<a download>`: o clique é engolido
  sem erro. Quem grava é o plugin Filesystem. Foi assim que o backup "salvava" nada.
- O WebView **não tem `speechSynthesis`**. O leitor de aulas usa o plugin TTS no APK
  e a Web Speech API no navegador (`js/leitor.js`, dois motores).
- `cancel()` do `speechSynthesis` dispara `onend`. Há um contador de geração para
  ignorar o evento atrasado.
- Item de grid tem `min-width: auto` por padrão: foi isso que fez o braço empurrar a
  página inteira para o lado.
- Aviso silencioso no CI é perigoso. Os passos de assinatura e de ícones **falham**
  de propósito em vez de só avisar.

## Ícones

Tabler é a biblioteca principal (24×24, traço 2). Phosphor só quando representar
melhor um conceito musical e o Tabler não tiver equivalente. Diapasão, acordes,
tablatura, braço e notação são SVG próprio — mas procure nas bibliotecas antes de
desenhar.
