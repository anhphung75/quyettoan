function LamTronSo(socanlamtron = 0, sole = 0) {
    if ((typeof socanlamtron !== 'number') || (typeof sole !== 'number') ||
        (socanlamtron < 0) || (sole < -9) || (sole > 9))
        return NaN;
    let s = parseFloat(socanlamtron) || 0;
    let l = parseInt(sole) || 0;
    if (l < 0) {
        let m = 10 ** Math.abs(l);
        let a = parseFloat(s / m);
        return a.toFixed(0) * m;
    } else {
        return s.toFixed(l);
    }
};

function setFocus(elementID) {
    let a = elementID.split("-");
    try { document.getElementById(elementID).focus(); }
    catch (err) { document.getElementById(a[0] + '-0').focus(); }
};

Vue.filter("TachHang", function (t) {
    if (Number(t) == NaN) return "";
    if (t == 0) return "-";
    return new Intl.NumberFormat("vi-VI", {
        useGrouping: true,
        minimumIntegerDigits: 1
    }).format(t);
});

Vue.filter("DocTien", function (t) {
    if (Number(t) == NaN) return "Không thể đọc !!!";
    if (t === 0) return "Không đồng.";
    var a = t.toString();
    var b = parseInt(t).toString();
    if (a.length !== b.length) return "Không thể đọc !!!";
    if (b.length > 21) return "Không thể đọc !!!";
    var listSo = [];
    for (let i = 0; i < a.length; i++) {
        listSo.push(parseInt(a.charAt(i)));
    }
    var chu = [
        "không",
        "một",
        "hai",
        "ba",
        "bốn",
        "năm",
        "sáu",
        "bảy",
        "tám",
        "chín"
    ];
    listSo = listSo.reverse();
    var listChu = [];
    for (let i = 0; i < listSo.length; i++) {
        switch (i % 3) {
            case 0:
                switch (listSo[i]) {
                    case 1:
                        if (listSo[i + 1] > 1) {
                            listChu.push("mốt");
                        } else {
                            listChu.push("một");
                        }
                        break;
                    case 5:
                        if (listSo[i + 1] > 0) {
                            listChu.push("lăm");
                        } else {
                            listChu.push("năm");
                        }
                        break;
                    default:
                        listChu.push(chu[listSo[i]]);
                }
                break;
            case 1:
                listChu.push("mươi");
                listChu.push(chu[listSo[i]]);
                break;
            case 2:
                listChu.push("trăm");
                listChu.push(chu[listSo[i]]);
                break;
        }
    }
    //điền hàng
    if (listSo.length > 3) {
        listChu.splice(5, 0, "ngàn");
    }
    if (listSo.length > 6) {
        listChu.splice(11, 0, "triệu");
    }
    if (listSo.length > 9) {
        listChu.splice(17, 0, "tỷ");
    }
    if (listSo.length > 12) {
        listChu.splice(23, 0, "ngàn tỷ");
    }
    if (listSo.length > 15) {
        listChu.splice(29, 0, "triệu tỷ");
    }
    if (listSo.length > 18) {
        listChu.splice(35, 0, "tỷ tỷ");
    }
    //tạo chuỗi
    listChu = listChu.reverse();
    var kq = '';
    for (let i = 0; i < listChu.length; i++) {
        kq = kq + listChu[i] + " ";
    }
    kq = kq + "đồng.";
    kq = kq.replace(/không trăm không mươi không triệu tỷ/g, "");
    kq = kq.replace(/không trăm không mươi không ngàn tỷ/g, "");
    kq = kq.replace(/không trăm không mươi không tỷ/g, "");
    kq = kq.replace(/không trăm không mươi không triệu/g, "");
    kq = kq.replace(/không trăm không mươi không ngàn/g, "");
    kq = kq.replace(/không trăm không mươi không/g, "");
    kq = kq.replace(/không mươi không/g, "");
    kq = kq.replace(/không mươi/g, "lẻ");
    kq = kq.replace(/một mươi không/g, "mười");
    kq = kq.replace(/một mươi/g, "mười");
    kq = kq.replace(/mươi không/g, "mươi");
    return kq;
});

Vue.filter("Up1st", function (m) {
    return m.charAt(0).toUpperCase() + m.slice(1);
});