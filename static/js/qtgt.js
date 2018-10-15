function lamTronSo(socanlamtron = 0, sole = 0) {
    var soCanlamtron,soLe;
    if ((typeof socanlamtron !== 'number') || (typeof sole !== 'number') || 
        (socanlamtron<0) || (sole<0) || (sole>9))
        return NaN;
        soCanlamtron = parseFloat(socanlamtron) || 0;
        soLe=parseInt(sole) || 0;
    return soCanlamtron.toFixed(soLe);
};
function setFocus(elementID) {let a= elementID.split("-");
    try {document.getElementById(elementID).focus();}
    catch(err) {document.getElementById(a[0] +'-0').focus();}
};
Vue.filter('currency',function(t){
    if (Number(t) == NaN)
        return '';
    if (t==0)
        return '-';
    return new Intl.NumberFormat('vi-VI', 
    {useGrouping:true,minimumIntegerDigits:1}).format(t);
});

/* dữ liệu tham chiếu */
var chiphi={
    "DC201810121011": //PL + yyyymmddhhmm
        {chiphiid:1,
        diengiai:"Cắt mặt nhựa và BTXM",
        dvt:"mét",
        masovattu:"",
        baocao_qtvt:"",
        baocao_qtgt:"",
        dm_beton:0,
        dm_van:0,
        dm_cat_on:0,
        dm_cat_oc:0},
    "VT201810121011": //PL + yyyymmddhhmm
        {chiphiid:2,
        diengiai:"Đai khởi thủy 100 x 3/4'",
        dvt:"cái",
        masovattu:"",
        baocao_qtvt:"",
        baocao_qtgt:"",
        dm_beton:0,
        dm_van:0,
        dm_cat_on:0,
        dm_cat_oc:0},
    "TL201810121011": //PL + yyyymmddhhmm
        {chiphiid:3,
        diengiai:"Bê tông xi măng",
        dvt:"m2",
        masovattu:"",
        baocao_qtvt:"",
        baocao_qtgt:"",
        dm_beton:0,
        dm_van:0,
        dm_cat_on:0,
        dm_cat_oc:0}
};
var baogia={
    "20181012":{
        "DC201810121011":{giavl:100,gianc:0,giamtc:0},
        "VT201810121011":{giavl:1000,gianc:0,giamtc:0},
        "TL201810121011":{giavl:100000,gianc:0,giamtc:0},
        "1":{giavl:100,gianc:0,giamtc:0},
        "2":{giavl:1000,gianc:0,giamtc:0},
        "3":{giavl:100000,gianc:0,giamtc:0}
    },
    "20181001":{
        "DC201810121011":{giavl:200,gianc:0,giamtc:0},
        "VT201810121011":{giavl:2000,gianc:0,giamtc:0},
        "TL201810121011":{giavl:200000,gianc:0,giamtc:0}
    }
};
//var heso={nc:1,mtc:1,ttpk:0,cpchung:0.05,thunhaptt:0.055,khaosat:0.0236,thietke:1.2,gstc:0.02566};
var plqt=["GMMP","GMDT","TLMP","TLDT"];
var dvtc=["TCTB","QLMLQ2","QLMLQ9","QLMLTD"];

