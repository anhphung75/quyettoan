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
var heso={nc:1,mtc:1,ttpk:0,cpchung:0.05,thunhaptt:0.055,khaosat:0.0236,thietke:1.2,gstc:0.02566};
var plqt=["GMMP","GMDT","TLMP","TLDT"];
var dvtc=["TCTB","QLMLQ2","QLMLQ9","QLMLTD"];

var qt31=qt32=qt33=qt34=[
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
    {chiphiid:1,sl_oc:1,sl_on:0,trigia_oc:0,trigia_on:0,
        diengiai:'',dongia:0},
    {chiphiid:2,sl_oc:1,sl_on:0,trigia_oc:0,trigia_on:0,
        diengiai:'',dongia:0},
    {chiphiid:3,sl_oc:1,sl_on:0,trigia_oc:0,trigia_on:0,
        diengiai:'',dongia:0}
];

/* dữ liệu quyết toán */
var vqt33 = new Vue({
    el: '#vqt33',
    delimiters: ["{`", "`}"],
    methods:{
        addItem() {
            this.dataqt33.push({isChon:false,chiphiid:1,diengiai:'',dvt:'',soluong:1,giavl:0,gianc:0,giamtc:0,
                trigiamtc:0,trigianc:0,trigiamtc:0
            });
        },
        removeItem(item) {
          this.dataqt33.splice(this.dataqt33.indexOf(item), 1);
        },
        removeItemAt(index) {
          this.dataqt33.splice(index, 1);
        },
        dragStart(which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        dragEnd(ev) {
            this.dragging = -1
        },
        dragFinish(to, ev) {
            this.moveItem(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveItem(from, to) {
            if (to === -1) {
                this.removeItemAt(from);
            } else {
                this.dataqt33.splice(to, 0, this.dataqt33.splice(from, 1)[0]);
            }
        },
        downSoluong(stt){
            let nextstt=parseInt(stt) +1
            setFocus("qt33sl-" +nextstt);
        },
        move2Chiphi(stt){
            setFocus("qt33cp-"+stt);
        },
        downChiphi(stt){
            let nextstt=parseInt(stt) +1
            setFocus("qt33cp-" +nextstt);
        },
        move2Soluong(stt){
            setFocus("qt33sl-"+stt);
        }
    },
    computed:{
        vl(){let total = 0;
            this.dataqt33.forEach(function(s) {
                s.trigiavl = lamTronSo(s.soluong * s.giavl, 0);
                total += parseInt(s.trigiavl);
            });
            return total
        },
        nc(){let total = 0;
            this.dataqt33.forEach(function(s) {
                s.trigianc = lamTronSo(s.soluong * s.gianc, 0);
                total += parseInt(s.trigianc);
            });
            return total
        },
        mtc(){let total = 0;
            this.dataqt33.forEach(function(s) {
                s.trigiamtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.trigiamtc);
            });
            return total
        },
        isDragging(){
            return this.dragging > -1
        }
    },
    data() {return{
        loichao:'hello',
        dragging: -1,
        "dataqt33": [{
            chiphiid: 1,
            diengiai: 'Van bi cóc đồng 1" x 32',
            dvt: 'cái',
            soluong: 4,
            giavl: 2000,
            gianc: 0,
            giamtc: 0,
            trigiamtc: 1,
            trigianc: 0,
            trigiamtc: 0
        }, {
            chiphiid: 2,
            diengiai: 'Van góc liên hợp đồng 1" x 32 them cho dai ne Van góc liên hợp đồng 1" x 32Van góc liên hợp đồng 1" x 32Van góc liên hợp đồng 1" x 32',
            dvt: 'cái',
            soluong: 0,
            giavl: 0,
            gianc: 0,
            giamtc: 200,
            trigiamtc: 0,
            trigianc: 0,
            trigiamtc: 0
        }, {
            chiphiid: 3,
            diengiai: 'Van thau 1"',
            dvt: 'cái',
            soluong: 0,
            giavl: 0,
            gianc: 0,
            giamtc: 0,
            trigiamtc: 0,
            trigianc: 0,
            trigiamtc: 0
        }, {
            chiphiid: 4,
            diengiai: 'Khâu nối ĐHN 25 ly',
            dvt: 'cái',
            soluong: 0,
            giavl: 0,
            gianc: 0,
            giamtc: 0,
            trigiamtc: 0,
            trigianc: 0,
            trigiamtc: 0
        }, {
            chiphiid: 5,
            diengiai: 'Keo lụa (cao su non)',
            dvt: 'cái',
            soluong: 0,
            giavl: 0,
            gianc: 0,
            giamtc: 0,
            trigiamtc: 0,
            trigianc: 0,
            trigiamtc: 0
        }, {
            chiphiid: 6,
            diengiai: 'Joint khâu nối ĐHN 25 ly',
            dvt: 'cái',
            soluong: 0,
            giavl: 0,
            gianc: 0,
            giamtc: 0,
            trigiamtc: 0,
            trigianc: 0,
            trigiamtc: 0
        }]
    }}
});
