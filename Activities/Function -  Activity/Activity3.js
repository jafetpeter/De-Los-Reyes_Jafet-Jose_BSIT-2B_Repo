function GetWeatherAdvice(temperature, isRaining) {
    var message;
    if (temperature < 10 ) {
        message = 'Wear a heavy jacket.';
    } else if (temperature >= 10 && temperature <= 20 && isRaining) {
        message = 'Bring an umbrella.';
    } else {
        message = 'Enjoy the weather!';
    }
    return message;
}
console.log(GetWeatherAdvice(3, true));
console.log(GetWeatherAdvice(15, true));
console.log(GetWeatherAdvice(22, false));
