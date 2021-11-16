const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다.",
        author: "켄러 ",
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "로버트 엘리엇",
    },
    {
        quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
        author: "오손 웰스",
    },
    {
        quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author: "헨리 포드",
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹",
    },
    {
        quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오. ",
        author: "헬렌 켈러",
    },
    {
        quote: "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.",
        author: "생떽쥐베리",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//quotes[array]array에서 Math.floor내림한다. 무엇을? Math.random()0~1사이 랜덤소수 * quotes.length(배열의길이)

quote.innerHTML = todaysQuote.quote;//todaysQuote는 quote와author를 가지고 있으니 Text변경가능
author.innerHTML = todaysQuote.author;