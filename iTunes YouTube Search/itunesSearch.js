function searchText(){
    var text = document.getElementById("search-keyword").value;
    if (text.search(" ") > 0){
        var textSplit = text.split(" ");
        for(var i = 0; i < textSplit.length - 1; i++){
            textSplit[i] = textSplit[i] + "+";
        }
        text = textSplit.toString().replace(/,+/g, "");
    }
    return text;
    // var search = "https://itunes.apple.com/search?term=" + text;
    // var searchAPI = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?term=" + text;
    // document.getElementById("itunes-results").innerHTML = searchAPI;
}


// function urlEncode(obj) {
//     var s = '';
//     for (var key in obj) {
//         s += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]) + '&';
//     }
//     if (s.length > 0) {
//         s = s.substr(0, s.length - 1);
//     }

//     return (s);
// }

function itunesSearch() {
    var params = {
        term: searchText(),
        country: 'US',
        media: 'music',
        entity: 'musicTrack',
        //attribute: 'artistTerm,albumTerm,songTerm,musicTrackTerm',
        limit: 20,
        callback: 'handleTunesSearchResults'
    };
    // params = urlEncode(params);

    $.ajax({
    method: "GET",
    url: "https://itunes.apple.com/search?",
    dataType: "jsonp",
    data: params,
    // success: handleTunesSearchResults(data)
    });

    // var url = 'https://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?' + params;
    // var html = '<script src="' + url + '"><\/script>';
    // jQuery('head').append(html);
}

function handleTunesSearchResults(arg) {
    var results = arg.results;
    var html = '';
    var html01 = '';
    var html02 = '';
    for (var i = 0; i < results.length; i++) {
        var item = results[i];
        var obj = {
            source: 0,
            track_id: item.trackId,
            preview_url: item.previewUrl,
            track_name: item.trackCensoredName,
            track_url: item.trackViewUrl,
            artist_name: item.artistName,
            artist_url: item.artistViewUrl,
            collection_name: item.collectionCensoredName,
            collection_url: item.collectionViewUrl,
            genre: item.primaryGenreName
        };
        results[i] = obj;

        html += '<div class="songs-search-result">';

        html += '<span class="label">Track:</span>{0}&nbsp;&nbsp;'.replace("{0}", obj.track_name);
        html += '<a href="{0}" target="_blank">Preview</a>&nbsp;&nbsp;'.replace("{0}", obj.preview_url);
        html += '<a href="{0}" target="_blank">Full Song</a>&nbsp;&nbsp;<br />'.replace("{0}", obj.track_url);
        // html += '<span class="label">Track Price:</span>{0} {1}<br />'.replace("{0}", item.trackPrice).replace("{1}", item.currency);
        html += '<span class="label">Artist:</span><a href="{0}" target="_blank">{1}</a><br />'.replace("{0}", obj.artist_url).replace("{1}", obj.artist_name);
        html += '<span class="label">Album:</span><a href="{0}" target="_blank">{1}</a><br />'.replace("{0}", obj.collection_url).replace("{1}", obj.collection_name);
        // html += '<span class="label">Collection Price:</span>{0} {1}<br />'.replace("{0}", item.collectionPrice).replace("{1}", item.currency);
        html += '<span class="label">Genre:</span>{0}<br />'.replace("{0}", obj.genre);

        html += '</div>';

        if (i < 5){html01 += html; html = '';}
        if (i >= 5 && i < 10){html02 += html; html = '';}
        if (i >= 10 && i < 15){html03 += html; html = '';}
        if (i >= 15 && i < 20){html04 += html; html = '';}
        if (i >= 20 && i < 25){html05 += html; html = '';}
        if (i >= 25 && i < 30){html06 += html; html = '';}
        if (i >= 30 && i < 35){html07 += html; html = '';}
        if (i >= 35 && i < 40){html08 += html; html = '';}
        if (i >= 40 && i < 45){html09 += html; html = '';}
        if (i >= 45 && i < 50){html10 += html; html = '';}
        if (i >= 50 && i < 55){html11 += html; html = '';}
        if (i >= 55 && i < 60){html11 += html; html = '';}
    }
    jQuery('#itunes-results01').html(html01);
    jQuery('#itunes-results02').html(html02);
    jQuery('#itunes-results03').html(html03);
    jQuery('#itunes-results04').html(html04);
    jQuery('#itunes-results05').html(html05);
    jQuery('#itunes-results06').html(html06);
    jQuery('#itunes-results07').html(html07);
    jQuery('#itunes-results08').html(html08);
    jQuery('#itunes-results09').html(html09);
    jQuery('#itunes-results10').html(html10);
    jQuery('#itunes-results11').html(html11);
    jQuery('#itunes-results12').html(html12);
}
function changePage(page){
    document.getElementById('page-button01').style.display = "none";
    document.getElementById('page-button02').style.display = "none";
    document.getElementById('page-button03').style.display = "none";
    document.getElementById('page-button04').style.display = "none";
    document.getElementById('page-button05').style.display = "none";
    document.getElementById('page-button06').style.display = "none";
    document.getElementById('page-button07').style.display = "none";
    document.getElementById('page-button08').style.display = "none";
    document.getElementById('page-button09').style.display = "none";
    document.getElementById('page-button10').style.display = "none";
    document.getElementById('page-button11').style.display = "none";
    document.getElementById('page-button12').style.display = "none";
    if (page == "page-button01"){document.getElementById(page).style.display = "block";}
}

function youtubeSearch(){
    var params = {
        term: searchText(),
        country: 'US',
        media: 'music',
        entity: 'musicTrack',
        limit: 20,
        callback: 'handleTunesSearchResults'
    };

    $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    dataType: "jsonp",
    data: params,
    });
}

function getFirstVideo(){
    function onClientLoad() {
gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
gapi.client.setApiKey('[yourAPIKEY]');

search('[whacktus');
}

function search(query) {
var request = gapi.client.youtube.search.list({
part: 'id',
q: query
});

request.execute(function (response) {

/* sort through the list until a video comes up, then set the URL link */

var link = "";
i = 0;
while (link == "") {
if (response.items[i].id.videoId)
{ link = "http://www.youtube.com/embed/" + response.items[i].id.videoId + "?HD=1;rel=0;showinfo=0"; }
i++;
}

var video = $("#iVideo");
video.attr('src', link);
});

}
}