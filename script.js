function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Decide AM/PM
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12

    // Add leading zeros
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Final time string
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();
