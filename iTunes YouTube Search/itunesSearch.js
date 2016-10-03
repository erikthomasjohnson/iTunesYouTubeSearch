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
}
function itunesSearch(){
    youtubeSearch();
    var params = {
        term: searchText(),
        country: 'US',
        media: 'music',
        entity: 'musicTrack',
        limit: 60,
    };
    $.ajax({
    method: "GET",
    url: "https://itunes.apple.com/search?",
    dataType: "jsonp",
    data: params,
    success: function(data){handleItunesResults(data);}
    });
}
function handleItunesResults(data) {
    var results = data.results;
    var html = '';
    var html01 = '';
    var html02 = '';
    var html03 = '';
    var html04 = '';
    var html05 = '';
    var html06 = '';
    var html07 = '';
    var html08 = '';
    var html09 = '';
    var html10 = '';
    var html11 = '';
    var html12 = '';
    var youtubeQuery = [];
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
            genre: item.primaryGenreName,
            track_img: item.artworkUrl100
        };
        results[i] = obj;
        youtubeQuery[i] = (obj.track_name + "+" + obj.artist_name).replace(/\s+/g, "_");
        
        var youtube = '';
        html += '<div class="songs-search-result">';
        html += '<img src="{0}"/>'.replace("{0}", obj.track_img);
        html += '<span class="label">Track:</span>{0}&nbsp;&nbsp;'.replace("{0}", obj.track_name);
        html += '<a href="{0}" target="_blank">Preview |</a>&nbsp;'.replace("{0}", obj.preview_url);
        html += '<a href="{0}" target="_blank">Full Song |</a>&nbsp;'.replace("{0}", obj.track_url);
        html += '<a href="{0}" target="_blank" id="youtube' + i + '">YouTube Video</a>&nbsp;&nbsp;<br />'.replace("{0}", youtube);
        html += '<span class="label">Artist:</span><a href="{0}" target="_blank">{1}</a><br />'.replace("{0}", obj.artist_url).replace("{1}", obj.artist_name);
        html += '<span class="label">Album:</span><a href="{0}" target="_blank">{1}</a><br />'.replace("{0}", obj.collection_url).replace("{1}", obj.collection_name);
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
        if (i >= 55 && i < 60){html12 += html; html = '';}
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
    changePage('page01');
    showButtons();
    for (var i = 0; i < youtubeQuery.length - 1; i++){
        getYoutubeLink(youtubeQuery[i], i);
    }
}
function changePage(page){
    document.getElementById('page01').style.display = "none";
    document.getElementById('page02').style.display = "none";
    document.getElementById('page03').style.display = "none";
    document.getElementById('page04').style.display = "none";
    document.getElementById('page05').style.display = "none";
    document.getElementById('page06').style.display = "none";
    document.getElementById('page07').style.display = "none";
    document.getElementById('page08').style.display = "none";
    document.getElementById('page09').style.display = "none";
    document.getElementById('page10').style.display = "none";
    document.getElementById('page11').style.display = "none";
    document.getElementById('page12').style.display = "none";
    if (page == "page01"){document.getElementById(page).style.display = "block";}
    if (page == "page02"){document.getElementById(page).style.display = "block";}
    if (page == "page03"){document.getElementById(page).style.display = "block";}
    if (page == "page04"){document.getElementById(page).style.display = "block";}
    if (page == "page05"){document.getElementById(page).style.display = "block";}
    if (page == "page06"){document.getElementById(page).style.display = "block";}
    if (page == "page07"){document.getElementById(page).style.display = "block";}
    if (page == "page08"){document.getElementById(page).style.display = "block";}
    if (page == "page09"){document.getElementById(page).style.display = "block";}
    if (page == "page10"){document.getElementById(page).style.display = "block";}
    if (page == "page11"){document.getElementById(page).style.display = "block";}
    if (page == "page12"){document.getElementById(page).style.display = "block";}
    }
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
function showButtons(){
    document.getElementById('page-button01').style.display = "block";
    document.getElementById('page-button02').style.display = "block";
    document.getElementById('page-button03').style.display = "block";
    document.getElementById('page-button04').style.display = "block";
    document.getElementById('page-button05').style.display = "block";
    document.getElementById('page-button06').style.display = "block";
    document.getElementById('page-button07').style.display = "block";
    document.getElementById('page-button08').style.display = "block";
    document.getElementById('page-button09').style.display = "block";
    document.getElementById('page-button10').style.display = "block";
    document.getElementById('page-button11').style.display = "block";
    document.getElementById('page-button12').style.display = "block";
}
function getYoutubeLink(search, i){
        $.ajax({
            method: "GET",
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search + "&maxResults=1&type=video&key=AIzaSyA7kReFMQpFIhKKFJA4TCGJ8KhN0yaTdrY",
            dataType: "jsonp",
            success: function(data){
                var test = data;
                if (data.items.length > 0){
                    var track_id = "https://www.youtube.com/watch?v=" + data.items[0].id.videoId;
                    var track_name = data.items[0].snippet.title;
                    $("#youtube" + i)[0].href = track_id;
                }
            },
            error:function(data){console.log(data)}
        });
}
function youtubeSearch(){
    $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchText() + "&maxResults=5&type=video&key=AIzaSyA7kReFMQpFIhKKFJA4TCGJ8KhN0yaTdrY",
    dataType: "jsonp",
    success: function(data){handleYouTubeResults(data)}
    });
}
function handleYouTubeResults(data){
    var results = data.items;
    var html = '';
    for (var i = 0; i < results.length; i++) {
        var item = results[i];
        var obj = {
            source: 0,
            track_id: "https://www.youtube.com/watch?v=" + item.id.videoId,
            track_name: item.snippet.title,
            track_img: item.snippet.thumbnails.default.url
        };
        results[i] = obj;

        html += '<div>';
        html += '<img src="{0}"></img><a href="{1}" target="_blank"></a>'.replace("{0}", obj.track_img).replace("{1}", obj.track_id);
        html += '<span></span>{0}&nbsp;&nbsp;'.replace("{0}", obj.track_name);
        html += '<a href="{0}" target="_blank">Video</a>&nbsp;&nbsp;'.replace("{0}", obj.track_id);
        html += '</div>';
    }
    jQuery('#youtube-results01').html(html);
}