document.getElementById('giftForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const relation = document.getElementById('relation').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const budget = document.getElementById('budget').value;
    const occasion = document.getElementById('occasion').value;
    const delivery = document.getElementById('delivery').value;
    const address = document.getElementById('address').value;

    // Here you can handle the data, like sending it to a server or processing it
    alert(`Gift Suggestions:\n
    Relation: ${relation}\n
    Gender: ${gender}\n
    Age: ${age}\n
    Budget: ${budget}\n
    Occasion: ${occasion}\n
    Delivery: ${delivery}\n
    Address: ${address}`);
    
    // Optionally, reset the form after submission
    document.getElementById('giftForm').reset();
});

