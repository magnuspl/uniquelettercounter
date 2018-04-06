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
  // get input value
  let input = document.getElementById('textbox_string').value
  // turn all charachters into lowercase
  var lowercaseString = input.toLowerCase();
  // replace speciel characters with ""
  var removeSpecial = lowercaseString.replace(/[&\/\\#,+()$~%.'"”:*?<>{}]/g, '');
  // remove whitespace from string
  var trimmed = removeSpecial.trim();
  // split words in string into an array
  var charList = trimmed.split(' ');
  // call findUniques function to remove duplicate words
  var uniqueCount = findUniques(charList)
  // count amount of elements in the array
  var uniqueWords = uniqueCount.length;
  // find result div in html doc
  var div = document.getElementById("result");
  // replace text in div with word count
  if(document.getElementById('textbox_string').value.trim() == "") {
    div.textContent = "Count = " + 0;
  }
  else {
    div.textContent = "Count = " + uniqueWords;
  }

  // empty div when making a new count
  document.getElementById('textbox_string').value = "";
}

function findUniques(array){
  // create empty list to contain distinct elements
  let uniqueList = []
  // iterate through arr
  array.forEach(i => {
    // check if uniqueList does not contain i.
    if(!uniqueList.includes(i)){
      // if yes, push to uniques
      uniqueList.push(i)
    }
  })
  return uniqueList
}
