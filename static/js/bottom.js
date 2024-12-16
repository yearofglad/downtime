document.querySelectorAll('.bottom-item').forEach(item => {
    item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        const link = item.getAttribute('data-link');
        const itemName = item.getAttribute('data-name');

        if (action === "under-construction") {
            alert(`${itemName} is under construction`);
        } else if (link) {
            window.location.href = link;
        }
    });
});
