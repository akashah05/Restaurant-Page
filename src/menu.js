export function createMenuContent() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    menuContainer.innerHTML = `<div class="card card1">
    <h2>TomaHawk Steak</h2></div>
        <div class="card card2">
        <h2>Tandoori Chicken</h2></div>
        <div class="card card3">
        <h2>Smoked Brisket</h2></div>
        <div class="card card4">
        <h2>Shawarma Platter</h2></div>
        <div class="card card5">
        <h2>Lamp Chops</h2></div>
        <div class="card card6">
        <h2>Beef Tenderon</h2></div>`
    
    content.appendChild(menuContainer);
};

