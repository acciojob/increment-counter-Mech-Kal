//your JS code here. If required.
let currentCount = 0;

        // Get the required DOM elements
        const counterElement = document.getElementById('counter');
        const incrementButton = document.getElementById('incrementBtn');

        // Set the initial text content
        counterElement.textContent = currentCount;

        // Add the click event listener to the button
        incrementButton.addEventListener('click', () => {
            
            // Acceptance Criteria: Display an alert with the UN-INCREMENTED value.
            // NOTE: We use alert() as requested, but generally, a custom UI message box is preferred.
           // alert(`The counter's current value (un-incremented) is: ${currentCount}`);

            // 1. Increment the count
            currentCount++;

            // 2. Update the DOM to display the new, incremented value
            counterElement.textContent = currentCount;
        });