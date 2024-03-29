﻿window.onload = () => {
    document.body.classList.remove("preload");
}
// https://stackoverflow.com/questions/14389566/stop-css-transition-from-firing-on-page-load
// chrome bug whyyyyyyyyyyy


const spinSym = document.querySelector("body header span span");
const quoteBackground = document.getElementById("quote-background");
const quoteText = document.getElementById("quote-text");
const quotes = [
    "Maths may not teach us how to <b>add</b> love or <b>subtract</b> hate but it gives us hope that <b>every problem</b> has a <b>solution</b>",
    "Maths teaches us that there is every reason to believe that every <b>problem</b> has a <b>solution</b>",
    "Maths is not about numbers, equations, or algorithms, it is about <b>understanding</b> &mdash; William Paul Thurston",
    "Life is a Maths equation. In order to gain the most, you have to know how to convert <b>negatives</b> into <b>positives</b>",
    "A man is like a fraction whose numerator is what he is, and whose denominator is what he thinks of himself. The larger the denominator the smaller the fraction &mdash; Leo Tolstoy",
    "Maths is the Music of Reason &mdash; James Joseph Sylvester",
    "If you are going to limit your dreams, <br> <span class=\"lim\"><span class=\"lim-element\">lim</span><span class=\"lim-element\">x &rarr; &infin;</span></span> f(x) <br>at least tend them to <b>infinity</b>",
    "Go down deep enough into anything and you will find Mathematics &mdash; Dean Schlicter",
    "Maths can be related to our lives. It teaches us to always be careful with the signs",
    "Without Maths, there is nothing you can do. Everything around you is Mathematics. Everything around you is numbers &mdash; Shakuntala Devi",
    "Deep down inside, we all <b>love</b> Maths",
    "If your attention is <b>divided</b> by <b>added</b> distractions, <b>multiply</b> your mental traction by doing a bit of simple <b>subtraction</b>",
    "<b>M</b>istakes <b>A</b>llow <b>T</b>hinking to <b>H</b>appen",
    "Problems are meant to be <b>simplified</b>, not to be <b>complicated</b>",
    "I was good at Maths before they decided to mix the alphabet into it",
    "Mathematics of Life:  Life + Laughter x Love - Hate = Happiness",
    "Arithmetic is being able to count up to twenty without taking off your shoes &mdash; Mickey Mouse",
    "One should study Mathematics simply because it helps to arrange one's ideas &mdash; M.W. Lomonossow",
    "The difference between a Mathematician and politician, a Mathematician tries to say the most in the least number of words, the politician the opposite",
    "Maths, it's a puzzle to me. I love figuring out puzzles &mdash; Maya Lin",
    "Sometimes the questions are <b>complicated</b> and the answers are <b>simple</b> &mdash; Dr. Seuss",
    "Millions saw the apple fall, but Newton asked why &mdash; Bernard Baruch",
    "Finding a treasure is like working on algebra equations, all you have to do is find the X",
    "A few days ago I lost my weapon of Maths instruction... my trusty pocket calculator",
    "Teachers are really pirates that are using us to find the X",
    "If I had just 1 hour left to live, I'd spend it in Maths class... it never ends",
    "4 out of 3 people struggle with Maths",
    "To the guy who created imaginary numbers in Maths: I hate you!",
    "You know what seems odd to me? Numbers that aren't divisible by two",
    "<b>M</b>ental <b>A</b>buse <b>T</b>o <b>H</b>umans",
    "If people do not believe that Mathematics is simple, it is only because they do not realise how complicated life is &mdash; John Von Neumann",
    "Not everything that counts can be counted. Not everything that can be counted counts &mdash; Albert Einstein",
    "What is Mathematics? It is only a systematic effort of solving puzzles posed by nature &mdash; Shakuntala Devi",
    "Mathematics is the supreme judge; from its decisions there is no appeal &mdash; Tobias Dantzig",
    "Just because we can't find a solution, it doesn't mean there isn't one &mdash; Andrew Wiles",
    "That awkward moment when you finish a Maths problem and your answer isn't even one of the choices &mdash; Ritu Ghatourey",
    "If there is a 50-50 chance that something can go wrong, then 9 times out of 10 it will &mdash; Paul Harvey",
    "For me, Maths class is like watching a foreign movie without subtitles",
    "Are monsters good at Maths? No, unless you Count Dracula!",
    "Mathematics is made of 50 percent formulas, 50 percent proofs, and 50 percent imagination",
    "Women have a passion for Mathematics. They divide their age in half, double the price of their clothes, and always add at least five years to the age of their best friend",
    "As long as Algebra is taught in school, there will be prayer in school",
    "I heard that parallel lines actually meet, but they are very discrete",
    "Dear Maths, please grow up and solve your own problems. I'm tired of solving them for you",
    "Mathematics consists of proving the most obvious thing in the least obvious way &mdash; George Pólya",
    "Decimals have a point",
    "Mathematicians seem to have no difficulty in creating new concepts faster than the old ones become well understood &mdash; Edward Norton Lorenz",
    "Mathematics is for lazy people — Peter Hilton",
    "Figures don’t lie, but liars figure — Mark Twain",
    "Calculus was not Maths. It was a science experiment gone wrong &mdash; Abbi Glines",
    "The point about zero is that we do not need to use it in the operation of daily life. No one goes out to buy zero fish &mdash; Alfred North Whitehead",
    "Some people believe in imaginary friends. I believe in imaginary numbers &mdash; R.M. ArceJaeger",
    "Adam is twice as old as Ben was when Adam was as old as Ben is now. The combined ages of Adam and Ben is 56 years. How old are Adam and Ben now ?",
    "Yes, but you need to learn your Maths. I don't need to, really. I already know how to count to a hundred. And I'm sure I'll never need more than a hundred of anything &mdash; Lisa Kleypas",
    "It is better to solve one problem five different ways, than to solve five problems one way &mdash; George Pólya",
    "You can be good at Maths in school and still hate it &mdash; A.D. Aliwat",
    "Don't trust banks, trust Maths &mdash; Santosh Kalwar",
    "I'm into Maths the way my nine-year-old self was into skateboarding. I talk about it a lot, and I think about it a lot, but I can't actually, like, do it &mdash; John Green",
    "I did the Math (I presume Americans don't pluralise Mathematics because they only plan to do it once) &mdash; Sheridan Jobbins",
    "Maths anxiety is worst than a regular check up at the dentist &mdash; Charmaine J. Forde",
    "1337% of 𝝅 ≈ 42 &mdash; Mario J. Lucero",
    "Mathematics education is much more complicated than you expected, even though you expected it to be more complicated than you expected &mdash; Edward Griffith Begle",
    "And what he meant was that Maths wasn't like life because in life there are no straightforward answers in the end &mdash; Mark Haddon",
    "Mathematicians deal with large numbers sometimes, but never in their income &mdash; Isaac Asimov",
    "As the world continually multiplies, are we in a generation where people are divided, or people are equal? &mdash; Anthony Liccione",
    "What’s a Maths teacher’s favorite kind of tree? Geometry",
    "Parallel lines have so much in common … It’s a shame they’ll never meet",
    "What shape is usually waiting for you inside a Starbucks? A line",
    "Why doesn’t anybody talk to circles? Because there’s no point",
    "Why did the Mathematician spill all of his food in the oven? The directions said, “Put it in the oven at 180°”",
    "why was the Maths class so long? The teacher kept going off on a tangent",
    "Why did the student do multiplication problems on the floor? The teacher told him not to use tables",
    "How do you solve any equation? Multiply both sides by zero",
    "Which tables do you not have to learn? Dinner tables",
    "Surgeon: Nurse, I have so many patients. Who do I work on first? Nurse: Simple, follow the order of operations",
    "I met a Maths teacher who had 12 children. She really knows how to multiply!",
    "Why was the student confused when he went from English class to Maths class? Because he was taught that a double negative in English is bad, but in Maths, it’s a positive",
    "I hired an odd man to do eight jobs for me. When I got back, he’d only done jobs one, three, five, and seven",
    "What are ten things you can always count on? Your fingers",
    "There are three kinds of people in this world. Those who can count and those who can’t",
    "How do you make seven an even number? Remove the S",
    "Which king loved fractions? Henry the ⅛",
    "There’s a fine line between a numerator and a denominator… But only a fraction would understand",
    "How do we know the fractions, x/c, y/c, and z/c, are all in Europe? They’re all over c’s!",
    "Why did the student get upset when her teacher called her average? It was a <b>mean</b> thing to say",
    "Why is statistics never anyone’s favorite subject? It’s just average",
    "Why did Pi get its driver’s license revoked? Because it didn’t know when to stop",
    "You should never start a conversation with Pi. It’ll just go on and on forever",
    "I poured root beer into a square cup. Now I have beer",
    "Why do plants hate Maths? Because it gives them square roots",
    "Why can’t a nose be 12 inches long? Because then it would be a foot",
    "Who’s the king of the pencil case? The ruler",
    "When you keep missing Maths class, it starts to really add up",
    "Why was the Fraction worried about marrying the Decimal? Because she would have to convert",
    "Why was the Equal Sign so humble? Because she knew she wasn’t greater than or less than anyone else",
    "Dear Algebra, stop trying to find your x. They’re never coming back - don’t ask y",
    "How do you stay warm in any room? Just huddle in the corner, where it’s always 90 degrees",
    "Why did the triangle make the basketball team? It always made three-pointers",
    "Did you hear about the statistician who drowned crossing the river? It was 1 meter deep - on average",
    "I’ll do Algebra, and I’ll do Trigonometry. I’ll even do Statistics. But graphing is where I draw the line!",
    "The problem with Maths puns is that Calculus jokes are all derivative, Trigonometry jokes are too graphic, Algebra jokes are usually formulaic, and Arithmetic jokes are pretty basic. But I guess the occasional Statistics joke is an outlier",
    "Why was Algebra so easy for the Romans? X was always 10!",
    "I would tell you a joke about an infinite line… But it doesn’t have an endpoint",
    "Have you heard the latest Statistics joke? Probably",
    "Why shouldn’t you let advanced Maths intimidate you? It’s easy as Pi!",
    "Why can’t you trust a polynomial to stay the same? They have too many variables."
];

