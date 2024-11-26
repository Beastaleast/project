document.addEventListener("DOMContentLoaded", () => {
    const suggestionsContainer = document.getElementById("suggestionsContainer");

    const giftSuggestions = [
        {
            title: "Personalized Photo Album",
            description: "A beautiful album filled with cherished memories.",
            imageUrl: "https://via.placeholder.com/250x150?text=Photo+Album"
        },
        {
            title: "Customized Jewelry",
            description: "A unique piece that symbolizes your love.",
            imageUrl: "https://via.placeholder.com/250x150?text=Jewelry"
        },
        {
            title: "Smartwatch",
            description: "A stylish smartwatch to keep them connected.",
            imageUrl: "https://via.placeholder.com/250x150?text=Smartwatch"
        },
        {
            title: "Gourmet Chocolate Box",
            description: "A delightful assortment of gourmet chocolates.",
            imageUrl: "https://via.placeholder.com/250x150?text=Chocolates"
        },
        {
            title: "Spa Day Voucher",
            description: "A relaxing day at the spa for ultimate rejuvenation.",
            imageUrl: "https://via.placeholder.com/250x150?text=Spa+Day"
        }
    ];
    giftSuggestions.forEach(gift => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${gift.imageUrl}" alt="${gift.title}">
            <h4>${gift.title}</h4>
            <p>${gift.description}</p>
        `;
        suggestionsContainer.appendChild(card);
    });
});
