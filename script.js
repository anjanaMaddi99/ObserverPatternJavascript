// class
class Observable {
    constructor(displayElement) {
        this.temperature = this.getRandomTemperature();
        this.observersList = [];
        this.displayElement = displayElement;
        this.displayElement.innerHTML = `Weather Station ${this.temperature}`
        setInterval(()=>{
            this.temperature = this.getRandomTemperature();
            this.displayElement.innerHTML = `Weather Station ${this.temperature}`
            this.notify();
        },5000)
    }

    getRandomTemperature() {
        return Math.random() * (40 + 10) - 10;
    }

    registerObserver(observer) {
        this.observersList.push(observer);
        console.log(this.observersList);
    }

    notify() {
        this.observersList.forEach(obs=>{
            obs.update();
        })
    }

}

class Observer {
    constructor(observable, displayElementId) {
        this.observable = observable;
        this.temperature = this.observable.temperature;
        this.displayElementId = displayElementId;
        this.display();
    }

    update() {
        this.temperature = this.observable.temperature;
        this.display();
    }

    display() {
        const display = document.getElementById(this.displayElementId);
        display.innerHTML = this.temperature;
    }
}

// html element references
const observersContainer = document.getElementById('observers-container');
const addDisplayButton = document.getElementById('add');
const weatherStationContainer = document.getElementById('weather-station-container');

// other constants
let currentDisplayCount = 2;

// Objects
const observable = new Observable(weatherStationContainer);
const observer1 = new Observer(observable,'display-clock-1');
const observer2 = new Observer(observable,'display-clock-2');
observable.registerObserver(observer1);
observable.registerObserver(observer2);

// functions
const getDisplayHtmlTemplate = (count) => {
    return `
        <div class="display-clock">
            <h1 id="display-clock-${count}"></h1>
        </div>
    `
}

// add event Listeners
addDisplayButton.addEventListener('click',()=>{
    observersContainer.innerHTML += getDisplayHtmlTemplate(currentDisplayCount+1);
    const newObserver = new Observer(observable,`display-clock-${currentDisplayCount+1}`);
    observable.registerObserver(newObserver);
    currentDisplayCount += 1
})
