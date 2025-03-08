$(document).ready(function () {
    // Mở modal "Add Product"
    $('#addModal').click(function () {
        $('#productModal').show();  // Mở modal thêm sản phẩm
    });

    // Mở modal "Update Product"
    $(document).on('click', '.update-btn', function () {
        $('#updateModal').show();  // Mở modal cập nhật sản phẩm
    });

    // Đóng modal khi nhấn nút "Close" trong modal "Add"
    $('#closeAddModal').click(function () {
        $('#productModal').hide();  // Đóng modal thêm sản phẩm
    });

    // Đóng modal khi nhấn nút "Close" trong modal "Update"
    $('#closeUpdateModal').click(function () {
        $('#updateModal').hide();  // Đóng modal cập nhật sản phẩm
    });

    // Đóng modal khi nhấn ngoài modal (click vào vùng mờ)
    $(window).click(function (event) {
        if ($(event.target).is('#productModal')) {
            $('#productModal').hide();  // Đóng modal thêm sản phẩm
        }
        if ($(event.target).is('#updateModal')) {
            $('#updateModal').hide();  // Đóng modal cập nhật sản phẩm
        }
    });
});
