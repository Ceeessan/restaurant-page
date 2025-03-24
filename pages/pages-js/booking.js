flatpickr("#date", {
    onDayCreate: function (dObj, dStr, fp, dayElem) {
        const day = dayElem.dateObj.getDay();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (day === 1) {
            dayElem.style.color = 'red';
            dayElem.style.pointerEvents = 'none';
        }

        const dObjFormatted = new Date(dayElem.dateObj.getFullYear(), dayElem.dateObj.getMonth(), dayElem.dateObj.getDate());

        if (dObjFormatted < today) {
            dayElem.style.color = '#d3d3d3';
            dayElem.style.pointerEvents = 'none';
        }
    },

    onChange: function (selectedDates, dateStr, instance) {
        const selectedDate = selectedDates[0];
        console.log(selectedDate);
        const selectedDay = selectedDate.getDay();

        if (selectedDay >= 2 && selectedDay <= 5) {
            console.log("You did it!");
            selectDinnerInWeekTime();
        }

        if (selectedDay === 0 || selectedDay === 6) {
            selectDinnerInWeekendTime();
        }

    }
});

function selectDinnerInWeekTime() {
    const div = document.querySelector(".time-container");
    div.innerHTML = '';

    const times = [
        "17:00-19:30",
        "17:30-20:00",
        "18:00-20:30",
        "18:30-21:00",
        "19:00-21:30",
        "19:30-22:00"
    ];

    times.forEach(time => {
        const timeDiv = document.createElement("div");
        timeDiv.classList.add("time-box");
        timeDiv.textContent = time;

        timeDiv.addEventListener("click", function () {
            selectDinnerTime(timeDiv);
        })

        div.appendChild(timeDiv);
    })
}

function selectDinnerInWeekendTime() {
    const div = document.querySelector(".time-container");
    div.innerHTML = '';

    const times = [
        "16:00-18.30",
        "16:30-19:00",
        "17:00-19:30",
        "17:30-20:00",
        "18:00-20:30",
        "18:30-21:00",
        "19:00-21:30",
        "19:30-22:00",
        "20:00-22:30"
    ];

    times.forEach(time => {
        const timeDiv = document.createElement("div");
        timeDiv.classList.add("time-box");
        timeDiv.textContent = time;

        timeDiv.addEventListener("click", function () {
            selectDinnerTime(timeDiv);
        })

        div.appendChild(timeDiv);
    })
}

function selectDinnerTime(selectedTime) {
    document.getElementById("selectedTime").value = selectedTime.textContent;

    document.querySelectorAll(".time-box").forEach(box => {
        console.log(box);
        box.classList.remove("selected");
        box.style.backgroundColor = "";
    });
    selectedTime.classList.add("selected");
    selectedTime.style.backgroundColor = "rgb(251, 249, 239)";
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();

        const time = document.getElementById("selectedTime").value;
        const date = document.getElementById("date").value;

        const bookingMsg = document.createElement('p');
        const bookingDiv = document.querySelector(".booking-msg");

        bookingDiv.appendChild(bookingMsg);

        bookingMsg.textContent = `Your booking at Taste for ${time} on ${date} is confirmed! We look forward to seeing you there!`;

        console.log("Du har bokat!");
    })
})