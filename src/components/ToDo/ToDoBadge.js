export function ToDoBadge(newLI_id, days) {
    let toDoBadgeValue = 0;
    let toDoBadgeElement = document.getElementById("ToDoBadge" + newLI_id);
    switch (true) {
        case Number(days) > 0:
            toDoBadgeValue = "Due in " + days + " days";
            toDoBadgeElement.classList.add('green');
            break;
        case Number(days) < 0:
            toDoBadgeValue = "Due " + -days + " days ago";
            toDoBadgeElement.classList.add('red');
            break;
        case Number(days) == 0:
            toDoBadgeElement.classList.add('blue');
            toDoBadgeValue = "Due Today";
            break;
        default:
            toDoBadgeValue = "Due Anytime";;
    }
    toDoBadgeElement.textContent = toDoBadgeValue;
}