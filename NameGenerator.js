var vowels = ["a", "e", "i", "o", "u", "y"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "y", "z"];

function PickRandomWord(frm) {
  var m = "";
  var x = 0;
  m += "";
  while (x < random(4, 9)) {
     if (odd(x) == 1) {
       m += vowels[random(0, vowels.length-1)];
     } else {
       m += consonants[random(0, vowels.length-1)];
     }
     x ++;
  }

// Display the word inside the text box
frm.WordBox.value = m;

}
