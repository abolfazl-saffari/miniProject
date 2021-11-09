function MovieCard(iCM, title, ratting, lastUpdate, runningTime) {
    this.iCM = iCM;
    //iC made for these names => img, class names
    //why class => for my grid I had to.
    //you may ask yourself, why I dont use img tags in html, because of the different images sizes that I have
    //and I push this thing like grid and img to something like interFace to control it in css
    //the next i change my plan, i use flex box to arrange my card
    // icm now changes to im = it means that => i = img , c = class, m = margin
    this.title = title;
    this.ratting = ratting;
    this.lastUpdate = lastUpdate;
    this.runningTime = runningTime;
}

const moviesInfo = [];
moviesInfo.push(new MovieCard('avengers-endgame', 'Avengers:Endgame', '8.8', 'SUN 8 SEPT - 10:00PM', '2HR 09MIN'));
moviesInfo.push(new MovieCard('hobbs-and-shaw', 'Hobbs & Shaw', '8.8', 'TUE 4 JULY - 05:00PM', '2HR 13MIN'));
moviesInfo.push(new MovieCard('john-wick-3', 'John Wick 3', '8.8', 'WED 16 Sept - 07    :00PM', '2HR 33MIN'));
moviesInfo.push(new MovieCard('deadpool-2', 'Deadpool 2', '8.8', 'MON 16 OCT - 10:00PM', '2HR 0MIN'));
moviesInfo.push(new MovieCard('the-lion-king', 'The Lion King', '8.8', 'SUN 8 Sept - 10:00PM', '2HR 36MIN'));
moviesInfo.push(new MovieCard('mad-max', 'Mad Max:Furry Road', '8.8', 'TUE 8 JULY - 05:00PM', '2HR 19MIN'));
moviesInfo.push(new MovieCard('aquaman', 'Aquaman', '8.8', 'WED 16 AUG - 07:00PM', '2HR 14MIN'));
moviesInfo.push(new MovieCard('mission-impossible', 'Mission Impossible', '8.8', 'MON 16 OCT - 10:00PM', '2HR 33MIN'));


const cardView = (cardInfo) => {
    return `
        <div class="${cardInfo.iCM}-card-movie-content card-color">
            <div class="${cardInfo.iCM}-content-img">
                <!--this place is just for img, and it is empty for reason -->
                <!--for a while after I add that play icon -->
                <div class="card-content-header">
                    <a href="#">
                        <span class="card-content-header-icon material-icons">play_arrow</span>
                    </a>
                </div>
                <!--now I do that -->
            </div>
            <div class = 'card-content-head'>
                <div class="card-content-head-title">
                    <h3>${cardInfo.title}</h3>
                </div>
                <div class="card-content-head-ratting">
                    <label>${cardInfo.ratting}</label><span>/10</span>
                </div>
                <div class="card-content-head-lastUpdate_runningTime-title">
                    <h4>LAST UPDATE</h4><h4>RUNNING TIME</h4>
                </div>
                <div class="card-content-head-lastUpdate_runningTime-data">
                    <h4>${cardInfo.lastUpdate}</h4><h4>${cardInfo.runningTime}</h4>
                </div>
            </div>
        </div>
    `
}

const generateCards = (cardInfoList) => {
    return cardInfoList.map(cardInfo => {
        return cardView(cardInfo)
    }).join(' ');
}

const cardContainer = document.getElementById('container');
cardContainer.innerHTML =generateCards(moviesInfo);

function onSearch(element){
    const searchTerm = element.value;
    const filterCards =moviesInfo.filter(card =>{
        return card.title.includes(searchTerm) || card.ratting.includes(searchTerm) || card.lastUpdate.includes(searchTerm) ||card.runningTime.includes(searchTerm)
    })
    cardContainer.innerHTML =generateCards(filterCards);
    console.log(filterCards)
}