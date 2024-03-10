class Farm {
    constructor() {
        this.chickens = 0;
        this.cows = 0;
        this.pigs = 0;
        this.corn = 0;
        this.carrots = 0;
        this.potatoes = 0;
        this.eggs = 0;

        this.cowPrice = 50;
        this.chickenPrice = 12;
        this.pigPrice = 24;
        this.cornPrice = 5;
        this.carrotsPrice = 6;
        this.potatoPrice = 2;
        this.eggPrice = 3;

        this.chickenRate = 1;
        this.pigRate = 1;
        this.cornRate = 1;
        this.carrotRate = 1;
        this.potatoRate = 1;
        this.cowRate = 1;

   
        this.cowValue = 0;
        this.chickenValue = 0;
        this.pigValue = 0;
        this.cornValue = 0;
        this.carrotsValue = 0;
        this.potatoValue = 0;
        this.eggValue = 0;

    }
    increaseChickenRate() {
        this.chickenRate += 1;
    }
    increasePigRate() {
        this.pigRate += 1;
    }
    increaseCornRate() {
        this.cornRate += 1;
    }
    increaseCarrotRate() {
        this.carrotRate += 1;
    }
    increasePotatoRate() {
        this.potatoRate += 1;
    }
    increaseCowRate() {
        this.cowRate += 1;
    }

    setChickens() {
        let interval = setInterval(() => {
            this.chickens += 1 * this.chickenRate;
            this.chickenValue = parseFloat(this.chickens) * 4;
            this.eggValue = parseFloat(this.eggs * 2);
            this.eggs += Math.round(1 * (this.chickenRate / 3));
        }, 1000);
        setTimeout(()=>{
            clearInterval(interval)
        }, 4000)
    }

    setCorn() {
        let interval = setInterval(() => {
            this.corn += 1 * this.cornRate;
            this.cornValue = parseFloat(this.corn) * 4;
        }, 1000);
        setTimeout(()=>{
            clearInterval(interval)
        }, 4000)
    }

    setCarrots() {
        let interval = setInterval(() => {
            this.carrots += 1 * this.carrotRate;
            this.carrotsValue = parseFloat(this.carrots) * 4;
        }, 1000);
        setTimeout(()=>{
            clearInterval(interval)
        }, 4000)
    }

    setPotatoes() {
        let interval = setInterval(() => {
            this.potatoes += 1 * this.potatoRate;
            this.potatoValue = parseFloat(this.potatoes) * 4;
        }, 1000);
        setTimeout(()=>{
            clearInterval(interval)
        }, 4000)
    }

    setPigs() {
        let interval = setInterval(() => {
            this.pigs += 1 * this.pigRate;
            this.pigValue = parseFloat(this.pigs) * 4;
        }, 1000);
        setTimeout(()=>{
            clearInterval(interval)
        }, 4000)
    }
    setCows() {
        let interval = setInterval(() => {
            this.cows += 1 * this.cowRate;
            this.cowValue = parseFloat(this.cows) * 4;
        }, 1000);
        setTimeout(()=>{
            clearInterval(interval)
        }, 4000)
    }
}

let gold_span = document.querySelector('#span-player-gold');

let newFarm = new Farm();

const buttonUpgradeFarmItems = document.querySelectorAll('.upgrade-farm-btn');
const tdQuantityFarm = document.querySelectorAll('.td-quantity-farm');
const tdValueFarm = document.querySelectorAll('.td-value-farm');
const tdPriceFarm = document.querySelectorAll('.td-price-farm');

function updateTABLE() {
    setInterval(() => {
        tdQuantityFarm[0].innerText = newFarm.corn;
        tdValueFarm[0].innerText = newFarm.cornValue;
        tdPriceFarm[0].innerText = newFarm.cornPrice;
   

        tdQuantityFarm[1].innerText = newFarm.carrots;
        tdValueFarm[1].innerText = newFarm.carrotsValue;
        tdPriceFarm[1].innerText = newFarm.carrotsPrice;

        tdQuantityFarm[2].innerText = newFarm.potatoes
        tdValueFarm[2].innerText = newFarm.potatoValue;
        tdPriceFarm[2].innerText = newFarm.potatoPrice;

        tdQuantityFarm[3].innerText = newFarm.chickens;
        tdValueFarm[3].innerText = newFarm.chickenValue;
        tdPriceFarm[3].innerText = newFarm.chickenPrice;

        tdQuantityFarm[4].innerText = newFarm.cows;
        tdValueFarm[4].innerText = newFarm.cowValue;
        tdPriceFarm[4].innerText = newFarm.cowPrice;

        tdQuantityFarm[5].innerText = newFarm.pigs;
        tdValueFarm[5].innerText = newFarm.pigValue;
        tdPriceFarm[5].innerText = newFarm.pigPrice;

        tdQuantityFarm[6].innerText = newFarm.eggs;
        tdValueFarm[6].innerText = newFarm.eggValue;
        
    }, 1000)
}
updateTABLE();

buttonUpgradeFarmItems[0].addEventListener('click', () => {
    if(wizard.gold >= newFarm.cornPrice){
        wizard.gold -= newFarm.cornPrice;
        newFarm.increaseCornRate();
        newFarm.setCorn();
        gold_span.innerText = wizard.gold;
    } else {
        alert('Insufficent gold')
    }
})

buttonUpgradeFarmItems[1].addEventListener('click', () => {
    if(wizard.gold >= newFarm.carrotsPrice){
        wizard.gold -= newFarm.carrotsPrice;
        newFarm.increaseCarrotRate();
        newFarm.setCarrots();
        gold_span.innerText = wizard.gold;
    } else {
        alert('Insufficent gold')
    }
})

buttonUpgradeFarmItems[2].addEventListener('click', () => {
    if(wizard.gold >= newFarm.potatoPrice){
        wizard.gold -= newFarm.potatoPrice;
        newFarm.increasePotatoRate();
        newFarm.setPotatoes();
        gold_span.innerText = wizard.gold;
    } else {
        alert('Insufficent gold')
    }
})

buttonUpgradeFarmItems[3].addEventListener('click', () => {
    if(wizard.gold >= newFarm.chickenPrice){
        wizard.gold -= newFarm.chickenPrice;
        newFarm.increaseChickenRate();
        newFarm.setChickens();
        gold_span.innerText = wizard.gold;
    } else {
        alert('Insufficent gold')
    }
})

buttonUpgradeFarmItems[4].addEventListener('click', () => {
    if(wizard.gold >= newFarm.cowPrice){
        wizard.gold -= newFarm.cowPrice;
        newFarm.increaseCowRate();
        newFarm.setCows();
        gold_span.innerText = wizard.gold;
    } else {
        alert('Insufficent gold')
    }
});

buttonUpgradeFarmItems[5].addEventListener('click', () => {
    if(wizard.gold >= newFarm.pigPrice){
        wizard.gold -= newFarm.pigPrice;
        newFarm.increasePigRate();
        newFarm.setPigs();
        gold_span.innerText = wizard.gold;
    } else {
        alert('Insufficent gold')
    }
});