var randomNum = -1
var prevRandomNum = -1
var debugSpecialLol = false

spinSym.onclick = () => {
    if (debugSpecialLol == false) {
        do {
            randomNum = Math.floor(Math.random() * quotes.length)
            console.log(randomNum)
        }
        while (randomNum == prevRandomNum)
        console.log("done")
        prevRandomNum = randomNum
    }
    
    //randomNum++;
    quoteText.innerHTML = quotes[randomNum]
    // show overlay
    quoteBackground.style.visibility = 'visible';
    quoteBackground.style.opacity = '0.5';
    quoteText.style.visibility = 'visible';
    quoteText.style.opacity = '1';
};

function hideOverlay() {
    quoteBackground.style.visibility = 'hidden';
    quoteBackground.style.opacity = '0';
    quoteText.style.visibility = 'hidden';
    quoteText.style.opacity = '0';
}


const firstCarouselSlide = document.querySelector(".carousel-slide:first-child");
const maxSlideMargin = document.getElementsByClassName("carousel-slide").length * -100 + 100;
const numberOfSlides = document.getElementsByClassName("carousel-slide").length;
const carouselNav = document.getElementsByClassName("carousel-nav-button");
const carousel = document.getElementsByClassName("carousel")[0];
let index = 0;

function prevSlide() {
    // moveToSlide(100);
    index--;
    if (index < 0) {
        index = numberOfSlides - 1;
    }
    moveToSlide();
}
function nextSlide() {
    // moveToSlide(-100);
    index++;
    if (index == numberOfSlides) {
        index = 0;
    }
    moveToSlide();
}
function moveToSlide() {
    carouselNav[index].checked = true
    firstCarouselSlide.style.marginLeft = (index * -100).toString() + "%"
}
/*function moveToSlide(amount) {
    let currentMargin = parseInt(firstCarouselSlide.style.marginLeft)
    if (currentMargin + amount > 0) {
        margin = maxSlideMargin;
    } else if (currentMargin + amount < maxSlideMargin) {
        margin = 0;
    } else {
        margin = currentMargin + amount
    }
    firstCarouselSlide.style.marginLeft = margin.toString() + "%"
}*/
function selectSlide(idx) {
    index = idx;
    firstCarouselSlide.style.marginLeft = (index * -100).toString() + "%";
}
let carouselAutoRotater = setInterval(nextSlide, 3500);
carousel.addEventListener("mouseover", () => {
    clearInterval(carouselAutoRotater);
});
carousel.addEventListener("mouseout", () => {
    carouselAutoRotater = setInterval(nextSlide, 3500);
});


