# Auditoria do LLMusic

Conferência item a item dos dois pedidos — identidade visual e práticas de
UI/UX — contra o que existe no código hoje.

**Data:** 9 de novembro de 2026 · **Commit:** `d7e7ed0`

**86 itens auditados:** 67 implementados e validados (77%), 7 implementados
sem teste que os cubra (8%), 3 implementados em parte (3%), 7 não
implementados (8%) e 2 não aplicáveis (2%).

## Como ler os estados

| Estado | Significa |
| --- | --- |
| **Implementado e validado** | Existe e foi conferido por teste automatizado ou medição. |
| **Implementado, não validado** | Existe e funciona no navegador, mas não há teste que o cubra, ou não foi usado em aparelho real. |
| **Implementado parcialmente** | Parte do item existe; o que falta está dito. |
| **Não implementado** | Não existe. |
| **Não aplicável** | O item não cabe neste app, pelo motivo dito. |
| **Bloqueado** | Depende de algo que não está ao alcance daqui. |

Uma ressalva que vale para a auditoria inteira: **nada foi testado em
aparelho Android real.** Tudo o que está marcado como validado foi validado
em Chromium no computador. O WebView do Android pode divergir.

## Identidade visual

| Item | Estado | Observação |
| --- | --- | --- |
| Paleta exata das nove cores | Implementado e validado | Tokens em `css/style.css`; contraste medido por `scripts/conferir-contraste.mjs`. |
| Cormorant Garamond nos títulos | Implementado e validado | Empacotada como woff2 no repositório, funciona offline. |
| Inter na interface | Implementado e validado | Idem. |
| Bravura para notação | Não aplicável | A notação é desenhada em SVG pelo próprio app, a partir de dados — não há texto musical a ser tipografado. Uma fonte de notação não teria o que fazer. |
| Tema claro "Conservatório Clássico" | Implementado e validado | Conferido nas 30 rotas. |
| Tema escuro "Concerto Noturno" | Implementado e validado | Paleta própria, não é inversão do claro. |
| Troca de tema sem recarregar | Implementado e validado | Atributo no `<html>`; preferência anterior preservada. |
| Sistema de tokens centralizado | Implementado e validado | Cor, espaçamento, raio, tipografia e transição, todos em `:root`. |
| Área de personalização | Implementado e validado | Tema, tamanho de letra e redução de animações, em Configurações. Toda opção muda algo de verdade. |
| Linhas de pauta como elemento gráfico | Implementado e validado | `.pauta-divisor` e `grafismos.pautaDivisor()`. |
| Símbolos musicais discretos | Implementado e validado | Clave marcando cada área da tela inicial. |
| Geometria modernista | Implementado e validado | A roseta do violão, em círculos concêntricos e raios. |
| Ilustrações minimalistas de violão | Implementado e validado | Silhueta usada em telas vazias. |
| Textura de papel | Implementado e validado | Ruído em SVG no tema claro, no corpo e nas figuras emolduradas. |
| Textura de madeira | Implementado parcialmente | Existe o token `--vl-madeira` e ele é usado em estados e selos, mas não há textura de madeira desenhada. |
| Molduras finas | Implementado e validado | Toda figura de aula é emoldurada. |
| Divisores elegantes | Implementado e validado | Pauta e filete. |
| Detalhes em dourado, com parcimônia | Implementado e validado | Filete nas notações, marcas de seção, estados de revisão. |
| Ilustrações botânicas discretas | Implementado e validado | O ramo no rodapé da tela inicial. |
| Sem bandeiras nem excesso patriótico | Implementado e validado | Nenhum verde-e-amarelo chapado; a referência é botânica e geométrica. |
| Villa-Lobos como referência artística, não reprodução | Implementado e validado | Nenhum material histórico reproduzido, nenhuma identidade oficial do compositor simulada. |
| Todas as telas reformuladas | Implementado e validado | 30 rotas conferidas nos dois temas, em retrato e paisagem. |
| Funcionalidades, dados e rotas preservados | Implementado e validado | Persistência conferida depois de recarregar. |

