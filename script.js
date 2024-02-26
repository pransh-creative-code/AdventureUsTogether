$(document).ready(function() {
    $('.activity-btn').click(function() {
        // Mark the selected activity button
        $('.activity-btn').removeClass('selected'); // Remove 'selected' from all activity buttons
        $(this).addClass('selected'); // Add 'selected' to the clicked button

        // Proceed to show the timeslots
        $('#timeslots').empty().hide();
        $('#confirmation').empty().hide();

        const activity = $(this).data('activity');
        let timesHtml = `<h3>When Shall We Meet?</h3>`;
        
        const times = {
            'Cafe': ['Friday Afternoon', 'Saturday Afternoon', 'Sunday Afternoon'],
            'Bar': ['Friday Evening', 'Saturday Evening', 'Sunday Evening'],
            'Hiking': ['Saturday Morning', 'Sunday Morning'],
            'Clubbing': ['Friday Night', 'Saturday Night'],
        };

        times[activity].forEach(time => {
            timesHtml += `<button class="time-btn" data-time="${time}" data-activity="${activity}">${time}</button>`;
        });

        $('#timeslots').html(timesHtml).fadeIn(600);
    });

    $('#timeslots').on('click', '.time-btn', function() {
        $('.time-btn').removeClass('selected'); // Remove 'selected' from all time buttons
        $(this).addClass('selected'); // Add 'selected' to the clicked button

        const timeSelected = $(this).data('time');
        const activitySelected = $(this).data('activity');
        // $('#confirmation').html(`<h3>✨ Locking In: ${activitySelected} on ${timeSelected}</h3><p>📸 Snap a screenshot and send it my way. I'll handle the details. Excited?</p>`).fadeIn(600);
        $('#confirmation').html(`<h3>✨ Locking In: ${timeSelected}</h3>
            <p class="confirmation-message">📸 Take a screenshot and send it my way. I'll handle the details. Excited?</p>`).fadeIn(600);
    });
});
