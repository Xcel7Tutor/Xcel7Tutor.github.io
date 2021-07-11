const spinSym = document.querySelector("body header span span");
const quoteBackground = document.getElementById("quote-background");
const quoteText = document.getElementById("quote-text");
const quotes = [
    "Maths may not teach us how to <b>add</b> love or <b>subtract</b> hate but it gives us hope that <b>every problem</b> has a <b>solution</b>",
    "Maths teaches us that there is every reason to believe that every <b>problem</b> has a <b>solution</b>",
    "Maths is not about numbers, equations, or algorithms, it is about <b>understanding</b> - William Paul Thurston",
    "Life is a Maths equation. In order to gain the most, you have to know how to convert <b>negatives</b> into <b>positives</b>",
    "A man is like a fraction whose numerator is what he is, and whose denominator is what he thinks of himself. The larger the denominator the smaller the fraction",
    "Maths if the Music of Reason - James Joseph Sylvester",
    "If you are going to limit your dreams, <br> <span class=\"lim\"><span class=\"lim-element\">lim</span><span class=\"lim-element\">x &rarr; &infin;</span></span> f(x) <br>at least tend them to INFINITY",
    "Go down deep enough into anything and you will find Mathematics - Dean Schlicter",
    "Maths can be related to our lives. It teaches us to always be careful with the signs",
    "Without Maths, there is nothing you can do. Everything around you is Mathematics. Everything around you is numbers - Shakuntala Devi",
    "Deep down inside, we all <b>love</b> Maths",
    "If your attention is <b>divided</b> by <b>added</b> distractions, <b>multiply</b> your mental traction by doing a bit of simple <b>subtraction</b>",
    "<b>M</b>istakes <b>A</b>llow <b>T</b>hinking to <b>H</b>appen",
    "Problems are meant to be <b>simplied</b>, not to be <b>complicated</b>",
    "I was good at Maths before they decided to mix the alphabet into it",
    "Mathematics of Life: Life + Laughter x Love - Hate = Happiness",
    "Arithmetic is being able to count up to twenty without taking off your shoes - Mickey Mouse",
    "One should study Mathematics simply because it helps to arrange one's ideas - M.W. Lomonossow",
    "The difference between a Mathematician and politician, a Mathematician tries to say the most in the least number of words, the politician the opposite",
    "Maths, it's a puzzle to me. I love figuring out puzzles - Maya Lin",
    "Sometimes the questions are <b>complicated</b> and the answers are <b>simple</b> - Dr. Seuss",
    "Millions saw the apple fall, but Newton asked why - Bernard Baruch",
    "Finding a treasure is like working on algebra equations, all you have to do is find the X",
    "A few days ago I lost my weapon of Maths instruction... my trusty pocket calculator",
    "Teachers are really pirates that are using us to find the X",
    "If I had just 1 hour left to live, I'd spend it in Maths class... it never ends",
    "4 out of 3 people struggle with Maths",
    "To the guy who created imaginary numbers in Maths: I hate you",
];
var randomNum = -1
spinSym.onclick = () => {
    var randomNum = Math.floor(Math.random() * quotes.length)
    //randomNum++;
    quoteText.innerHTML = quotes[randomNum]
    // show overlay
    quoteBackground.style.display = 'block';
    quoteText.style.display = 'block';
};

function hideOverlay() {
    quoteBackground.style.display = 'none';
    quoteText.style.display = 'none';
}