function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
    hours = hours.toString().padStart(2, '0');
    
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initialize clock
updateTime();
