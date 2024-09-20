var current_url = "https://localhost:44317";
var app = angular.module('QLRCP', []);
//Tìm kiếm Phim
app.controller("MuaVeCtrl", function ($scope, $http) {
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
//Tab thao tác mua vé
openTab(event, 'CHONPHIMSUAT', 'tabCHONPHIMSUAT');
function openTab(evt, tabName, tabLink) {
    var i, tabcontent;
    const vebtn = document.getElementById("vebtn");
    var str = "";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // tablinks = document.getElementsByClassName("tablinks");
    //     for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className += tablinks[i].className.replace(" active", "");
    // }
    document.getElementById(tabLink).className += " active";
    document.getElementById(tabName).style.display = "block";
    if (tabName==='CHONGHE'){
        str += `
            <button class="ve-return" onclick="returnTab(event, 'CHONPHIMSUAT')">Quay Lại</button> 
            <button class="ve-next" onclick="openTab(event, 'THANHTOAN', 'tabTHANHTOAN')">Tiếp tục</button>
        `;
        vebtn.innerHTML = str;
    // } else if (tabName==='CHONDICHVU'){
    //     str += `
    //         <button class="ve-return" onclick="returnTab(event, 'CHONGHE')">Quay Lại</button> 
    //         <button class="ve-next" onclick="openTab(event, 'THANHTOAN', 'tabTHANHTOAN')">Tiếp tục</button>
    //     `;
    //     vebtn.innerHTML = str;
    } else if (tabName==='THANHTOAN'){
        str += `
            <button class="ve-return" onclick="returnTab(event, 'CHONGHE')">Quay Lại</button> 
            <button class="ve-next" onclick="openTab(event, 'XACNHAN', 'tabXACNHAN')">Tiếp tục</button>
        `;
        vebtn.innerHTML = str;
    } else if (tabName==='XACNHAN'){
        str += `
            <button class="ve-return" onclick="returnTab(event, 'THANHTOAN')">Quay Lại</button> 
            <button class="ve-next" onclick="">Tiếp tục</button>
        `;
        vebtn.innerHTML = str;
    }
    // evt.currentTarget.className += " active";
}
function returnTab(evt, tabName) {
    var i, tabcontent, tablinks;
    const vebtn = document.getElementById("vebtn");
    var str = "";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // tablinks = document.getElementsByClassName("tablinks");
    //     for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    
    document.getElementById(tabName).style.display = "block";
    if (tabName==='CHONPHIMSUAT'){
        tablinks = document.getElementById('tabCHONGHE');
        tablinks.className = tablinks.className.replace(" active", "");
        str += `
            <button class="ve-return" onclick="">Quay Lại</button> 
            <button class="ve-next" onclick="openTab(event, 'CHONGHE', 'tabCHONGHE')">Tiếp tục</button>
        `;
        vebtn.innerHTML = str;
    } else if (tabName==='CHONGHE'){
        tablinks = document.getElementById('tabTHANHTOAN');
        tablinks.className = tablinks.className.replace(" active", "");
        str += `
            <button class="ve-return" onclick="returnTab(event, 'CHONPHIMSUAT')">Quay Lại</button> 
            <button class="ve-next" onclick="openTab(event, 'THANHTOAN', 'tabTHANHTOAN')">Tiếp tục</button>
        `;
        vebtn.innerHTML = str;
    // } else if (tabName==='CHONDICHVU'){
    //     tablinks = document.getElementById('tabTHANHTOAN')
    //     tablinks.className = tablinks.className.replace(" active", "");
    //     str += `
    //         <button class="ve-return" onclick="returnTab(event, 'CHONGHE')">Quay Lại</button> 
    //         <button class="ve-next" onclick="openTab(event, 'THANHTOAN', 'tabTHANHTOAN')">Tiếp tục</button>
    //     `;
    //     vebtn.innerHTML = str;
    } else if (tabName==='THANHTOAN'){
        tablinks = document.getElementById('tabXACNHAN')
        tablinks.className = tablinks.className.replace(" active", "");
        str += `
            <button class="ve-return" onclick="returnTab(event, 'CHONGHE')">Quay Lại</button> 
            <button class="ve-next" onclick="openTab(event, 'XACNHAN', 'tabXACNHAN')">Tiếp tục</button>
        `;
        vebtn.innerHTML = str;
    }
    // evt.currentTarget.className += " active";
}
//Choose list
function openList(listName){
    var list = document.getElementById(listName);
    if (list.style.display==="block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
}
//Chọn phim
function selectFilm(evt, filmName) {
    var i, film;
    film = document.getElementsByClassName("movie-image");
        for(i = 0; i < film.length; i++) {
            film[i].className = film[i].className.replace(" selected", "");
        }      
    evt.currentTarget.className += " selected";
}
//Chọn ngày
function selectDay(evt, date) {
    var i, day;
    day = document.getElementsByClassName("days-btn");
    for(i = 0; i < day.length; i++) {
        day[i].className = day[i].className.replace(" selected", "");
    }      
evt.currentTarget.className += " selected";
}
//Chọn suất chiếu
function selectSuatChieu(evt, suatchieu) {
    var i, sc;
    sc = document.getElementsByClassName("hour-btn");
    for(i = 0; i < sc.length; i++) {
        sc[i].className = sc[i].className.replace(" selected", "");
    }
    evt.currentTarget.className += " selected";
}
// //Chọn dịch vụ
// function LayDV() {
//     fetch('../JSON/dichvu.json')
//     .then(response => response.json())
//     .then(data => {
//         localStorage.setItem("dichvu", JSON.stringify(data));
//     }) 
//     .catch(error => console.error('Lỗi: ' + error));
// }
// LayDV();
// LoadDV();
// function LoadDV() {
//     const Ldichvu = JSON.parse(localStorage.getItem("dichvu"));
//     if (Ldichvu && Ldichvu.dichvu) {
//         const dvlist = document.getElementById('listDichVu');
//         var str = "";
//         Ldichvu.dichvu.forEach((dv) => {
//             str += `
//                 <div class="dichvu">
//                     <div class="anhdichvu"><img src="${dv.anhminhhoa}"></div>
//                     <div>
//                         <div class="tendichvu"><span>${dv.tendichvu}</span></div>
//                         <div class="motadichvu"><span>${dv.mota}</span></div>
//                         <div class="giatien">
//                             <div class="gia"><span>Giá: ${dv.giatien}&nbsp;đ</span></div>
//                             <div class="sl">
//                                 <button onclick="tru()">-</button>
//                                 <input type="text" readonly value="0" id="sl">
//                                 <button onclick="cong()">+</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>                                                 
//             `;
//         });
//         dvlist.innerHTML = str;
//     } else {
//         alert('Dữ liệu dịch vụ không tồn tại trong localStorage.');
//     }
// }

