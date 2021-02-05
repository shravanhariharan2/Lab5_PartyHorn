const Horns = {
  AIR: 'air',
  CAR: 'car',
  PARTY: 'party',
}

const volumeTextInput = document.getElementById('volume-number');
const volumeSliderInput = document.getElementById('volume-slider');

const mediaDir = './assets/media';

volumeTextInput.addEventListener('input', (event) => setVolume(Number(event.target.value)));
volumeSliderInput.addEventListener('input', (event) => setVolume(Number(event.target.value)));

const setVolume = (volume) => {
  setInputVolume(volume);
  setAudioVolume(volume);
  setVolumeImageLevel(volume);
  setButtonUsability(volume);
}

const setInputVolume = (volume) => {
  volumeTextInput.value = volume;
  volumeSliderInput.value = volume;
}

const setAudioVolume = (volume) => {
  document.getElementById('horn-sound').volume = volume / 100;
}

const setVolumeImageLevel = (volume) => {
  const volumeImage = document.getElementById('volume-image');
  if(volume >= 67 && volume <= 100) {
    volumeImage.src = mediaDir + '/icons/volume-level-3.svg';
  } else if(volume >= 34 && volume <= 66) {
    volumeImage.src = mediaDir + '/icons/volume-level-2.svg';
  } else if(volume >= 1 && volume <= 33) {
    volumeImage.src = mediaDir + '/icons/volume-level-1.svg';
  } else {
    volumeImage.src = mediaDir + '/icons/volume-level-0.svg';
  }
}

const setButtonUsability = (volume) => {
  document.getElementById('honk-btn').disabled = volume === 0 ? true : false;
}



const airHornInput = document.getElementById('radio-air-horn');
const carHornInput = document.getElementById('radio-car-horn');
const partyHornInput = document.getElementById('radio-party-horn');

airHornInput.addEventListener('input', () => setHorn(Horns.AIR));
carHornInput.addEventListener('input', () => setHorn(Horns.CAR));
partyHornInput.addEventListener('input', () => setHorn(Horns.PARTY));

const setHorn = (horn) => {
  setHornSound(horn);
  setHornImage(horn);
}

const setHornSound = (horn) => {
  document.getElementById('horn-sound').src = `${mediaDir}/audio/${horn}-horn.mp3`
}

const setHornImage = (horn) => {
  const soundImage = document.getElementById('sound-image');
  if(horn === Horns.AIR) {
    soundImage.src = mediaDir + '/images/air-horn.svg';
  } else if(horn === Horns.CAR) {
    soundImage.src = mediaDir + '/images/car.svg'
  } else {
    soundImage.src = mediaDir + '/images/party-horn.svg'
  }
}



const honkButton = document.getElementById('honk-btn');
honkButton.onclick = (event) => playSound(event);


const playSound = (event) => {
  event.preventDefault();
  document.getElementById('horn-sound').play();
}
