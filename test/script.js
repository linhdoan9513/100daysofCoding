const lighthouse = {
    on: true,
    facing: "north",
    lightswitch: function() {
        // Create a method that will toggle the lighthouse.on property and update the lightSpan element on the page
        this.on = !this.on;
        const lightTitle = $('h1');
        let lightStatus;
        if (this.on === true) {
            lightStatus = "on";
            lightTitle.addClass('lightOn');
        } else {
            lightStatus = "off";
            lightTitle.removeClass('lightOn');
        }
        $('.lightSpan').html(lightStatus);
        // When that method is run also add an <li> to the Log that will indicate that the lighthouse was turned on or off (ex: <p>You turned the lighthouse on.</p>)
        // Add a button to your <li> that will be used to mark that log entry as "important" (<button class="importantButton">Mark Important</button>)
        const newLogEntry = `
            <li>
                <p>You turned the lighthouse ${lightStatus}.</p>
                <button class="importantButton">Mark Important</button>
            </li>
        `;
        $('.logs').append(newLogEntry);
    },
    rotate: function(e) {
        // Create a method that will change the lighthouse.facing property and update the directionSpan element on the page
        this.facing = e.target.value;
        const newDirection = capitalizeFirstLetter(e.target.value);
        $('.directionSpan').html(newDirection);
        // When that method is run also add an <li> to the Log that will indicate that the lighthouse was turned on or off (ex: <p>You turned the lighthouse to face West.</p>)
        // Add a button to your <li> that will be used to mark that log entry as "important" (<button class="importantButton">Mark Important</button>)
        const newLogEntry = `
            <li>
                <p>You turned the lighthouse to face ${newDirection}.</p>
                <button class="importantButton">Mark Important</button>
            </li>
        `;
        $('.logs').append(newLogEntry);
    }
}

const capitalizeFirstLetter = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// Attach an event listener to the Lightswitch button that when clicked will run the lighthouse.lightswitch method
$('.lightswitch').on('click', lighthouse.lightswitch.bind(lighthouse));

// Attach an event listener to the light direction select that on change will run the lighthouse.rotate method
$('.rotator').on('change', lighthouse.rotate.bind(lighthouse))

// Attach an event listener to the Important buttons that when clicked will add a class of "important" to <li> of the button that was clicked
$('.logs').on('click', '.importantButton', function() {
    $(this).parent('li').toggleClass('important');
});