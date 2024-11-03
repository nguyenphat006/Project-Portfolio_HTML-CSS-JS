const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-link');

menuIcon.onclick = () =>{
    navLinks.classList.toggle('active');
}





function SendMail() {
    // Lấy giá trị từ các trường nhập liệu
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Xóa thông báo lỗi cũ
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("subject-error").innerText = "";
    document.getElementById("message-error").innerText = "";
    document.getElementById("phone-error").innerText = "";

    let hasError = false;

    // Kiểm tra các trường không được để trống
    if (!name) {
        document.getElementById("name-error").innerText = "Please enter your name.";
        hasError = true;
    }
    if (!email) {
        document.getElementById("email-error").innerText = "Please enter your email.";
        hasError = true;
    }
    if (!subject) {
        document.getElementById("subject-error").innerText = "Please enter a subject.";
        hasError = true;
    }
    if (!message) {
        document.getElementById("message-error").innerText = "Please enter your message.";
        hasError = true;
    }
    if (!phone) {
        document.getElementById("phone-error").innerText = "Please enter your phone number.";
        hasError = true;
    }

    // Kiểm tra định dạng email hợp lệ
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
        document.getElementById("email-error").innerText = "Please enter a valid email address.";
        hasError = true;
    }

    // Kiểm tra số điện thoại có độ dài từ 7 đến 11 chữ số
    let phonePattern = /^[0-9]{7,11}$/;
    if (phone && !phonePattern.test(phone)) {
        document.getElementById("phone-error").innerText = "Please enter a valid phone number (7-11 digits).";
        hasError = true;
    }

    // Nếu có lỗi thì không gửi email
    if (hasError) {
        return;
    }

    // Tạo đối tượng params cho email
    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        phone: phone
    };

    // Gửi email và xử lý phản hồi
    emailjs.send('service_71prpmv', 'template_kee4pq8', parms)
        .then(function(response) {
            alert("Email đã được gửi thành công.");
            location.reload();
        })
        .catch(function(error) {
            alert("Không thể gửi email: " + error);
        });
}



