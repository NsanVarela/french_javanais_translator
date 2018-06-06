/******************************************************
 * Préparation à l'entretien Pôle Emploi (12/06/2018)
 * 
 * By Nicolas Sanches Varela
 * (06/06/2018)
 * 
 * Sujet : Transformer une phrase française en javanais et inversement.
 *         Il n’est pas nécessaire de développer une interface graphique.
******************************************************/


/* 
 * FRANCAIS VERS JAVANAIS
 * var regex1 : on définit notre regex
 * str.replace : on remplace les expressions verifiées pour appliquer le paramère de notre fonction match
*/
var stringATraduire = prompt('Saisissez une phrase en français pour obtenir la traduction en javanais :');

function francaisVersJavanais() {
        var regex1 = /^[aeiouy\u00C0-\u017F]|[bcdfghjklmnpqrstvwxz\u00C0-\u017F][aeiouy\u00C0-\u017F]/gi; 
        for (var i=0; i < stringATraduire.length; i++) {
                return stringATraduire.replace(regex1, function (match) {
                        return match.length > 1 ? match.split('').join('av') : 'av' + match
                        });
                
        }
}
alert(francaisVersJavanais(stringATraduire));


/* 
 * JAVANAIS VERS FRANCAIS
 * var regex2 : on définit notre regex
 * indexOf() : on recherche la postion de "av" dans la string
 * Si elle est trouvée, on remplace la sous chaine vérifié par notre deuxième param 
*/
var stringATraduire = prompt('Saisissez une phrase en javanais pour obtenir la traduction en français :');

function javanaisVersFrancais(){
        var regex2 = /^av[aeiou\u00C0-\u017F]|[bcdfghjklmnpqrstvwxz\u00C0-\u017F]av[aeiouy\u00C0-\u017F]/gi;
                if (stringATraduire.indexOf("av") == -1) {
                        alert("Est-ce bien du javanais ?");
                } else {
                        return stringATraduire.replace(regex2, function (match) {
                                return match.replace('av', '');
                                });
                }
}
alert(javanaisVersFrancais(stringATraduire));