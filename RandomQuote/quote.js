const quotes=[
    {
        quote: '"'+ "Be yourself; everyone else is already taken." + '"',
        author:"― Oscar Wilde"
    },
    {
        quote: '"'+ "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." + '"',
        author: "― Albert Einstein"
    },
    {
        quote: '"'+ "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." + '"',
        author: "― Bernard M. Baruch"
    },
    {
        quote: '"'+ "You know you're in love when you can't fall asleep because reality is finally better than your dreams." + '"',
        author: "― Dr. Seuss"
    },
    {
        quote: '"'+ "You only live once, but if you do it right, once is enough." + '"',
        author: "― Mae West"
    },
    {
        quote: '"'+ "Be the change that you wish to see in the world." +'"',
        author: "― Mahatma Gandhi"
    },
    {
        quote: '"'+ "In three words I can sum up everything I've learned about life: it goes on." + '"',
        author: "― Robert Frost"
    },
    {
        quote: '"'+ "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals." + '"',
        author: "― J.K. Rowling"
    },
    {
        quote: '"'+ "No one can make you feel inferior without your consent." + '"',
        author: "― Eleanor Roosevelt"
    },
    {
        quote: '"'+ "If you tell the truth, you don't have to remember anything." + '"',
        author: "― Mark Twain"
    }
];

function randomQuote(){
    var random= Math.floor(Math.random()*quotes.length);
    document.getElementById('quote').innerHTML=quotes[random].quote;
    document.getElementById('author').innerHTML=quotes[random].author;
}