var current_url = "https://localhost:44317";
var app = angular.module('QLRCP', []);
//Đăng nhập
app.controller("LoginCtrl", function ($scope, $http) {
    $scope.username = '';
    $scope.password = '';
    $scope.errorMessage = '';

    $scope.login = function() {
        var data = {
            username: $scope.username,
            password: $scope.password
        };
        $http.post('https://localhost:44368/api/User/login', data)
        .then(function(response) {
            alert('Đăng nhập thành công.');
            window.location.href = 'management.html';            
        })
        .catch(function(error) {
            alert('Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
        });
    };
});
//Tìm kiếm Phim
app.controller("TimKiemCtrl", function ($scope, $http) {
    $scope.listPhim;
    $scope.page = 1;
    $scope.pageSize = 10;

    $scope.moForm = function(){
        $scope.MaPhim = '';
        $scope.TenPhim = '';
        $scope.ThoiLuong = '';
        $scope.NgayRaMat = '';
        $scope.QuocGiaSanXuat = '';
        $scope.NhaSanXuat = '';
        $scope.MaDaoDien = '';
    }

    $scope.loadPhim = function(){
        $http({
            method: 'POST',           
            data: { page: $scope.page, pageSize: $scope.pageSize, tenPhim: $scope.timtenphim },
            url: current_url + '/api/Phim/phim-search',
        }).then(function (response) {
            $scope.listPhim = response.data.data;
        });
    }

    
    $scope.thongtinPhim = function (MaPhim) {
        $http({
            method: 'GET',
            url: current_url + '/api/Phim/phim-get-by-id/' + MaPhim,
        }).then(function (response) {
            var phim = response.data;
            $scope.MaPhim = phim.maPhim;
            $scope.TenPhim = phim.tenPhim;
            $scope.ThoiLuong = phim.thoiGianPhim;
            $scope.NgayRaMat = phim.ngayRaMat;
            $scope.QuocGiaSanXuat = phim.quocGiaSanXuat;
            $scope.NhaSanXuat = phim.nhaSanXuat;
            $scope.MaDaoDien = phim.maDaoDien;
        });
    };
});

//Show/Hide Password
function showPass() {
    var x = document.getElementById("myPass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function showRegisterPass() {
    var x = document.getElementById("myRPass1");
    var y = document.getElementById("myRPass2");
    if (x.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}
// //Login
// function login() {
//     // Lấy giá trị từ form
//     var em = document.getElementById('email').value;
//     var pass = document.getElementById('myPass').value;
//     var i, count;
//     fetch('../JSON/taikhoan.json')
//     .then(response => response.json())
//     .then(data => {
//         localStorage.setItem("taikhoan", JSON.stringify(data));
//     }) 
//     .catch(error => console.error('Lỗi: ' + error));

//     const account = JSON.parse(localStorage.getItem("taikhoan"));
//     if (account && account.taikhoan) {
//         account.taikhoan.array.forEach(tk => {
//             if(tk.email===em && tk.password===pass && tk.permission===0) {
//                 alert('Đăng nhập admin thành công')
//             } else if(tk.email===em && tk.password===pass && tk.permission===1) {
//                 alert('Đăng nhập user thành công')
//             } else {
//                 alert('Sai tên đăng nhập hoặc mật khẩu');
//             }
//         });
//     }
// }
//Slideshow quảng cáo
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}
//Mở các tab
function onReload(){
    openTab(event, 'PHIMDANGCHIEU');
    openBlog(event, 'BINHLUANPHIM');
}
window.onload = onReload;

//Tab phim đang chiếu, phim sắp chiếu
openTab(event, 'PHIMDANGCHIEU');
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//Tab blog bình luận phim, blog điện ảnh
openBlog(event, 'BINHLUANPHIM');
function openBlog(evt, blogName) {
    var i, blogcontent, bloglinks;

    blogcontent = document.getElementsByClassName("blogcontent");
    for (i = 0; i < blogcontent.length; i++) {
        blogcontent[i].style.display = "none";
    }

    bloglinks = document.getElementsByClassName("bloglinks");
        for (i = 0; i < bloglinks.length; i++) {
        bloglinks[i].className = bloglinks[i].className.replace(" active", "");
    }
    document.getElementById(blogName).style.display = "block";
    evt.currentTarget.className += " active";
}

