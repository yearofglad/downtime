document.addEventListener("DOMContentLoaded", function () {
    const addFriendButton = document.getElementById("add-friend-button");
    if (addFriendButton) {
        addFriendButton.addEventListener("click", function () {
            const userId = this.getAttribute("data-user-id");
            if (userId) {
                window.location.href = `/add_friend/${userId}`;
            } else {
                console.error("User ID not found");
            }
        });
    }

    const messageButton = document.getElementById("message-button");
    if (messageButton) {
        messageButton.addEventListener("click", function () {
            const userId = this.getAttribute("data-user-id");
            if (userId) {
                window.location.href = `/message/${userId}`;
            } else {
                console.error("User ID not found");
            }
        });
    }

    document.querySelectorAll(".plus-button").forEach(function (button) {
        button.addEventListener("click", function () {
            const eventId = this.getAttribute("data-event-id");
            if (eventId) {
                fetch(`/add_event/${eventId}`, {
                    method: "POST",
                })
                .then(response => response.text())
                .then(message => {
                    alert(message);
                })
                .catch(error => {
                    console.error("Error adding event:", error);
                    alert("Failed to add the event.");
                });
            } else {
                console.error("Event ID not found");
            }
        });
    });

    document.getElementById("ellipse").addEventListener("click", function () {
        const menu = document.getElementById("ellipse-menu");
        if (menu.style.display === "none" || !menu.style.display) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });    

    document.addEventListener("DOMContentLoaded", function () {
        const backButton = document.getElementById("back-button");
        if (backButton) {
            backButton.addEventListener("click", function () {
                window.location.href = "/";
            });
        }
    });
    
});
