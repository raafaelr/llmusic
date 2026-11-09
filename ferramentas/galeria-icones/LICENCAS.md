# Licenças das bibliotecas comparadas

Conferido em 9 de novembro de 2026, lendo o `package.json` e o `LICENSE` de
cada pacote baixado do npm — não de documentação na web.

| Biblioteca | Pacote npm | Versão | Licença | Exige crédito? |
| --- | --- | --- | --- | --- |
| Tabler Icons | `@tabler/icons` | 3.51.0 | MIT | não |
| Phosphor Icons | `@phosphor-icons/core` | 2.1.1 | MIT | não |
| Iconoir | `iconoir` | 7.12.2 | MIT | não |
| Vidstack Media Icons | `media-icons` | 0.10.0 | MIT (Rahim Alwer, 2023) | não |
| FontAudio | `@iconify-json/fad` | 1.2.1 | **CC-BY-4.0** | **sim** |

O repositório `vidstack/icons` publica no npm como `media-icons`; `@vidstack/icons`
não existe no registro.

## FontAudio

A embalagem usada declara CC-BY-4.0, que exige crédito visível ao autor onde os
ícones aparecem. Adotá-la obriga a pôr a atribuição numa tela do app. As outras
quatro são MIT e pedem apenas o aviso de copyright no código.

## SVG Repo

Ficou de fora. O site não é alcançável deste ambiente — a rede aqui só chega a
registros de pacotes e ao GitHub — e a coleção "Music Instruments" reúne ícones
de origens diferentes, com licença por ícone e não por coleção. Não dá para
garantir o uso sem conferir um a um na página de cada ícone.

## Nada é carregado em tempo de execução

A galeria tem todos os SVGs embutidos no HTML. Nenhuma biblioteca foi adicionada
ao `package.json` do LLMusic, e esta pasta fica fora da varredura de
`scripts/gerar-sw.mjs` — então nada daqui entra no cache offline nem no APK.
