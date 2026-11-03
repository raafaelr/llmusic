// Conteúdo das lições de teoria (texto original do LLMusic).
// "demo": o que acender no braço; "exercicio": o que pedir pelo microfone.
export const LICOES = [
  {
    id: 'notas', titulo: 'As 12 notas e os semitons', demo: 'nota', exercicio: 'Toque a nota (em qualquer corda e oitava)',
    texto: [
      'A música ocidental usa 12 notas que se repetem: Dó, Dó#, Ré, Ré#, Mi, Fá, Fá#, Sol, Sol#, Lá, Lá#, Si. Depois do Si, volta ao Dó, uma oitava acima.',
      'A menor distância entre duas notas é o semitom. No violão, um semitom é uma casa. Dois semitons formam um tom (duas casas).',
      'Entre Mi e Fá e entre Si e Dó existe só um semitom: não há sustenido no meio. Entre as outras notas naturais, a distância é de um tom, e o sustenido fica no meio.',
      'Sustenido (#) sobe um semitom. Bemol (♭) desce um semitom. Dó# e Ré♭ são a mesma nota, com nomes diferentes.'
    ]
  },
  {
    id: 'escala', titulo: 'A escala maior', demo: 'escala', exercicio: 'Toque a escala, nota por nota (qualquer oitava)',
    texto: [
      'Uma escala é uma sequência de 7 notas dentro de uma oitava. A escala maior é a base da música ocidental. Em Dó maior: Dó Ré Mi Fá Sol Lá Si.',
      'Ela segue sempre o mesmo padrão de distâncias: Tom, Tom, Semitom, Tom, Tom, Tom, Semitom (T T S T T T S). Comece em qualquer nota e siga o padrão: você terá a escala maior daquela nota.',
      'Cada nota tem um número, o grau (1 a 7). O grau 1 é a tônica, a nota que dá nome à escala.',
      'Escolha a tonalidade abaixo e veja, no braço, onde estão as notas da escala. R marca a tônica e os números são os graus.'
    ]
  },
  {
    id: 'intervalos', titulo: 'Intervalos', demo: 'escala', exercicio: 'Toque a tônica, a 3ª e a 5ª (arpejo)',
    tabela: true,
    texto: [
      'Intervalo é a distância entre duas notas. Contamos pelos graus da escala: de Dó a Mi é uma 3ª; de Dó a Sol, uma 5ª.',
      '4ª, 5ª e oitava são intervalos "justos". 2ª, 3ª, 6ª e 7ª podem ser maiores ou menores: o menor tem um semitom a menos que o maior.',
      'A tabela mostra quantos semitons (casas) tem cada intervalo. Decorar 3ª maior = 4, 5ª justa = 7 e 3ª menor = 3 já resolve a maior parte da teoria de acordes.'
    ]
  },
  {
    id: 'acordes', titulo: 'Acordes maiores e menores', demo: 'triade', variantes: true, exercicio: 'Toque o acorde em arpejo: tônica, 3ª e 5ª',
    texto: [
      'Acorde é um conjunto de notas tocadas juntas. O mais simples é a tríade: tônica (1), terça (3) e quinta (5).',
      'Acorde maior: tônica + 3ª maior (4 semitons) + 5ª justa (7 semitons). Dó maior: Dó Mi Sol.',
      'Acorde menor: tônica + 3ª menor (3 semitons) + 5ª justa. Dó menor: Dó Mi♭ Sol. A única diferença é a terça, um semitom mais baixa, e é ela que dá o som mais "triste".',
      'Na cifra, C é Dó maior e Cm é Dó menor. Use o botão Maior/Menor abaixo para ver a diferença no braço.'
    ]
  },
  {
    id: 'campo', titulo: 'Campo harmônico', demo: 'campo',
    texto: [
      'Se você montar uma tríade sobre cada nota da escala maior, usando só as notas da escala, ganha os 7 acordes do campo harmônico.',
      'A qualidade segue sempre o mesmo padrão: I maior, ii menor, iii menor, IV maior, V maior, vi menor e vii° diminuto.',
      'Os mais usados são I, IV, V e vi. A sequência I–V–vi–IV (em Dó: C G Am F) aparece em muitas músicas.',
      'Escolha a tonalidade para ver os acordes do campo.'
    ]
  },
  {
    id: 'caged', titulo: 'CAGED: a ideia', demo: 'nenhum', irPara: 'caged',
    texto: [
      'No violão, o mesmo acorde pode ser tocado em vários lugares do braço. CAGED são as 5 formas abertas de acorde maior: C, A, G, E e D.',
      'Ao deslizar uma forma para cima e usar pestana, ela vira outro acorde. A forma de A na casa 3 é Dó maior.',
      'As cinco formas se encaixam em sequência e cobrem todo o braço. Em Dó maior, a ordem subindo é C → A → G → E → D, e depois recomeça.',
      'Treine na tela CAGED: veja as formas, faça o quiz e toque cada uma.'
    ]
  }
];
