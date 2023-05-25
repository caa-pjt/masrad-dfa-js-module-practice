export function switchListItem(event) {
    const $target = $(event.currentTarget);
    // Change the active state to the clicked item
    $("a.list-group-item.active").removeClass("active");
    $target.addClass('active');
    // Clear the unread notification for the clicked item
    $('span.badge', $target).text("");
}