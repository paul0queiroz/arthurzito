(function () {
  // Defina a URL de destino quando o usuário clicar em "voltar"
  var redirectUrl = "/oferta.html";

  // Adiciona um estado falso no histórico
  history.pushState(null, null, location.href);

  // Detecta quando o usuário clica no botão voltar
  window.onpopstate = function () {
    history.pushState(null, null, location.href);
    window.location.href = redirectUrl;
  };
})();
