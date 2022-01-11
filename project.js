function getApi() {
    console.log('getApi est lancée');
    $.ajax({
        url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=spider-man&api-key=i3jDjs39SaK9GfHKA72J6C3RcpRqZbcD",
        method: "GET",
        dataType: "json",
    })
    
    .done(function(response){
        let data = response.results[0].summary_short;
        let para = $('<p>');
        para.attr('id', 'par');
        $("#photo").append(para);
        $("#par").append(data);
        console.log(data);
    })
    
    .fail(function(error){
        console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    .always(function(){
        console.log("Requête effectuée");
    })
}