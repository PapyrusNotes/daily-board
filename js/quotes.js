const quotes = [
    {
        quote: "aa",
        author: "AA"
    },

    {
        quote: "bb",
        author: "BB"
    },

    {
        quote: "cc",
        author: "CC"
    },

    {
        quote: "dd",
        author: "DD"
    },

    {
        quote: "ee",
        author: "EE"
    },

    {
        quote: "ff",
        author: "FF"
    },

    {
        quote: "gg",
        author: "GG"
    },

    {
        quote: "hh",
        author: "HH"
    },

    {
        quote: "ii",
        author: "II"
    },

    {
        quote: "kk",
        author: "KK"
    }


]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
