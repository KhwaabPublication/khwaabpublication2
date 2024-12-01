import { getChatbotResponse } from 'backend/open-ai.jsw';

$w.onReady(function () {
    // Attach the onClick event to the submit button
    $w("#submitButton").onClick(async () => {
        const userInput = $w("#input1").value; // Get the user input from the input field
        
        if (userInput) {
            try {
                // Clear previous error message if any
                $w("#errorText").hide();
                
                // Show loading state
                $w("#responseText").show();
                $w("#responseText").text = "Loading..."; // Indicate loading
                
                // Call the backend function to get the response
                const response = await getChatbotResponse(userInput);
                console.log("Response from backend:", response);
                
                // Check if response is valid and display it
                if (response) {
                    $w("#responseText").text = response; // Set the response text
                } else {
                    $w("#responseText").text = "No response received."; // Handle empty response
                }
                
                // Ensure the response text is shown
                $w("#responseText").show();
            } catch (error) {
                console.error("Error:", error);
                // Show error message
                $w("#errorText").text = "There was an error getting the response.";
                $w("#errorText").show();
                $w("#responseText").hide(); // Hide the response text if there's an error
            }
        } else {
            // Show error if input is empty
            $w("#errorText").text = "Please enter a message.";
            $w("#errorText").show();
            $w("#responseText").hide(); // Hide the response text if input is empty
        }
    });
});