## Navegação e estrutura

| Item | Estado | Observação |
| --- | --- | --- |
| Cinco áreas (Início, Aprendizado, Estúdio, Biblioteca, Evolução) | Implementado e validado | No menu e na tela inicial, sem duplicar telas. |
| Modo Estudo | Implementado e validado | Dez checagens automatizadas. |
| Esconder menus no Modo Estudo | Implementado e validado | |
| Partitura ampliada em tela cheia | Implementado e validado | Tela cheia quando o navegador permite; o modo funciona sem ela. |
| Metrônomo acessível no Modo Estudo | Implementado e validado | Na barra fixa, com BPM. |
| Avançar e voltar conteúdo | Implementado e validado | Na ordem do currículo. |
| Cronômetro opcional | Implementado e validado | Conta como prática real. |
| Entrada e saída simples e visíveis | Implementado e validado | Botão flutuante e botão Sair; `Esc` também sai. |
| Modo estante, com controles grandes | Implementado e validado | Em paisagem. |

## Partituras

| Item | Estado | Observação |
| --- | --- | --- |
| Navegação por compasso | Implementado e validado | |
| Destaque do compasso atual | Implementado e validado | |
| Cursor de reprodução | Implementado e validado | |
| Partitura e tablatura juntas | Implementado e validado | |
| Repetição de trecho | Implementado e validado | Um compasso ou um intervalo, com contador de voltas. |
| Marcação de passagens difíceis | Implementado e validado | Guardadas por peça; conferida a persistência. |
| Loop de compasso no reprodutor | Implementado e validado | É a mesma função acima. |
| Controle de velocidade | Implementado, não validado | Existe o fator de velocidade; não há teste cobrindo. |
| Velocidade sem alterar a afinação | Não aplicável | O som é sintetizado nota a nota, não é áudio gravado: mudar a velocidade não desafina. |
| Zoom na partitura | Não implementado | Dá para aumentar a letra do app inteiro em Configurações, mas não há zoom só da partitura. |
| Explicação dos símbolos | Implementado parcialmente | Os símbolos são explicados nas aulas e na Biblioteca de Materiais, mas não se pode tocar num símbolo da partitura para ver o que é. |
| Anotações pessoais na partitura | Não implementado | |
| Clicar numa nota e ver a posição no braço | Não implementado | O braço existe e é reutilizável; falta ligar os dois. |
| Dedilhado da mão direita | Implementado parcialmente | As aulas indicam dedilhado; as peças guardam corda e casa, não o dedo. |
| Volume do reprodutor | Não implementado | Usa-se o volume do aparelho. |

## Ferramentas musicais

| Item | Estado | Observação |
| --- | --- | --- |
| Metrônomo: BPM, compasso, subdivisão, acento | Implementado e validado | Agendado no relógio do Web Audio, não no `setTimeout`. |
| Metrônomo: contagem de entrada | Implementado, não validado | |
| Metrônomo: volume e iniciar/pausar | Implementado, não validado | |
| Afinador por microfone | Implementado, não validado | Algoritmo YIN; não há como validar a precisão sem instrumento real. |
| Identificação de nota, frequência e desvio | Implementado, não validado | Desvio em cents. |
| Referência de Lá ajustável | Implementado, não validado | |
| Diapasão virtual | Implementado, não validado | O afinador toca a nota de referência de cada corda. |
| Explicação clara da permissão de microfone | Implementado e validado | |
| Braço interativo como ferramenta central | Implementado e validado | Reutilizado dentro das aulas de teoria. |

## Progresso e avaliação

