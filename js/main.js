CountDownToMario('06/05/2025 12:01 AM', 'countdown');

function CountDownToMario(endTime, divId) {
    const end = new Date(endTime);
    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;

    let timer;

    function showRemaining() {
        const now = new Date();
        const distance = end - now;

        const countdownDiv = document.getElementById(divId);

        if (distance <= 0) {
            clearInterval(timer);
            countdownDiv.textContent = "Switch 2 is out! 🎉";
            document.body.classList.add('launched');
            return;
        }

        const days = Math.floor(distance / _day);
        const hours = Math.floor((distance % _day) / _hour);
        const minutes = Math.floor((distance % _hour) / _minute);
        const seconds = Math.floor((distance % _minute) / _second);

        const pad = n => String(n).padStart(2, '0');

        countdownDiv.textContent = `${days} days : ${pad(hours)} hrs : ${pad(minutes)} mins : ${pad(seconds)} secs`;
    }

    showRemaining();
    timer = setInterval(showRemaining, 1000);
}
