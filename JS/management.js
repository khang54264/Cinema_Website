var app = angular.module('QLRCP', []);
//Quản lý suất chiếu
app.controller("SuatChieuCtrl", function ($scope, $http) {
    $scope.listSuatChieu;
    $scope.page = 1;
    $scope.pageSize = 10;

    $scope.moForm = function(){
        $scope.MaSuatChieu = '';
        $scope.MaPhim = '';
        $scope.MaPhongChieu = '';
        $scope.NgayChieu = '';
        $scope.GioChieu = '';
        $scope.LoaiChieu = '';
    }

    $scope.loadSuatChieu = function(){
        $http({
            method: 'POST',           
            data: { page: $scope.page, pageSize: $scope.pageSize, maSuatChieu: $scope.timsuatchieu },
            url: current_url + '/api/SuatChieuPhim/scp-search',
        }).then(function (response) {
            $scope.listSuatChieu = response.data.data;
        });
    }

    
    $scope.thongtinSuatChieu = function (MaSuatChieu) {
        $http({
            method: 'GET',
            url: current_url + '/api/SuatChieuPhim/scp-get-by-id/' + MaSuatChieu,
        }).then(function (response) {
            var scp = response.data;
            $scope.MaSuatChieu = scp.maSuatChieu;
            $scope.MaPhim = scp.maPhim;
            $scope.MaPhongChieu = scp.maPhongChieu;
            $scope.NgayChieu = scp.NgayChieu;
            $scope.GioChieu = scp.GioChieu;
            $scope.LoaiChieu = scp.LoaiChieu;
        });
    };

    $scope.createSuatChieu = function(){
        var SuatChieuData = {
            MaSuatChieu: $scope.MaSuatChieu,
            MaPhim: $scope.MaPhim,
            MaPhongChieu: $scope.MaPhongChieu,
            NgayChieu: $scope.NgayChieu,
            GioChieu: $scope.GioChieu,
            LoaiChieu: $scope.LoaiChieu
        };

        $http({
            method: 'POST',
            data: PhimData,
            url: current_url + '/api/SuatChieuPhim/create-scp',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            console.log(SuatChieuData)
            $scope.loadSuatChieu();
            alert('Thêm suất chiếu thành công!');
        }).catch(function (error) {         
            console.error('Lỗi:', error);
        });
    }

    $scope.updateSuatChieu =function(){
        var SuatChieuData = {
            MaSuatChieu: $scope.MaSuatChieu,
            MaPhim: $scope.MaPhim,
            MaPhongChieu: $scope.MaPhongChieu,
            NgayChieu: $scope.NgayChieu,
            GioChieu: $scope.GioChieu,
            LoaiChieu: $scope.LoaiChieu
        };   
        $http({
            method: 'POST',
            data: SuatChieuData,
            url: current_url + '/api/SuatChieuPhim/update-scp',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            $scope.loadSuatChieu();
            alert('Cập nhật suất chiếu thành công!');
        }).catch(function (error) {
            console.error('Lỗi:', error);
        });
    };

    $scope.deleteSuatChieu = function (MaSuatChieu) {
        var result = confirm("Bạn có muốn xóa suất chiếu này không?");
        console.log(MaSuatChieu);
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/SuatChieuPhim/delete-scp',
                headers: { 'Content-type': 'application/json' },
                data: { maSuatChieu: MaSuatChieu }
            }).then(function (response) {               
                $scope.loadSuatChieu();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Lỗi:', error);
            });   
        }
    };

    $scope.loadSuatChieu();
});
//Quản lý Vé
app.controller("VeCtrl", function ($scope, $http) {
    $scope.listVe;
    $scope.page = 1;
    $scope.pageSize = 10;

    $scope.moForm = function(){
        $scope.MaVe = '';
        $scope.MaSuatChieu = '';
        $scope.MaThanhVien = '';
        $scope.MaGhe = '';
        $scope.NgayMua = '';
        $scope.GiaVe = '';
        $scope.MaKhuyenMai = '';
    }

    $scope.loadVe = function(){
        $http({
            method: 'POST',           
            data: { page: $scope.page, pageSize: $scope.pageSize, maThanhVien: $scope.timmave },
            url: current_url + '/api/Ve/ve-search',
        }).then(function (response) {
            $scope.listVe = response.data.data;
        });
    }

    
    $scope.thongtinVe = function (MaVe) {
        $http({
            method: 'GET',
            url: current_url + '/api/Ve/ve-get-by-id/' + MaVe,
        }).then(function (response) {
            var ve = response.data;
            $scope.MaVe = ve.maVe;
            $scope.MaSuatChieu = ve.maSuatChieu;
            $scope.MaThanhVien = ve.maThanhVien;
            $scope.MaGhe = ve.maGhe;
            $scope.NgayMua = ve.ngayMua;
            $scope.GiaVe = ve.giaVe;
            $scope.MaKhuyenMai = ve.maKhuyenMai;
        });
    };

    $scope.createVe = function(){
        var VeData = {
            MaVe: $scope.MaVe,
            MaSuatChieu: $scope.MaSuatChieu,
            MaThanhVien: $scope.MaThanhVien,
            MaGhe: $scope.MaGhe,
            NgayMua: $scope.NgayMua,
            GiaVe: $scope.GiaVe,
            MaKhuyenMai: $scope.MaKhuyenMai
        };

        $http({
            method: 'POST',
            data: VeData,
            url: current_url + '/api/Ve/create-ve',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            console.log(VeData)
            $scope.loadVe();
            alert('Thêm vé thành công!');
        }).catch(function (error) {         
            console.error('Lỗi:', error);
        });
    }


    $scope.deleteVe = function (MaVe) {
        var result = confirm("Bạn có muốn hủy vé này không?");
        console.log(MaVe);
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/Ve/delete-ve',
                headers: { 'Content-type': 'application/json' },
                data: { maVe: MaVe }
            }).then(function (response) {               
                $scope.loadVe();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Lỗi:', error);
            });   
        }
    };

    $scope.loadVe();
});
//Quản lý Phòng chiếu
app.controller("PhongChieuCtrl", function ($scope, $http) {
    $scope.listPhongChieu;
    $scope.page = 1;
    $scope.pageSize = 10;

    $scope.moForm = function(){
        $scope.MaPhongChieu = '';
        $scope.TongSoGhe = '';
        $scope.TrangThai = '';
    }

    $scope.loadPhongChieu = function(){
        $http({
            method: 'POST',           
            data: { page: $scope.page, pageSize: $scope.pageSize, maPhongChieu: $scope.timphongchieu },
            url: current_url + '/api/PhongChieu/phongchieu-search',
        }).then(function (response) {
            $scope.listPhongChieu = response.data.data;
        });
    }

    
    $scope.thongtinPhongChieu = function (MaPhongChieu) {
        $http({
            method: 'GET',
            url: current_url + '/api/PhongChieu/phongchieu-get-by-id/' + MaPhongChieu,
        }).then(function (response) {
            var pc = response.data;
            $scope.MaPhongChieu = pc.maPhongChieu;
            $scope.TongSoGhe = pc.tongSoGhe;
            $scope.TrangThai = pc.trangThai;
        });
    };

    $scope.createPhongChieu = function(){
        var PhongChieuData = {
            MaPhongChieu: $scope.MaPhongChieu,
            TongSoGhe: $scope.TongSoGhe,
            TrangThai: $scope.TrangThai,
        };

        $http({
            method: 'POST',
            data: PhongChieuData,
            url: current_url + '/api/PhongChieu/create-phongchieu',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            console.log(PhongChieuData)
            $scope.loadPhongChieu();
            alert('Thêm phòng chiếu thành công!');
        }).catch(function (error) {         
            console.error('Lỗi:', error);
        });
    }

    $scope.updatePhongChieu =function(){
        var PhongChieuData = {
            MaPhongChieu: $scope.MaPhongChieu,
            TongSoGhe: $scope.TongSoGhe,
            TrangThai: $scope.TrangThai,
        };   
        $http({
            method: 'POST',
            data: PhongChieuData,
            url: current_url + '/api/PhongChieu/update-phongchieu',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            $scope.loadPhongChieu();
            alert('Cập nhật phòng chiếu thành công!');
        }).catch(function (error) {
            console.error('Lỗi:', error);
        });
    };

    $scope.deletePhongChieu = function (MaPhongChieu) {
        var result = confirm("Bạn có muốn xóa phòng chiếu này không?");
        console.log(MaPhongChieu);
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/PhongChieu/delete-phongchieu',
                headers: { 'Content-type': 'application/json' },
                data: { maPhongChieu: MaPhongChieu }
            }).then(function (response) {               
                $scope.loadPhongChieu();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Lỗi:', error);
            });   
        }
    };

    $scope.loadPhongChieu();
});
//Quản lý Phim
app.controller("PhimCtrl", function ($scope, $http) {
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

    $scope.createPhim = function(){
        var PhimData = {
            MaPhim: $scope.MaPhim,
            TenPhim: $scope.TenPhim,
            ThoiLuong: $scope.ThoiLuong,
            NgayRaMat: $scope.NgayRaMat,
            QuocGiaSanXuat: $scope.QuocGiaSanXuat,
            NhaSanXuat: $scope.NhaSanXuat,
            MaDaoDien: $scope.MaDaoDien
        };

        $http({
            method: 'POST',
            data: PhimData,
            url: current_url + '/api/Phim/create-phim',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            console.log(PhimData)
            $scope.loadPhim();
            alert('Thêm phim thành công!');
        }).catch(function (error) {         
            console.error('Lỗi:', error);
        });
    }

    $scope.updatePhim =function(){
        var PhimData = {
            MaPhim: $scope.MaPhim,
            TenPhim: $scope.TenPhim,
            ThoiLuong: $scope.ThoiLuong,
            NgayRaMat: $scope.NgayRaMat,
            QuocGiaSanXuat: $scope.QuocGiaSanXuat,
            NhaSanXuat: $scope.NhaSanXuat,
            MaDaoDien: $scope.MaDaoDien
        };   
        $http({
            method: 'POST',
            data: PhimData,
            url: current_url + '/api/Phim/update-phim',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            $scope.loadPhim();
            alert('Cập nhật phim thành công!');
        }).catch(function (error) {
            console.error('Lỗi:', error);
        });
    };

    $scope.deletePhim = function (MaPhim) {
        var result = confirm("Bạn có muốn xóa phim này không?");
        console.log(MaPhim);
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/Phim/delete-phim',
                headers: { 'Content-type': 'application/json' },
                data: { maPhim: MaPhim }
            }).then(function (response) {               
                $scope.loadPhim();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Lỗi:', error);
            });   
        }
    };

    $scope.loadPhim();
});
//Quản lý Thể loại
app.controller("TheLoaiCtrl", function ($scope, $http) {
    $scope.listTheLoai;
    $scope.page = 1;
    $scope.pageSize = 10;

    $scope.moForm = function(){
        $scope.MaTheLoai = '';
        $scope.TenTheLoai = '';
    }

    $scope.loadTheLoai = function(){
        $http({
            method: 'POST',           
            data: { page: $scope.page, pageSize: $scope.pageSize, tenTheLoai: $scope.timtheloai },
            url: current_url + '/api/TheLoai/theloai-search',
        }).then(function (response) {
            $scope.listTheLoai = response.data.data;
        });
    }

    
    $scope.thongtinTheLoai = function (MaTheLoai) {
        $http({
            method: 'GET',
            url: current_url + '/api/TheLoai/theloai-get-by-id/' + MaTheLoai,
        }).then(function (response) {
            var tl = response.data;
            $scope.MaTheLoai = tl.maTheLoai;
            $scope.TenTheLoai = tl.tenTheLoai;
        });
    };

    $scope.createTheLoai = function(){
        var TheLoaiData = {
            MaTheLoai: $scope.MaTheLoai,
            TenTheLoai: $scope.TenTheLoai,
        };

        $http({
            method: 'POST',
            data: TheLoaiData,
            url: current_url + '/api/TheLoai/create-theloai',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            console.log(TheLoaiData)
            $scope.loadTheLoai();
            alert('Thêm thể loại thành công!');
        }).catch(function (error) {         
            console.error('Lỗi:', error);
        });
    }

    $scope.updateTheLoai =function(){
        var TheLoaiData = {
            MaTheLoai: $scope.MaTheLoai,
            TenTheLoai: $scope.TenTheLoai,
        };
        $http({
            method: 'POST',
            data: TheLoaiData,
            url: current_url + '/api/TheLoai/update-theloai',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            $scope.loadTheLoai();
            alert('Cập nhật thể loại thành công!');
        }).catch(function (error) {
            console.error('Lỗi:', error);
        });
    };

    $scope.deleteTheLoai = function (MaTheLoai) {
        var result = confirm("Bạn có muốn xóa thể loại này không?");
        console.log(MaTheLoai);
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/TheLoai/delete-theloai',
                headers: { 'Content-type': 'application/json' },
                data: { maTheLoai: MaTheLoai }
            }).then(function (response) {               
                $scope.loadTheLoai();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Lỗi:', error);
            });   
        }
    };

    $scope.loadTheLoai();
});
//Quản lý khuyến mãi
app.controller("KhuyenMaiCtrl", function ($scope, $http) {
    $scope.listKhuyenMai;
    $scope.page = 1;
    $scope.pageSize = 10;

    $scope.moForm = function(){
        $scope.MaKhuyenMai = '';
        $scope.TenKhuyenMai = '';
        $scope.MucKhuyenMai = '';
        $scope.ThoiGian = '';
    }

    $scope.loadKhuyenMai = function(){
        $http({
            method: 'POST',           
            data: { page: $scope.page, pageSize: $scope.pageSize, tenKhuyenMai: $scope.timkhuyenmai },
            url: current_url + '/api/KhuyenMai/khuyenmai-search',
        }).then(function (response) {
            $scope.listKhuyenMai = response.data.data;
        });
    }

    
    $scope.thongtinKhuyenMai = function (MaKhuyenMai) {
        $http({
            method: 'GET',
            url: current_url + '/api/KhuyenMai/khuyenmai-get-by-id/' + MaKhuyenMai,
        }).then(function (response) {
            var km = response.data;
            $scope.MaKhuyenMai = km.maKhuyenMai;
            $scope.TenKhuyenMai = km.tenKhuyenMai;
            $scope.MucKhuyenMai = km.mucKhuyenMai;
            $scope.ThoiGian = km.thoiGian;
        });
    };

    $scope.createKhuyenMai = function(){
        var KhuyenMaiData = {
            MaKhuyenMai: $scope.MaKhuyenMai,
            TenKhuyenMai: $scope.TenKhuyenMai,
            MucKhuyenMai: $scope.MucKhuyenMai,
            ThoiGian: $scope.ThoiGian,
        };

        $http({
            method: 'POST',
            data: KhuyenMaiData,
            url: current_url + '/api/KhuyenMai/create-khuyenmai',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            console.log(KhuyenMaiData)
            $scope.loadKhuyenMai();
            alert('Thêm khuyến mãi thành công!');
        }).catch(function (error) {         
            console.error('Lỗi:', error);
        });
    }

    $scope.updateKhuyenMai =function(){
        var KhuyenMaiData = {
            MaKhuyenMai: $scope.MaKhuyenMai,
            TenKhuyenMai: $scope.TenKhuyenMai,
            MucKhuyenMai: $scope.MucKhuyenMai,
            ThoiGian: $scope.ThoiGian,
        };
        $http({
            method: 'POST',
            data: KhuyenMaiData,
            url: current_url + '/api/KhuyenMai/update-khuyenmai',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            $scope.loadKhuyenMai();
            alert('Cập nhật khuyến mãi thành công!');
        }).catch(function (error) {
            console.error('Lỗi:', error);
        });
    };

    $scope.deleteKhuyenMai = function (MaKhuyenMai) {
        var result = confirm("Bạn có muốn xóa khuyến mãi này không?");
        console.log(MaKhuyenMai);
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/KhuyenMai/delete-khuyenmai',
                headers: { 'Content-type': 'application/json' },
                data: { maKhuyenMai: MaKhuyenMai }
            }).then(function (response) {               
                $scope.loadKhuyenMai();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Lỗi:', error);
            });   
        }
    };

    $scope.loadKhuyenMai();
});
//Quản lý thành viên
app.controller("ThanhVienCtrl", function ($scope, $http) {
    $scope.listThanhVien;
    $scope.page = 1;
    $scope.pageSize = 10;

    $scope.moForm = function(){
        $scope.MaThanhVien = '';
        $scope.TenThanhVien = '';
        $scope.NgaySinh = '';
        $scope.GioiTinh = '';
        $scope.Email = '';
        $scope.SoDienThoai = '';
        $scope.TongChiTieu = '';
    }

    $scope.loadThanhVien = function(){
        $http({
            method: 'POST',           
            data: { page: $scope.page, pageSize: $scope.pageSize, tenThanhVien: $scope.timthanhvien },
            url: current_url + '/api/ThanhVien/thanhvien-search',
        }).then(function (response) {
            $scope.listThanhVien = response.data.data;
        });
    }

    
    $scope.thongtinThanhVien = function (MaThanhVien) {
        $http({
            method: 'GET',
            url: current_url + '/api/ThanhVien/thanhvien-get-by-id/' + MaThanhVien,
        }).then(function (response) {
            var tv = response.data;
            $scope.MaThanhVien = tv.maThanhVien;
            $scope.TenThanhVien = tv.tenThanhVien;
            $scope.NgaySinh = tv.ngaySinh;
            $scope.GioiTinh = tv.gioiTinh;
            $scope.Email = tv.email;
            $scope.SoDienThoai = tv.soDienThoai;
            $scope.TongChiTieu = tv.tongChiTieu;
        });
    };

    $scope.createThanhVien = function(){
        var ThanhVienData = {
            MaThanhVien: $scope.MaThanhVien,
            TenThanhVien: $scope.TenThanhVien,
            NgaySinh: $scope.NgaySinh,
            GioiTinh: $scope.GioiTinh,
            Email: $scope.Email,
            SoDienThoai: $scope.SoDienThoai,
            TongChiTieu: $scope.TongChiTieu
        };

        $http({
            method: 'POST',
            data: ThanhVienData,
            url: current_url + '/api/ThanhVien/create-thanhvien',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            console.log(ThanhVienData)
            $scope.loadThanhVien();
            alert('Thêm thành viên thành công!');
        }).catch(function (error) {         
            console.error('Lỗi:', error);
        });
    }

    $scope.updateThanhVien =function(){
        var ThanhVienData = {
            MaThanhVien: $scope.MaThanhVien,
            TenThanhVien: $scope.TenThanhVien,
            NgaySinh: $scope.NgaySinh,
            GioiTinh: $scope.GioiTinh,
            Email: $scope.Email,
            SoDienThoai: $scope.SoDienThoai,
            TongChiTieu: $scope.TongChiTieu
        };  
        $http({
            method: 'POST',
            data: ThanhVienData,
            url: current_url + '/api/ThanhVien/update-thanhvien',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            $scope.loadThanhVien();
            alert('Cập nhật thành viên thành công!');
        }).catch(function (error) {
            console.error('Lỗi:', error);
        });
    };

    $scope.deleteThanhVien = function (MaThanhVien) {
        var result = confirm("Bạn có muốn xóa thành viên này không?");
        console.log(MaThanhVien);
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/ThanhVien/delete-thanhvien',
                headers: { 'Content-type': 'application/json' },
                data: { maThanhVien: MaThanhVien }
            }).then(function (response) {               
                $scope.loadThanhVien();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Lỗi:', error);
            });   
        }
    };

    $scope.loadThanhVien();
});
//Quản lý nhân viên
app.controller("NhanVienCtrl", function ($scope, $http) {
    $scope.listNhanVien;
    $scope.page = 1;
    $scope.pageSize = 10;

    $scope.moForm = function(){
        $scope.MaNhanVien = '';
        $scope.TenNhanVien = '';
        $scope.NgaySinh = '';
        $scope.GioiTinh = '';
        $scope.Email = '';
        $scope.SoDienThoai = '';
    }

    $scope.loadNhanVien = function(){
        $http({
            method: 'POST',           
            data: { page: $scope.page, pageSize: $scope.pageSize, tenNhanVien: $scope.timnhanvien },
            url: current_url + '/api/NhanVien/nhanvien-search',
        }).then(function (response) {
            $scope.listNhanVien = response.data.data;
        });
    }

    
    $scope.thongtinNhanVien = function (MaNhanVien) {
        $http({
            method: 'GET',
            url: current_url + '/api/NhanVien/nhanvien-get-by-id/' + MaNhanVien,
        }).then(function (response) {
            var tv = response.data;
            $scope.MaNhanVien = tv.maNhanVien;
            $scope.TenNhanVien = tv.tenNhanVien;
            $scope.NgaySinh = tv.ngaySinh;
            $scope.GioiTinh = tv.gioiTinh;
            $scope.Email = tv.email;
            $scope.SoDienThoai = tv.soDienThoai;
        });
    };

    $scope.createNhanVien = function(){
        var NhanVienData = {
            MaNhanVien: $scope.MaNhanVien,
            TenNhanVien: $scope.TenNhanVien,
            NgaySinh: $scope.NgaySinh,
            GioiTinh: $scope.GioiTinh,
            Email: $scope.Email,
            SoDienThoai: $scope.SoDienThoai,
        };

        $http({
            method: 'POST',
            data: NhanVienData,
            url: current_url + '/api/NhanVien/create-nhanvien',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            console.log(NhanVienData)
            $scope.loadNhanVien();
            alert('Thêm nhân viên thành công!');
        }).catch(function (error) {         
            console.error('Lỗi:', error);
        });
    }

    $scope.updateNhanVien =function(){
        var NhanVienData = {
            MaNhanVien: $scope.MaNhanVien,
            TenNhanVien: $scope.TenNhanVien,
            NgaySinh: $scope.NgaySinh,
            GioiTinh: $scope.GioiTinh,
            Email: $scope.Email,
            SoDienThoai: $scope.SoDienThoai,
        };  
        $http({
            method: 'POST',
            data: NhanVienData,
            url: current_url + '/api/NhanVien/update-nhanvien',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            $scope.loadNhanVien();
            alert('Cập nhật nhân viên thành công!');
        }).catch(function (error) {
            console.error('Lỗi:', error);
        });
    };

    $scope.deleteNhanVien = function (MaNhanVien) {
        var result = confirm("Bạn có muốn xóa nhân viên này không?");
        console.log(MaNhanVien);
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/NhanVien/delete-nhanvien',
                headers: { 'Content-type': 'application/json' },
                data: { maNhanVien: MaNhanVien }
            }).then(function (response) {               
                $scope.loadNhanVien();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Lỗi:', error);
            });   
        }
    };

    $scope.loadNhanVien();
});
//Quản lý đạo diễn
app.controller("DaoDienCtrl", function ($scope, $http) {
    $scope.listDaoDien;
    $scope.page = 1;
    $scope.pageSize = 10;

    $scope.moForm = function(){
        $scope.MaDaoDien = '';
        $scope.TenDaoDien = '';
        $scope.NgaySinh = '';
        $scope.ChieuCao = '';
        $scope.QuocTich = '';
    }

    $scope.loadDaoDien = function(){
        $http({
            method: 'POST',           
            data: { page: $scope.page, pageSize: $scope.pageSize, tenDaoDien: $scope.timdaodien },
            url: current_url + '/api/DaoDien/daodien-search',
        }).then(function (response) {
            $scope.listDaoDien = response.data.data;
        });
    }

    
    $scope.thongtinDaoDien = function (MaDaoDien) {
        $http({
            method: 'GET',
            url: current_url + '/api/DaoDien/daodien-get-by-id/' + MaDaoDien,
        }).then(function (response) {
            var tv = response.data;
            $scope.MaDaoDien = tv.maDaoDien;
            $scope.TenDaoDien = tv.tenDaoDien;
            $scope.NgaySinh = tv.ngaySinh;
            $scope.ChieuCao = tv.chieuCao;
            $scope.QuocTich = tv.quocTich;
        });
    };

    $scope.createDaoDien = function(){
        var DaoDienData = {
            MaDaoDien: $scope.MaDaoDien,
            TenDaoDien: $scope.TenDaoDien,
            NgaySinh: $scope.NgaySinh,
            ChieuCao: $scope.ChieuCao,
            QuocTich: $scope.QuocTich,
        };

        $http({
            method: 'POST',
            data: DaoDienData,
            url: current_url + '/api/DaoDien/create-daodien',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            console.log(DaoDienData)
            $scope.loadDaoDien();
            alert('Thêm đạo diễn thành công!');
        }).catch(function (error) {         
            console.error('Lỗi:', error);
        });
    }

    $scope.updateDaoDien =function(){
        var DaoDienData = {
            MaDaoDien: $scope.MaDaoDien,
            TenDaoDien: $scope.TenDaoDien,
            NgaySinh: $scope.NgaySinh,
            ChieuCao: $scope.ChieuCao,
            QuocTich: $scope.QuocTich,
        };
        $http({
            method: 'POST',
            data: DaoDienData,
            url: current_url + '/api/DaoDien/update-daodien',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            $scope.loadDaoDien();
            alert('Cập nhật đạo diễn thành công!');
        }).catch(function (error) {
            console.error('Lỗi:', error);
        });
    };

    $scope.deleteDaoDien = function (MaDaoDien) {
        var result = confirm("Bạn có muốn xóa đạo diễn này không?");
        console.log(MaDaoDien);
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/DaoDien/delete-daodien',
                headers: { 'Content-type': 'application/json' },
                data: { maDaoDien: MaDaoDien }
            }).then(function (response) {               
                $scope.loadDaoDien();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Lỗi:', error);
            });   
        }
    };

    $scope.loadDaoDien();
});
//Quản lý diễn viên
app.controller("DienVienCtrl", function ($scope, $http) {
    $scope.listDienVien;
    $scope.page = 1;
    $scope.pageSize = 10;

    $scope.moForm = function(){
        $scope.MaDienVien = '';
        $scope.TenDienVien = '';
        $scope.NgaySinh = '';
        $scope.ChieuCao = '';
        $scope.QuocTich = '';
    }

    $scope.loadDienVien = function(){
        $http({
            method: 'POST',           
            data: { page: $scope.page, pageSize: $scope.pageSize, tenDienVien: $scope.timdienvien },
            url: current_url + '/api/DienVien/dienvien-search',
        }).then(function (response) {
            $scope.listDienVien = response.data.data;
        });
    }

    
    $scope.thongtinDienVien = function (MaDienVien) {
        $http({
            method: 'GET',
            url: current_url + '/api/DienVien/dienvien-get-by-id/' + MaDienVien,
        }).then(function (response) {
            var tv = response.data;
            $scope.MaDienVien = tv.maDienVien;
            $scope.TenDienVien = tv.tenDienVien;
            $scope.NgaySinh = tv.ngaySinh;
            $scope.ChieuCao = tv.chieuCao;
            $scope.QuocTich = tv.quocTich;
        });
    };

    $scope.createDienVien = function(){
        var DienVienData = {
            MaDienVien: $scope.MaDienVien,
            TenDienVien: $scope.TenDienVien,
            NgaySinh: $scope.NgaySinh,
            ChieuCao: $scope.ChieuCao,
            QuocTich: $scope.QuocTich,
        };

        $http({
            method: 'POST',
            data: DienVienData,
            url: current_url + '/api/DienVien/create-dienvien',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            console.log(DienVienData)
            $scope.loadDienVien();
            alert('Thêm diễn viên thành công!');
        }).catch(function (error) {         
            console.error('Lỗi:', error);
        });
    }

    $scope.updateDienVien =function(){
        var DienVienData = {
            MaDienVien: $scope.MaDienVien,
            TenDienVien: $scope.TenDienVien,
            NgaySinh: $scope.NgaySinh,
            ChieuCao: $scope.ChieuCao,
            QuocTich: $scope.QuocTich,
        };
        $http({
            method: 'POST',
            data: DienVienData,
            url: current_url + '/api/DienVien/update-dienvien',
            headers: { 'Content-type': 'application/json' }
        }).then(function (response) {
            $scope.loadDienVien();
            alert('Cập nhật diễn viên thành công!');
        }).catch(function (error) {
            console.error('Lỗi:', error);
        });
    };

    $scope.deleteDienVien = function (MaDienVien) {
        var result = confirm("Bạn có muốn xóa diễn viên này không?");
        console.log(MaDienVien);
        if (result) {
            $http({
                method: 'DELETE',
                url: current_url + '/api/DienVien/delete-dienvien',
                headers: { 'Content-type': 'application/json' },
                data: { maDienVien: MaDienVien }
            }).then(function (response) {               
                $scope.loadDienVien();
                alert('Xóa thành công!');
            }).catch(function (error) {
                console.error('Lỗi:', error);
            });   
        }
    };

    $scope.loadDienVien();
});

