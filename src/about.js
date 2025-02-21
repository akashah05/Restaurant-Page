export function createAboutContent() {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    aboutContainer.innerHTML = `
        <h1>About Meat Hub – Where Flavor Meets Passion!</h1>
        <p>At Meat Hub, we believe that great food starts with high-quality ingredients and expert craftsmanship. Our chefs are passionate about grilling, smoking, and searing the finest cuts to perfection, delivering bold flavors in every bite.</p>
        <p>From sizzling steaks to slow-cooked BBQ, every dish is made with love and served fresh. Whether you're a steak lover, a burger enthusiast, or a BBQ addict, we’ve got something special for you.</p>`

    content.appendChild(aboutContainer);
};