var qt31=[
    {chiphiid: 1,soluong: 4,
        diengiai: 'Van bi cóc đồng 1" x 32',dvt: 'cái',
        giavl: 2000,gianc: 220,giamtc: 10,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0},
    {chiphiid: 2,soluong: 2,
        diengiai: 'Van góc liên hợp đồng 1" x 32 them cho dai ne Van góc liên hợp đồng 1" x 32',dvt: 'cái',
        giavl: 2000,gianc: 300,giamtc: 0,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0},
    {chiphiid: 3,soluong: 4,
        diengiai: 'Khâu nối ĐHN 15 ly',dvt: 'cái',
        giavl: 2000,gianc: 500,giamtc: 0,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0}
];
var qt32=[
    {chiphiid: 1,soluong: 4,
        diengiai: 'Van bi cóc đồng 1" x 32',dvt: 'cái',
        giavl: 2000,gianc: 220,giamtc: 10,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0},
    {chiphiid: 2,soluong: 2,
        diengiai: 'Van góc liên hợp đồng 1" x 32 them cho dai ne Van góc liên hợp đồng 1" x 32',dvt: 'cái',
        giavl: 2000,gianc: 300,giamtc: 0,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0},
    {chiphiid: 3,soluong: 4,
        diengiai: 'Khâu nối ĐHN 15 ly',dvt: 'cái',
        giavl: 2000,gianc: 500,giamtc: 0,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0}
];
var qt33=[
    {chiphiid: 1,soluong: 4,
        diengiai: 'Van bi cóc đồng 1" x 32',dvt: 'cái',
        giavl: 2000,gianc: 220,giamtc: 10,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0},
    {chiphiid: 2,soluong: 2,
        diengiai: 'Van góc liên hợp đồng 1" x 32 them cho dai ne Van góc liên hợp đồng 1" x 32',dvt: 'cái',
        giavl: 2000,gianc: 300,giamtc: 0,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0},
    {chiphiid: 3,soluong: 4,
        diengiai: 'Khâu nối ĐHN 15 ly',dvt: 'cái',
        giavl: 2000,gianc: 500,giamtc: 0,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0}
];
var qt34=[
    {chiphiid: 1,soluong: 4,
        diengiai: 'Van bi cóc đồng 1" x 32',dvt: 'cái',
        giavl: 2000,gianc: 220,giamtc: 10,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0},
    {chiphiid: 2,soluong: 2,
        diengiai: 'Van góc liên hợp đồng 1" x 32 them cho dai ne Van góc liên hợp đồng 1" x 32',dvt: 'cái',
        giavl: 2000,gianc: 300,giamtc: 0,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0},
    {chiphiid: 3,soluong: 4,
        diengiai: 'Khâu nối ĐHN 15 ly',dvt: 'cái',
        giavl: 2000,gianc: 500,giamtc: 0,
        trigiamtc: 1,trigianc: 0,trigiamtc: 0}
];
var qt35=[
    {chiphiid:1,sl_oc:1,sl_on:1,trigia_oc:0,trigia_on:0,
        diengiai:'',dongia:10000},
    {chiphiid:2,sl_oc:1,sl_on:2,trigia_oc:0,trigia_on:0,
        diengiai:'',dongia:20000},
    {chiphiid:3,sl_oc:1,sl_on:2,trigia_oc:0,trigia_on:0,
        diengiai:'',dongia:30000}
];