//JSON
// //QL Suất Chiếu Phim
// function LaySCP() {
//     fetch('../JSON/suatchieuphim.json')
//     .then(response => response.json())
//     .then(data => {
//         localStorage.setItem("suatchieuphim", JSON.stringify(data));
//     }) 
//     .catch(error => console.error('Lỗi: ' + error));
// }
// LaySCP();
// LoadSCP();
// function LoadSCP() {
//     const Scp = JSON.parse(localStorage.getItem("suatchieuphim"));
//     if (Scp && Scp.suatchieuphim) {
//         const scplist = document.getElementById('listSuatChieuPhim');
//         var str = "";
//         Scp.suatchieuphim.forEach((scp) => {
//             str += `
//                 <tr class="dongsuatchieuphim">    
//                     <td id="idscp" class="oscp">${scp.masuatchieu}</td>
//                     <td id="tpscp" class="oscp">${scp.tenphim}</td>
//                     <td id="pcscp" class="oscp">${scp.maphongchieu}</td>
//                     <td id="ncscp" class="oscp">${scp.ngaychieu}</td>
//                     <td id="gcscp" class="oscp">${scp.giochieu}</td>
//                     <td id="lcscp" class="oscp">${scp.loaichieu}</td>
//                     <td id="suascp" class="oscp"><button class="btnSua"><i class="fa-regular fa-pen-to-square"></button></i></td>
//                     <td id="xoascp" class="oscp"><button class="btnXoa"><i class="fa-solid fa-trash"></i></button></td>          
//                 </tr>                                                    
//             `;
//         });
//         scplist.innerHTML = str;
//     } else {
//         alert('Dữ liệu suất chiếu phim không tồn tại trong localStorage.');
//     }
// }
// function ThemSCP() {    
//     var list = JSON.parse(localStorage.getItem("suatchieuphim")) || { suatchieuphim: [] };
//     var idscp = document.getElementById("tscpmascp").value;
//     var tenphim = document.getElementById("tscptpscp").value;
//     var pcscp = document.getElementById("tscpphongchieu").value;
//     var ncscp = document.getElementById("tscpngaychieu").value;
//     var gcscp = document.getElementById("tscpgiochieu").value;
//     var lcscp = document.getElementById("tscploaichieu").value;
//     if (idscp === null || idscp === "") {
//         idscp = "SC";
//     }
//     if (tenphim === null || tenphim === "choose") {
//         alert("Vui lòng chọn phim!");
//         return false;
//     }
//     else if (pcscp === null || pcscp === "choose") {
//         alert("Vui lòng chọn phòng chiếu!");
//         return false;
//     } else if (ncscp === null || ncscp === "") {
//         alert("Vui lòng chọn ngày!");
//         return false;
//     }
//     else if (gcscp === null || gcscp === "") {
//         alert("Vui lòng chọn giờ!");
//         return false;
//     }
//     else if (lcscp === null || lcscp === "choose")
//     {
//         alert("Vui lòng chọn loại chiếu!");
//         return false;
//     }
//     for (var x of list.suatchieuphim) {
//         if (x.masuatchieu === idscp  ) {
//             alert("Mã suất chiếu đã tồn tại! Vui lòng nhập lại!")
//             return false;
//         }
//     }
//     var SCP = {
//         "masuatchieu": idscp,
//         "tenphim": tenphim,
//         "maphongchieu": pcscp,
//         "ngaychieu": ncscp,
//         "giochieu": gcscp,
//         "loaichieu": lcscp
//     };   
//     list.suatchieuphim.push(SCP);
//     localStorage.setItem("suatchieuphim", JSON.stringify(list));    
//     alert("Đã thêm thành công!");
//     LoadSCP();
// }
// //QL Ve
// function LayVe() {
//     fetch('../JSON/ve.json')
//     .then(response => response.json())
//     .then(data => {
//         localStorage.setItem("ve", JSON.stringify(data));
//     }) 
//     .catch(error => console.error('Lỗi: ' + error));
// }
// LayVe();
// LoadVe();
// function LoadVe() {
//     const Ve = JSON.parse(localStorage.getItem("ve"));
//     if (Ve && Ve.ve) {
//         const velist = document.getElementById('listTicket');
//         var str = "";
//         Ve.ve.forEach((t) => {
//             str += `
//                 <tr class="dongve">    
//                     <td id="idve" class="ove">${t.mave}</td>
//                     <td id="tpve" class="ove">${t.mathanhvien}</td>
//                     <td id="pcve" class="ove">${t.hoten}</td>
//                     <td id="ncve" class="ove">${t.sodienthoai}</td>
//                     <td id="gcve" class="ove">${t.phim}</td>
//                     <td id="lcve" class="ove">${t.suatchieu}</td>
//                     <td id="suave" class="ove"><button class="btnSua"><i class="fa-regular fa-pen-to-square"></button></i></td>
//                     <td id="xoave" class="ove"><button class="btnXoa"><i class="fa-solid fa-trash"></i></button></td>          
//                 </tr>                                                    
//             `;
//         });
//         velist.innerHTML = str;
//     } else {
//         alert('Dữ liệu vé không tồn tại trong localStorage.');
//     }
// }
// //QL Phim
// function LayP() {
//     fetch('../JSON/phim.json')
//     .then(response => response.json())
//     .then(data => {
//         localStorage.setItem("phim", JSON.stringify(data));
//     }) 
//     .catch(error => console.error('Lỗi: ' + error));
// }
// LayP();
// LoadP();
// function LoadP() {
//     const dsphim = JSON.parse(localStorage.getItem("phim"));
//     if (dsphim && dsphim.phim) {
//         const phimlist = document.getElementById('listPhim');
//         var str = "";
//         dsphim.phim.forEach((p) => {
//             str += `
                // <tr class="dongphim">    
                //     <td id="mpp" class="op">${p.maphim}</td>
                //     <td id="tpp" class="op">${p.tenphim}</td>
                //     <td id="tlp" class="op">${p.thoiluong} phút</td>
                //     <td id="nrmp" class="op">${p.ngayramat}</td>
                //     <td id="ddp" class="op">${p.daodien}</td>
                //     <td id="qgsxp" class="op">${p.quocgiasx}</td>
                //     <td id="nsxp" class="op">${p.nhasanxuat}</td>
                //     <td id="suap" class="op"><button class="btnSua"><i class="fa-regular fa-pen-to-square"></button></i></td>
                //     <td id="xoap" class="op"><button class="btnXoa"><i class="fa-solid fa-trash"></i></button></td>          
                // </tr>                                                    
