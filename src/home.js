export function createHomeContent() {
    const heroSec = document.createElement("div");
    heroSec.classList.add("hero-section");

    const heroHeading = document.createElement("div");
    heroHeading.classList.add("heading-content");

    content.appendChild(heroSec);
    heroSec.appendChild(heroHeading);

    heroHeading.innerHTML = `<h1>Welcome to Meat Hub</h1>
        <h2>-A Feast for Meat Lovers!</h2>
        <p>At Meat Hub, we serve the juiciest, most flavorful cuts, grilled to perfection. Whether you're craving a smoky steak, sizzling BBQ, or a classic burger, we've got you covered. Our passion for premium meats and bold flavors ensures every bite is an experience.</p>
        </div>`;
};