/* dữ liệu quyết toán */
var qtgt = new Vue({
    el: '#qtgt',
    delimiters: ["{`", "`}"],
    methods:{
        dragEnd(ev) {
            this.dragging = -1
        },
        addItemQt33() {
            this.dataqt33.push({chiphiid:1,soluong:1,
                diengiai:'',dvt:'',
                giavl:0,gianc:0,giamtc:0,
                trigiamtc:0,trigianc:0,trigiamtc:0
            });
        },
        removeItemQt33(item) {
          this.dataqt33.splice(this.dataqt33.indexOf(item), 1);
        },
        removeItemQt33At(index) {
          this.dataqt33.splice(index, 1);
        },
        dragQt33Start(which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        dragQt33Finish(to, ev) {
            this.moveItemQt33(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveItemQt33(from, to) {
            if (to === -1) {
                this.removeItemQt33At(from);
            } else {
                this.dataqt33.splice(to, 0, this.dataqt33.splice(from, 1)[0]);
            }
        },
        downSoluongQt33(stt){
            let nextstt=parseInt(stt) +1
            setFocus("qt33sl-" +nextstt);
        },
        move2ChiphiQt33(stt){
            setFocus("qt33cp-"+stt);
        },
        downChiphiQt33(stt){
            let nextstt=parseInt(stt) +1
            setFocus("qt33cp-" +nextstt);
        },
        move2SoluongQt33(stt){
            setFocus("qt33sl-"+stt);
        },
        addItemQt34() {
            this.dataqt34.push({chiphiid:1,soluong:1,
                diengiai:'',dvt:'',
                giavl:0,gianc:0,giamtc:0,
                trigiamtc:0,trigianc:0,trigiamtc:0
            });
        },
        removeItemQt34(item) {
          this.dataqt34.splice(this.dataqt34.indexOf(item), 1);
        },
        removeItemQt34At(index) {
          this.dataqt34.splice(index, 1);
        },
        dragQt34Start(which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        dragQt34Finish(to, ev) {
            this.moveItemQt34(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveItemQt34(from, to) {
            if (to === -1) {
                this.removeItemQt34At(from);
            } else {
                this.dataqt34.splice(to, 0, this.dataqt34.splice(from, 1)[0]);
            }
        },
        downSoluongQt34(stt){
            let nextstt=parseInt(stt) +1
            setFocus("qt34sl-" +nextstt);
        },
        move2ChiphiQt34(stt){
            setFocus("qt34cp-"+stt);
        },
        downChiphiQt34(stt){
            let nextstt=parseInt(stt) +1
            setFocus("qt34cp-" +nextstt);
        },
        move2SoluongQt34(stt){
            setFocus("qt34sl-"+stt);
        }
    },
    computed:{
        isDragging(){
            return this.dragging > -1
        },
        heso(){
            let a=this.maheso.toString() 
            let dataHeso='{"nc":"1","mtc":"1","ttpk":"0","cpchung":"0.05",'
            + '"thunhaptt":"0.055","khaosat":"0.0236","thietke":"1.2","gstc":"0.02566"}';
            return JSON.parse(dataHeso)
        },
        c_vl(){let total = 0;
            this.dataqt31.forEach(function(s) {
                s.trigiavl = lamTronSo(s.soluong * s.giavl, 0);
                total += parseInt(s.trigiavl);
            });
            this.dataqt32.forEach(function(s) {
                s.trigiavl = lamTronSo(s.soluong * s.giavl, 0);
                total += parseInt(s.trigiavl);
            });
            return total
        },
        c_nc(){let total = 0;
            this.dataqt31.forEach(function(s) {
                s.trigianc = lamTronSo(s.soluong * s.gianc, 0);
                total += parseInt(s.trigianc);
            });
            this.dataqt32.forEach(function(s) {
                s.trigianc = lamTronSo(s.soluong * s.gianc, 0);
                total += parseInt(s.trigianc);
            });
            return total
        },
        c_mtc(){let total = 0;
            this.dataqt31.forEach(function(s) {
                s.trigiamtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.trigiamtc);
            });
            this.dataqt32.forEach(function(s) {
                s.trigiamtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.trigiamtc);
            });
            return total
        },
        c_Vl(){return this.c_vl},
        c_Nc(){return lamTronSo(this.c_nc * this.heso.nc,0)},
        c_Mtc(){return lamTronSo(this.c_mtc * this.heso.mtc,0)},
        c_A(){return (parseInt(this.c_vl) + parseInt(this.c_Nc) + parseInt(this.c_Mtc))},
        c_Tt(){return lamTronSo(this.c_A * this.heso.ttpk,0)},
        c_T(){return (parseInt(this.c_A) + parseInt(this.c_Tt))},
        c_C(){return lamTronSo(this.c_T * this.heso.cpchung,0)},
        c_Z(){return (parseInt(this.c_T) + parseInt(this.c_C))},
        c_Tl(){return lamTronSo(this.c_Z * this.heso.thunhaptt,0)},
        c_G(){return (parseInt(this.c_Z) + parseInt(this.c_Tl))},
        c_I(){return lamTronSo(this.c_G * this.heso.khaosat * this.heso.thietke,0)},
        c_J(){return lamTronSo(this.c_G * this.heso.gstc,0)},
        c_La(){return (parseInt(this.c_G) + parseInt(this.c_I) + parseInt(this.c_J))},
        c_Vat1(){return lamTronSo(this.c_La * 0.1,0)},
        c_Gxd1(){return (parseInt(this.c_La) + parseInt(this.c_Vat1))},
        c_Gxd2(){let total = 0;
            this.dataqt35.forEach(function(s) {
                s.trigia_oc = lamTronSo(s.sl_oc * s.dongia, -3);
                total += parseInt(s.trigia_oc);
            });
            return total
        },
        c_Lb(){return lamTronSo(this.c_Gxd2 * 100 / 110,0)},
        c_Vat2(){return (parseInt(this.c_Gxd2) - parseInt(this.c_Lb))},
        n_vl(){let total = 0;
            this.dataqt33.forEach(function(s) {
                s.trigiavl = lamTronSo(s.soluong * s.giavl, 0);
                total += parseInt(s.trigiavl);
            });
            this.dataqt34.forEach(function(s) {
                s.trigiavl = lamTronSo(s.soluong * s.giavl, 0);
                total += parseInt(s.trigiavl);
            });
            return total
        },
        n_nc(){let total = 0;
            this.dataqt33.forEach(function(s) {
                s.trigianc = lamTronSo(s.soluong * s.gianc, 0);
                total += parseInt(s.trigianc);
            });
            this.dataqt34.forEach(function(s) {
                s.trigianc = lamTronSo(s.soluong * s.gianc, 0);
                total += parseInt(s.trigianc);
            });
            return total
        },
        n_mtc(){let total = 0;
            this.dataqt33.forEach(function(s) {
                s.trigiamtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.trigiamtc);
            });
            this.dataqt34.forEach(function(s) {
                s.trigiamtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.trigiamtc);
            });
            return total
        },
        n_Vl(){return this.n_vl},
        n_Nc(){return lamTronSo(this.n_nc * this.heso.nc,0)},
        n_Mtc(){return lamTronSo(this.n_mtc * this.heso.mtc,0)},
        n_A(){return (parseInt(this.n_vl) + parseInt(this.n_Nc) + parseInt(this.n_Mtc))},
        n_Tt(){return lamTronSo(this.n_A * this.heso.ttpk,0)},
        n_T(){return (parseInt(this.n_A) + parseInt(this.n_Tt))},
        n_C(){return lamTronSo(this.n_T * this.heso.cpchung,0)},
        n_Z(){return (parseInt(this.n_T) + parseInt(this.n_C))},
        n_Tl(){return lamTronSo(this.n_Z * this.heso.thunhaptt,0)},
        n_G(){return (parseInt(this.n_Z) + parseInt(this.n_Tl))},
        n_I(){return lamTronSo(this.n_G * this.heso.khaosat * this.heso.thietke,0)},
        n_J(){return lamTronSo(this.n_G * this.heso.gstc,0)},
        n_La(){return (parseInt(this.n_G) + parseInt(this.n_I) + parseInt(this.n_J))},
        n_Vat1(){return lamTronSo(this.n_La * 0.1,0)},
        n_Gxd1(){return (parseInt(this.n_La) + parseInt(this.n_Vat1))},
        n_Gxd2(){let total = 0;
            this.dataqt35.forEach(function(s) {
                s.trigia_on = lamTronSo(s.sl_on * s.dongia, -3);
                total += parseInt(s.trigia_on);
            });
            return total
        },
        n_Lb(){return lamTronSo(this.n_Gxd2 * 100 / 110,0)},
        n_Vat2(){return (parseInt(this.n_Gxd2) - parseInt(this.n_Lb))},
        /* phần tổng kết */
        tcA(){return (parseInt(this.n_Gxd1) + parseInt(this.c_Gxd1))},
        tcB(){return (parseInt(this.n_Gxd2) + parseInt(this.c_Gxd2))},
        Gxd(){return (parseInt(this.tcA) + parseInt(this.tcB))}
    },
    data() {return{
        errors: [],
        dragging: -1,
        maheso:7,
        mabaogia:20181015,
        maqt:"2018GMMP001001",
        "dataqt31": qt31,
        "dataqt32": qt32,
        "dataqt33": qt33,
        "dataqt34": qt34,
        "dataqt35": qt35
    }}
});
