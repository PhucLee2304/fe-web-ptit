// Khi click vào nút Add Funds, hiển thị modal
document.getElementById("add-funds").addEventListener("click", function () {
    document.getElementById("fund-modal").style.display = "block";
});

// Đóng modal khi bấm vào dấu "x" trong modal Add Funds
document.getElementById("close-btn-fund").addEventListener("click", function () {
    document.getElementById("fund-modal").style.display = "none";
});

// Đóng modal khi người dùng click ra ngoài modal Add Funds
window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("fund-modal")) {
        document.getElementById("fund-modal").style.display = "none";
    }
});

// Khi click vào nút "Make a transfer", hiển thị modal chọn lựa
document.getElementById("make-transfer").addEventListener("click", function () {
    document.getElementById("choose-option-modal").style.display = "block";
});

// Đóng modal khi bấm vào dấu "x" trong modal chọn lựa
document.getElementById("close-btn-option").addEventListener("click", function () {
    document.getElementById("choose-option-modal").style.display = "none";
});

// Hiển thị form modal khi nhấn vào Option 1
document.getElementById("option1").addEventListener("click", function () {
    document.getElementById("form-modal").style.display = "block";
    document.getElementById("choose-option-modal").style.display = "none"; // Đóng modal chọn lựa
});

// Hiển thị form modal khi nhấn vào Option 2 (Make a withdrawal)
document.getElementById("option2").addEventListener("click", function () {
    document.getElementById("withdrawal-modal").style.display = "block";
    document.getElementById("choose-option-modal").style.display = "none"; // Đóng modal chọn lựa
});

// Đóng form modal khi nhấn vào nút "x" trong form modal
document.getElementById("close-form-btn").addEventListener("click", function () {
    document.getElementById("form-modal").style.display = "none";
});

// Đóng modal withdrawal khi nhấn vào nút "x" trong modal withdrawal
document.getElementById("close-withdrawal-btn").addEventListener("click", function () {
    document.getElementById("withdrawal-modal").style.display = "none";
});

// Đóng modal khi người dùng click ra ngoài modal
window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("choose-option-modal")) {
        document.getElementById("choose-option-modal").style.display = "none";
    } else if (event.target === document.getElementById("form-modal")) {
        document.getElementById("form-modal").style.display = "none";
    } else if (event.target === document.getElementById("withdrawal-modal")) {
        document.getElementById("withdrawal-modal").style.display = "none";
    }
});
