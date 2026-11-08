// NÍVEL 1 — Fundamentos do violão
// Reúne os quatro módulos. O conteúdo de cada um fica no seu próprio arquivo,
// dentro da pasta n1/, para nenhum arquivo ficar grande demais.
import { M11 } from './n1/m11.js';
import { M12 } from './n1/m12.js';
import { M13 } from './n1/m13.js';
import { M14 } from './n1/m14.js';

export const NIVEL = {
  n: 1,
  titulo: 'Fundamentos do violão',
  subtitulo: 'Do zero ao primeiro som e à primeira melodia',
  objetivo: 'Conhecer o instrumento, sentar e segurar o violão sem tensão, entender os primeiros símbolos da música e tocar as primeiras melodias.',
  criterio: 'Você conclui o Nível 1 quando afina o violão sozinho, reconhece as cordas e os dedos, lê as notas da primeira posição, entende figuras e compassos e toca uma melodia simples no tempo.',
  modulos: [M11, M12, M13, M14]
};
