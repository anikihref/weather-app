export default function chooseConditionImg(iconNum) {
  switch (iconNum) {
    case '01d':
      return require('./img/conditions/01d.png');

    case '01n':
      return require('./img/conditions/01n.png');

    case '02d':
      return require('./img/conditions/02d.png');

    case '02n':
      return require('./img/conditions/02n.png');

    case '03d':
      return require('./img/conditions/03d.png');

    case '03n':
      return require('./img/conditions/03n.png');

    case '04d':
      return require('./img/conditions/04d.png');

    case '04n':
      return require('./img/conditions/04n.png');

    case '09d':
      return require('./img/conditions/09d.png');

    case '09n':
      return require('./img/conditions/09n.png');

    case '10d':
      return require('./img/conditions/10d.png');

    case '10n':
      return require('./img/conditions/10n.png');

    case '11d':
      return require('./img/conditions/11d.png');

    case '11n':
      return require('./img/conditions/11n.png');

    case '13d':
      return require('./img/conditions/13d.png');

    case '13n':
      return require('./img/conditions/13n.png');

    case '50d':
      return require('./img/conditions/50d.png');

    case '50n':
      return require('./img/conditions/50n.png');

    default:
      console.log('image not found');
  }
}
