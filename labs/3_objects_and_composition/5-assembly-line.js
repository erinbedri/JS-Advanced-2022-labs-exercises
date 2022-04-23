function createAssemblyLine() {
    const assembly = {
        hasClima: function(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function() {
                if (this.temp < this.tempSettings) {
                    this.temp += 1;
                } else {
                    this.temp -= 1;
                }
            }
        },

        hasAudio: function(car) {
            car.currentTrack = {
                name: null,
                artist: null,
            }
            car.nowPlaying = function() {
                if (this.currentTrack !== null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`)
                }
            }
        },

        hasParktronic: function(car) {
            car.checkDistance = function(distance) {
                let output = '';
                if (distance < 0.1) {
                    output = 'Beep! Beep! Beep!';
                } else if (0.1 <= distance && distance < 0.25) {
                    output = 'Beep! Beep!';
                } else if (0.25 <= distance && distance < 0.5) {
                    output = 'Beep!';
                }
                console.log(output);
            }
        }
    }
    
    return assembly;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar)