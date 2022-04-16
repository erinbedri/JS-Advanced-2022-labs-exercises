function solve(steps, footprint, speed) {
    let speedMetersPerSecond = speed * 1000 / 3600;
    let distance = steps * footprint;
    let breaks = Math.floor(distance / 500) * 60;
    let timeSeconds = distance / speedMetersPerSecond + breaks;

    let hours = Math.floor(timeSeconds / 3600);
    let minutes = Math.floor(timeSeconds / 60);
    let seconds = Math.ceil(timeSeconds % 60);

    const zeroPad = (num, places) => String(num).padStart(places, '0');

    console.log(`${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)}`);
}

solve(2564, 0.70, 5.5);

