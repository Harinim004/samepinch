
function toggleNotifications() {
    const panel = document.getElementById("notification-panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
    const panel = document.getElementById("notification-panel");
    const bell = document.querySelector(".notification-bell");
    if (!panel.contains(event.target) && !bell.contains(event.target)) {
        panel.style.display = "none";
    }
});