| Item | Estado | Observação |
| --- | --- | --- |
| Estrutura padronizada de aula | Implementado e validado | Validador confere blocos mínimos e quiz em todas as 167. |
| Indicadores de progresso por aula | Implementado e validado | |
| Estados: vista, exercitada, aprovada, dominada | Implementado e validado | |
| Retomar exatamente onde parou | Implementado e validado | Tela inicial calcula a próxima aula. |
| Salvamento automático | Implementado e validado | Conferido depois de recarregar. |
| Acompanhamento por habilidade | Implementado e validado | 17 habilidades, cinco estados, limiares conferidos por amostragem. |
| Repetição espaçada para revisão | Implementado e validado | 2, 6 e 21 dias conforme o estado. |
| Avaliação de execução manual | Implementado e validado | Quatro graus com peso; "só devagar" em tudo dá 35% e não aprova. |
| Nunca inventar dados de desempenho | Implementado e validado | Cada ficha de habilidade diz se o estado foi medido ou autoavaliado. |
| Nunca apresentar como medição o que não foi medido | Implementado e validado | O app declara em tela que não escuta o aluno tocar. |

## Gamificação pedagógica

| Item | Estado | Observação |
| --- | --- | --- |
| Metas semanais | Implementado e validado | No Plano de Estudos. |
| Sequência de dias | Implementado e validado | Em Hábitos. |
| Conquistas por habilidade | Não implementado | |
| Marcos de repertório | Não implementado | |
| Certificados por nível | Não implementado | As provas de nível existem e guardam o resultado; não há certificado. |
| Sem ranking público nem rede social | Implementado e validado | Não existe nenhum recurso social no app. |

## Acessibilidade e responsividade

| Item | Estado | Observação |
| --- | --- | --- |
| Contraste adequado nos dois temas | Implementado e validado | 26 pares medidos pela fórmula da WCAG 2.1; conferido no CI. |
| Foco visível | Implementado e validado | |
| Navegação por teclado | Implementado e validado | 29 elementos alcançados na tela inicial, sem perder o foco. |
| Pular para o conteúdo | Implementado e validado | Primeiro Tab da página. |
| Alvos de toque de 44px | Implementado e validado | Nenhum abaixo disso. |
| Celular, tablet e computador | Implementado e validado | Sem rolagem lateral em 360, 768 e 1440. |
| Respeitar movimento reduzido | Implementado e validado | Do sistema e por opção própria. |
| Três tamanhos de letra | Implementado e validado | Escala a interface inteira. |

## Dados e privacidade

| Item | Estado | Observação |
| --- | --- | --- |
| Armazenamento local | Implementado e validado | IndexedDB, cinco gavetas. |
| Histórico, anotações e preferências preservados | Implementado e validado | |
| Sem dependência externa | Implementado e validado | A única chamada de rede é a busca por atualização, e ela é opcional. |
| Sem compartilhamento público | Implementado e validado | |
| Backup e restauração | Implementado e validado | Ciclo completo conferido: exportar, conferir o arquivo, restaurar num app zerado. |
| Atualizar sem perder progresso | Implementado e validado | Chave de assinatura fixa; o build falha se a assinatura mudar. |

## Fora de escopo, por decisão

Estes itens não existem porque o app é de um usuário só, e isso foi pedido
explicitamente: múltiplos alunos, gestão de turmas, painel de professor,
assinaturas, pagamentos, planos comerciais, compartilhamento entre usuários,
recursos corporativos e infraestrutura de escala.

## O que falta, em ordem de valor

1. **Clicar numa nota e ver a posição dela no braço.** O braço já existe e já
   é reutilizável; é ligar os dois.
2. **Anotações pessoais na partitura.** Combina com os trechos difíceis, que
   já são guardados por peça.
3. **Conquistas e certificados por nível.** As provas já guardam resultado.
4. **Zoom e volume na tela de partituras.**
5. **Dedilhado da mão direita nos dados das peças.**
6. **Explicação de símbolo ao tocar nele na partitura.**

## O que nunca vai existir, e por quê

**Avaliação de execução por áudio.** Julgar ritmo, limpeza e musicalidade a
partir do som exigiria detecção polifônica confiável, que é um dos problemas
difíceis de processamento de sinais. Um algoritmo imperfeito daria notas
erradas com cara de medição — pior do que não ter nada. O microfone fica no
afinador, que resolve um problema bem definido: a altura de uma nota isolada.
