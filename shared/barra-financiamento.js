/* Barra de cofinanciamento da operação ULSBA (Pessoas 2030 · Portugal 2030 · União Europeia ·
 * República Portuguesa – Saúde · SNS). A publicitação do cofinanciamento é obrigatória em todo o
 * material da operação: este script põe a barra, centrada e pequena, no fundo de cada slide.
 *
 * Uso num deck em `aula-N-M/index.html`, depois do HTML dos slides e antes do Reveal.initialize:
 *   <script src="../shared/barra-financiamento.js"></script>
 *
 * Os slides têm 60px de margem em baixo; a barra ocupa os ~36px de baixo. Elementos posicionados
 * no fundo do slide (referências, notas de rodapé) devem ficar a 44px ou mais.
 *
 * Num slide cujo conteúdo desce até ao fundo, `data-barra="direita"` na <section> encosta a barra
 * à direita em vez de a centrar (ex.: Objetivos do curso, com a lista ao lado da fotografia).
 */
(function () {
  'use strict';
  var css = document.createElement('style');
  css.textContent =
    '.reveal .barra-fin{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);' +
    'height:26px;width:auto;max-width:none;margin:0;padding:3px 10px;background:#fff;' +
    'border-radius:2px;box-shadow:none;border:0}' +
    '.reveal section[data-barra="direita"] .barra-fin{left:auto;right:10px;transform:none}';
  document.head.appendChild(css);

  var src = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '') + 'ulsba-sup.png';
  document.querySelectorAll('.reveal .slides section').forEach(function (sec) {
    if (sec.querySelector('section')) return;   // pilha vertical: a barra vai nos filhos
    var img = document.createElement('img');
    img.className = 'barra-fin';
    img.src = src;
    img.alt = 'Pessoas 2030 · Portugal 2030 · Cofinanciado pela União Europeia · República Portuguesa – Saúde · SNS';
    sec.appendChild(img);
  });
})();
