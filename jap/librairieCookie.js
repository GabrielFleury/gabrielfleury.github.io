/*
*  ecrireCookie()
*                 fonction pour écrire un cookie sur l'ordinateur du client
*  @return: null;
*  @parameter:  pNom         ,le nom du cookie 
*  @parameter:  pValeur      ,la valeur de ce cookie
*  @parameter:  pJours       ,le nombre de jours que sera sauvegardé ce cookie
*/
function ecrireCookie(pNom, pValeur, pJours) {
  // Par défaut, le cookie est temporaire, sans date d’expiration
  var expires = "";

  // Spécifie le nombre de jours que le cookie persistera
  if (pJours) {
    var date = new Date();
    date.setTime(date.getTime() + (pJours * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }

  // Crée le cookie avec le nom, sa valeur et la date d’expiration
  document.cookie = pNom + "=" + pValeur + expires + "; path=/";
}
/*
*  lireCookie()
*              fonction pour lire un cookie sur l'ordinateur du client
*  @return: null;
*  @prameter: pNom,  le nom du cookie 
*/
function lireCookie(pNom) {
  // Trouve le cookie demandé et retour sa valeur
  var searchpNom = pNom + "=";
  var cookies = document.cookie.split(';');
  for(var i=0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == ' ')
      c = c.substring(1, c.length);
    if (c.indexOf(searchpNom) == 0)
      return c.substring(searchpNom.length, c.length);
  }
  return null;
}
/*
*  effacerCookie()
*              fonction pour effacer un cookie sur l'ordinateur du client avant sa date d'expliration
*  @return: null;
*  @prameter: pNom,  le nom du cookie 
*/
function effacerCookie(pNom) {
  // Efface le cookie en écrivant un nouveau au même nom, 
  // sans valeur et en demande une date d’expiration dans le passé
  ecrireCookie(pNom, "", -1);
}