const navigationMenu = document.getElementsByTagName("nav")[0];
const navigationBlackout = document.getElementById("nav-blackout");
function openNav() {
    navigationMenu.style.width = "20em";
    navigationBlackout.classList.add("show");
}
function closeNav() {
    navigationMenu.style.width = "0%";
    navigationBlackout.classList.remove("show");
}


const scrollTopButton = document.getElementById("scroll-top-button");
function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }
};



const testimonialForm = document.getElementById("testimonial-form");
const testimonialFormThankyou = document.getElementById("testimonial-form-thankyou");

function showhideForm() {
    testimonialForm.classList.toggle("show");
    document.getElementById("name").focus();
}

const yearLevelSelector = document.getElementById("year-level");
const mathsDropdown = document.getElementById("maths-dropdown");
function toggleMathsDropdown() {
    if (yearLevelSelector.value >= 11) {
        mathsDropdown.classList.add("show");
    } else {
        mathsDropdown.classList.remove("show");
    }
}

function formsubmit() {
    testimonialForm.children[0].hidden = true
    testimonialForm.children[1].hidden = false

    setTimeout(() => {
        showhideForm();

        setTimeout(() => {
            testimonialForm.children[0].hidden = false
            testimonialForm.children[1].hidden = true
            testimonialForm.children[0].reset()
        }, 1000);
    }, 2000);
}