//             `;
//         });
//         phimlist.innerHTML = str;
//     } else {
//         alert('Dữ liệu phim không tồn tại trong localStorage.');
//     }
// }
// function ThemP() {    
//     var list = JSON.parse(localStorage.getItem("phim")) || { phim: [] };
//     var mpp = document.getElementById("tpmap").value;
//     var tpp = document.getElementById("tptp").value;
//     var tlp = document.getElementById("tptl").value;
//     var nrmp = document.getElementById("tpnrm").value;
//     var ddp = document.getElementById("tpdd").value;
//     var qgsxp = document.getElementById("tpqgsx").value;
//     var nsxp = document.getElementById("tpnsx").value;
//     if (mpp === null || mpp === "") {
//         alert("Vui lòng nhập mã phim!");
//         return false;
//     }
//     if (tpp === null || tpp === "") {
//         alert("Vui lòng nhập tên phim!");
//         return false;
//     }
//     else if (tlp === null || tlp === "") {
//         alert("Vui lòng nhập thời lượng phim!");
//         return false;
//     } 
//     else if (nrmp === null || nrmp === "") {
//         nrmp="";
//     }
//     else if (ddp === null || ddp === "choose") {
//         ddp="";
//     }
//     else if (qgsxp === null || qgsxp === "") {
//         alert("Vui lòng nhập quốc gia sản xuất phim!");
//         return false;
//     }
//     else if (nsxp === null || nsxp === "")
//     {
//         alert("Vui lòng nhập nhà sản xuất!");
//         return false;
//     }
//     for (var x of list.phim) {
//         if (x.maphim == mpp  ) {
//             alert("Mã phim đã tồn tại! Vui lòng nhập lại!")
//             return false;
//         }
//     }
//     var Phim = {
//         "maphim": mpp,
//         "tenphim": tpp,
//         "thoiluong": tlp,
//         "ngayramat": nrmp,
//         "daodien" : ddp,
//         "quocgiasx" : qgsxp,
//         "nhasanxuat" : nsxp
//     };   
//     list.phim.push(Phim);
//     localStorage.setItem("phim", JSON.stringify(list));    
//     alert("Đã thêm thành công!");
//     LoadP();
// }