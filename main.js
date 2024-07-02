
window.onload = () => {

    // navigation section
    my_nav = {
        home: document.getElementById('navbar-home'),
        about: document.getElementById('navbar-about'),
    };
    for (let each_nav in my_nav){
        my_nav[each_nav].onclick = (event) => {
            document.querySelector('li.active').className = "";
            my_nav[each_nav].className = "active";
         };
    }

    // required elements
    setInterval(() => {
        const formatter = new Intl.DateTimeFormat('en', {
            timeZone: 'UTC',
            timeZoneName: 'short',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
        const date = new Date();
        document.querySelector(
            '[data-testid="currentTimeUTC"]'
        ).textContent = formatter.format(date);
    }, 1000);

    const formatter = new Intl.DateTimeFormat('en', {
        timeZone: 'UTC',
        weekday: 'long'
    })
    const date = new Date();
    document.querySelector(
        '[data-testid="currentDay"]'
    ).textContent += formatter.format(date);

};
