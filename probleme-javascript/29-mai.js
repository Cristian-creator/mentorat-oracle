const minuteConverter = (time)=>{
    if (time < 60){
        return `0 minutes and ${time} seconds `
    }
    if((time % 60) === 0){
        return `${time / 60} minutes and 0 seconds`
    }
    if((time % 60) !== 0){
        const minutes = parseInt(time/60)
        const seconds = time % 60;
        return `${minutes} minutes and ${seconds} seconds`
    }
}

const getMinutes = (secundeValue) => {
    const minute = Math.floor(secundeValue / 60);

    const secunde = secundeValue - minute * 60;

    console.log(`${minute} minute si ${secunde} secunde`);
};

console.log(minuteConverter(80));
