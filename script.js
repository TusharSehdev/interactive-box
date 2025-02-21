document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", () => {
        document.querySelectorAll(".box").forEach(b => b.classList.remove("selected"));
        box.classList.add("selected");
        box.querySelector("input[type='radio']").checked = true;

        // Update total price
        let price = box.getAttribute("data-price");
        document.getElementById("total-price").textContent = `$${price}.00 USD`;
    });
});
