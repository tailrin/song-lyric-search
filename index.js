'use strict';

function getLyrics(artist, title) {
  const url = `https://api.lyrics.ovh/v1/${encodeURI(artist)}/${encodeURI(title)}`;
  console.log(url);
  fetch(url).then(response => response.json()).then(responseJson => {
    displayResults(responseJson);
  }).catch(err => console.log(err));
}

function displayResults(responseJson) {
  $('#results').html(responseJson.lyrics.replace(/\n/g, "<br>"));
  $('#results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event =>{
    getLyrics($('#artist').val(), $('#title').val());
  });
}

$(watchForm);

