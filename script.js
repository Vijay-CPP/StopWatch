let secs = 1;
let hrs = 0;
let mins = 0;
let mili = 0;

let buttons = document.querySelectorAll(".b");
let startFlag = 0;

function animate(id) {
    let handler = document.getElementById(id);
    handler.classList.add("pressed");

    setTimeout(() => {
        handler.classList.remove("pressed");
    }, 100);
}

for (let index = 0; index < buttons.length; index++) {

    buttons[index].addEventListener("click", function () {
        animate(this.id);

        if (this.id == 'start' && startFlag == 0) {
            start();
        }

        else if (this.id == 'pause') {
            pause();
        }

        else if (this.id == 'reset') {
            reset();
        }
    })

}

function change(num) {
    if (num < 10)
        num = "0" + num
    return num
}

function update() {
    let data = document.getElementsByTagName("h2")[0];
    data.innerText = change(hrs) + " : " + change(mins) + " : " + change(secs);

    let ms = document.getElementsByTagName("h3")[0];
    ms.innerText = change(mili)
}

let interval = 0;

function start() {
    startFlag++;

    interval = setInterval(function () {
        update();

        mili++;

        if (mili > 99) {
            mili = 0;
            secs++;
        }

        if (secs > 59) {
            secs = 0;
            mins++;
        }

        if (mins > 59) {
            mins = 0;
            hrs++;
        }

    }, 10);
}

function pause() {
    startFlag = 0;
    clearInterval(interval);
}

function reset() {
    startFlag = 0;
    secs = 0;
    hrs = 0;
    mins = 0;
    mili = 0;
    clearInterval(interval);
    update();
}
