const api ="0c9e13e874e54278be1f3a51dbcb3032";
const Games = `https://api.rawg.io/api/games?key=${api}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;
const mainEl = document.querySelector(".main")
async function Get(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.results)
    showGames(data.results)
}
Get(Games);

function showGames(games) {
    games.forEach((game) => {
        const {name,background_image,rating} = game;
        const create = document.createElement("div");
        create.innerHTML = `
        <div class="game">
        <img src="${background_image}" alt="">
        <div class="game-info">
            <h3>${name}</h1>
            <span>Rating : ${rating}</span>
        </div>
    </div>
        `;
        mainEl.appendChild(create);
    })
};