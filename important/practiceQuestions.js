for (var i = 1; i <= 3; i++) {
    (function () {
        const j = i;
        setTimeout(() => {
            console.log(j);
        }, 1000)
        clearInterval();
    })();
}
