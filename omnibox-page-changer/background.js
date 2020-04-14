console.log('omnibox extension version 1');

// This listener is called when the user types the keyword ("color")
// and then tab, and then some text. The `text` argument to the listener
// is the text the person wrote.
// The `suggest` argument is a function that can be used to programmatically
// add auto-complete suggestions
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  console.log('the user typed "' + text + '"');

  suggest([
    { content: 'yes', description: 'ok!' }
  ]);
});

chrome.omnibox.onInputEntered.addListener(function(text) {
  console.log('the user entered: "' + text + '"');
  chrome.tabs.executeScript({
    code:
    `
    var images = [
    "https://media.giphy.com/media/l41YgOPSjVe47TTRm/giphy.gif",
    "https://media.giphy.com/media/3o7buctjKD8g5r4544/giphy.gif",
    ];

    var h = document.createElement("H1"); // Create the H1 element
    var t = document.createTextNode("${text}"); // Create a text element
    h.appendChild(t); // Append the text node to the H1 element
    document.body.insertBefore(h, document.body.childNodes[0]);
    h.setAttribute("id", "header");
    document.getElementById("header").style.color = "violet";
    document.getElementById("header").style.padding = "2em";

    var p_tags=document.getElementsByTagName('p');
    for(i=0;i<p_tags.length;i++)
    {
        p_tags[i].setAttribute("style","font-size:"+40+"px");
    }

    for (var i in document.images) {
        var targetImage = document.images[i];
        var randomImage = images[Math.floor(Math.random() * images.length)];
        var height = targetImage.height;
        var width = targetImage.width;

        targetImage.src = randomImage;
        targetImage.height = height;
        targetImage.width = width;
    }

    `

  });
});



//document.getElementById("about").innerHTML = "${text}";
