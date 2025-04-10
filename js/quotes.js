const quotes = [
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
        author: "Samuel Johnson"
    },

    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "Paulo Coelho"
    },

    {
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        author: "Elbert Green Hubbard"
    },

    {
        quote: "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다",
        author: "알랭"
    },

    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author: "볼드윈"
    },

    {
        quote: "어제의 나보다 더 나은 내가 돼라",
        author: "독일 속담"
    },

    {
        quote: "행동없는 비전은 환상에 불과하다",
        author: "토마스 에디슨"
    },

    {
        quote: "꿈이 있다면 반드시 그 길을 찾아라",
        author: "코난 도일"
    },

    {
        quote: "행복은 외부에서 오지 않는다. 내면에서 시작된다.",
        author: "달라이 라마"
    },

    {
        quote: "완벽을 추구하지 말고 진보를 추구하라",
        author: "조지아 오키프"
    },

    {
        quote: "미래를 예측하는 가장 좋은 방법은 그것을 창조하는 것이다",
        author: "피터 드러커커"
    }

]

const quoteWidget = document.querySelector("#quote");
const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

function paintQuoteWidget() {
    quote.innerText = todaysQuote.quote;
    author.innerText = '- ' + todaysQuote.author;
    quoteWidget.setAttribute("style","opacity:1");
}

paintQuoteWidget();

// TODO : Quote server
