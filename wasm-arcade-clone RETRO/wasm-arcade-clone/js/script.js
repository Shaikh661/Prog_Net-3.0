const catImage = 'assets/cat-gamer.jpg';
const gameSets = {
  start: [
    ['Grand Theft Auto V','PC'],['Grand Theft Auto: Vice City','PC'],['Minecraft','PC'],['Metal Slug','Neo Geo'],['Pac-Man','Arcade'],['Street Fighter II: Hyper Fighting','Capcom'],['The King of Fighters 2002','Neo Geo'],['The Simpsons: Hit & Run','PC'],['Mortal Kombat II','Arcade'],['Sonic the Hedgehog','Arcade']
  ],
  pc: [['Grand Theft Auto V','Open world'],['Grand Theft Auto: Vice City','Open world'],['Grand Theft Auto III','Open world'],['The Simpsons: Hit & Run','Adventure'],['Minecraft','Sandbox']],
  neo: [['Metal Slug','Run & gun'],['Metal Slug 3','Run & gun'],['The King of Fighters 2002','Fighting'],['Metal Slug X','Run & gun'],['Windjammers','Sports']],
  capcom: [['Street Fighter II: Hyper Fighting','Fighting'],['Street Fighter Alpha 3','Fighting'],['Marvel vs. Capcom','Fighting'],["JoJo's Bizarre Adventure",'Fighting'],['Cadillacs and Dinosaurs','Beat ’em up']],
  arcade: [['Pac-Man','Maze'],["Ms. Pac-Man",'Maze'],['OutRun','Racing'],['Golden Axe','Beat ’em up'],['Contra','Run & gun']],
  flash: [['Canabalt','Arcade'],['Bloons Tower Defense 4','Strategy'],['Fireboy and Watergirl','Puzzle'],['Age of War','Strategy'],['Happy Wheels','Simulation']]
};
const allCards = [];
function cardMarkup(game, index, setName) {
  const [name, genre] = game;
  const card = document.createElement('article');
  card.className = 'game-card';
  card.dataset.name = name.toLowerCase();
  card.dataset.genre = genre.toLowerCase();
  card.dataset.set = setName;
  card.innerHTML = `<div class="game-art"><img src="${catImage}" alt="Gaming cat artwork for ${name}" loading="lazy"><span class="game-type">${genre}</span></div><div class="game-info"><h3 title="${name}">${name}</h3><div class="game-meta"><span>Browser game</span><span class="play-mark">↗</span></div></div>`;
  card.addEventListener('click', () => showToast(`${name} is a demo card — game launching isn't connected yet.`));
  allCards.push(card);
  return card;
}
function renderGrid(container, games, setName) {
  games.forEach((game, index) => container.appendChild(cardMarkup(game, index, setName)));
}
renderGrid(document.querySelector('#startGames'), gameSets.start, 'start');
document.querySelectorAll('[data-games]').forEach(grid => {
  const setName = grid.dataset.games;
  renderGrid(grid, gameSets[setName] || [], setName);
});
const searchInput = document.querySelector('#gameSearch');
const noResults = document.querySelector('#noResults');
let toastTimer;
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}
function filterGames() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  allCards.forEach(card => {
    const matches = !query || card.dataset.name.includes(query) || card.dataset.genre.includes(query);
    card.hidden = !matches;
    if (matches) visible++;
  });
  document.querySelectorAll('.game-section, #featured').forEach(section => {
    const grid = section.querySelector('.game-grid');
    section.hidden = Boolean(query) && grid && ![...grid.children].some(card => !card.hidden);
  });
  document.querySelector('.collection').hidden = Boolean(query);
  document.querySelector('.feature-banner').hidden = Boolean(query);
  noResults.hidden = !query || visible > 0;
}
searchInput.addEventListener('input', filterGames);
document.querySelector('#clearSearch').addEventListener('click', () => { searchInput.value = ''; filterGames(); searchInput.focus(); });
document.addEventListener('keydown', event => {
  if (event.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); searchInput.focus(); }
  if (event.key === 'Escape') { searchInput.value = ''; filterGames(); searchInput.blur(); }
});
const menuToggle = document.querySelector('#menuToggle');
const nav = document.querySelector('.desktop-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));
let carouselOffset = 0;
const startGrid = document.querySelector('#startGames');
function moveCarousel(direction) {
  const cards = [...startGrid.children];
  carouselOffset = (carouselOffset + direction + cards.length) % cards.length;
  cards.forEach((card, index) => { card.style.order = (index - carouselOffset + cards.length) % cards.length; });
}
document.querySelector('#prevGames').addEventListener('click', () => moveCarousel(-1));
document.querySelector('#nextGames').addEventListener('click', () => moveCarousel(1));
