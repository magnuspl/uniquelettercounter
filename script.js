/*function getJSON() {
  document.getElementById("myList").innerHTML = "";
  let url = document.getElementById('textbox_id').value
  $.ajax({
    type: "GET",
    url: url,
    dataType: 'json',
    success: function(response){
        countLetters(response)
    }
  });
}

function countLetters(response) {
  var histogram = {};
  var html = JSON.stringify(response)
  getFrequency(html)
  console.log(getFrequency(html))
  for (var i = 0, len = html.length; i < len; i++) {
      var letter = html[i];
      for (var key in letter) {
        if (letter.hasOwnProperty(key)) {
          console.log(letter[key]);
        }
      }
      histogram[letter] = (histogram[letter] || 0) + 1;
      var node = document.createElement("LI");
      var textnode = document.createTextNode((histogram[letter] || 0) + 1);
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
  }
} */

function countUnqiueStringLetters() {
  let input = document.getElementById('textbox_string').value
  var lowercaseString = input.toLowerCase();
  var charList = lowercaseString.split('');
  var uniqueLetters = charList.length;
  for (i = 0; i < charList.length; i++) {
    if(i != lowercaseString.indexOf(charList[i])) {
      uniqueLetters--;
    }
  }
  var div = document.getElementById("result");
  div.textContent = uniqueLetters + " unique letters";
}
