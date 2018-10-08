function lamTronSo(socanlamtron = 0, sole = 0) {
    var soCanlamtron,soLe;
    if ((typeof socanlamtron !== 'number') || (typeof sole !== 'number') || 
        (socanlamtron<0) || (sole<0) || (sole>9))
        return NaN;
        soCanlamtron = parseFloat(socanlamtron) || 0;
        soLe=parseInt(sole) || 0;
    return soCanlamtron.toFixed(soLe);
};
function formatTien(t) {
    if (Number(t) == NaN)
        return '';
    if (t==0)
        return '-';
    return new Intl.NumberFormat('vi-VI', 
    {useGrouping:true,minimumIntegerDigits:1}).format(t);
};

var app = new Vue({
    el: '#qtgt',
    filters: {
        currency(t) {
            if (t==0)
                return '-';
        return new Intl.NumberFormat('vi-VI',{useGrouping:true,minimumIntegerDigits:1}).format(t);}
        },
    methods:{
        onKeyUp:function(){
            if (event) {
                //alert(event.target.tagName)
            };
            if (event.key == "Enter"){
                //this.$refs.userId.focus();
            }
        },
        qt33Up1row: function(event){
            
        },
        qt33Down1row: function(event){
            
        }
    },
    computed:{
        /* phần ống ngánh */
        onVl: function() {
            let total = 0;
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
        onNc0: function() {
            let total = 0;
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
        onMtc0: function() {
            let total = 0;
            this.dataqt33.forEach(function(s) {
                s.trigiamtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.trigiamtc);
            });
            this.dataqt34.forEach(function(s) {
                s.trigiamtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.trigiamtc);
            });
        return total
        }
        
        
    },
    data() {return{
        loichao:'hello',ocGxd1:0,ocGxd2:0,onGxd2:100,
        curHeso:7,curBaogia:20180903,
        hesoNc:1,hesoMtc:1,hesoTtpk:0,hesoCpchung:0,hesoThunhaptt:0,hesoKhaosat:0,hesoThietke:0,hesoGstc:0,
        "dataqt31": [{
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
                diengiai: 'Van góc liên hợp đồng 1" x 32 them cho dai ne Van góc liên hợp đồng 1" x 32 Van góc liên hợp đồng 1" x 32',
                dvt: 'cái',
                soluong: 0,
                giavl: 0,
                gianc: 0,
                giamtc: 0,
                trigiamtc: 2,
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
            }],
            "dataqt32": [{
                chiphiid: 1,
                diengiai: 'Van bi cóc đồng 1" x 32',
                dvt: 'cái',
                soluong: 1,
                giavl: 0,
                gianc: 2000,
                giamtc: 0,
                trigiamtc: 10,
                trigianc: 0,
                trigiamtc: 0
            }, {
                chiphiid: 2,
                diengiai: 'Van góc liên hợp đồng 1" x 32',
                dvt: 'cái',
                soluong: 2,
                giamtc: 0,
                gianc: 3000,
                giamtc: 0,
                trigiamtc: 20,
                trigianc: 0,
                trigiamtc: 0
            }, {
                chiphiid: 3,
                diengiai: 'Van thau 1"',
                dvt: 'cái',
                soluong: 1,
                giamtc: 0,
                gianc: 0,
                giamtc: 500,
                trigiamtc: 0,
                trigianc: 0,
                trigiamtc: 0
            }, {
                chiphiid: 4,
                diengiai: 'Khâu nối ĐHN 25 ly',
                dvt: 'cái',
                soluong: 2,
                giamtc: 2500,
                gianc: 1500,
                giamtc: 0,
                trigiamtc: 0,
                trigianc: 0,
                trigiamtc: 0
            }, {
                chiphiid: 5,
                diengiai: 'Keo lụa (cao su non)',
                dvt: 'cái',
                soluong: 0,
                giamtc: 0,
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
                giamtc: 0,
                gianc: 0,
                giamtc: 0,
                trigiamtc: 0,
                trigianc: 0,
                trigiamtc: 0
            }],
            "dataqt33": [{
                stt:1,
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
                stt:2,
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
                stt:3,
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
                stt:4,
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
                stt:5,
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
                stt:6,
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
            }],
            "dataqt34": [{
                stt:1,
                chiphiid: 1,
                diengiai: 'Van bi cóc đồng 1" x 32',
                dvt: 'cái',
                soluong: 1,
                giavl: 0,
                gianc: 2000,
                giamtc: 0,
                trigiamtc: 10,
                trigianc: 0,
                trigiamtc: 0
            }, {
                stt:2,
                chiphiid: 2,
                diengiai: 'Van góc liên hợp đồng 1" x 32',
                dvt: 'cái',
                soluong: 2,
                giavl: 0,
                gianc: 3000,
                giamtc: 0,
                trigiamtc: 20,
                trigianc: 0,
                trigiamtc: 0
            }, {
                stt:3,
                chiphiid: 3,
                diengiai: 'Van thau 1"',
                dvt: 'cái',
                soluong: 1,
                giavl: 0,
                gianc: 0,
                giamtc: 500,
                trigiamtc: 0,
                trigianc: 0,
                trigiamtc: 0
            }, {
                stt:4,
                chiphiid: 4,
                diengiai: 'Khâu nối ĐHN 25 ly',
                dvt: 'cái',
                soluong: 2,
                giavl: 2500,
                gianc: 1500,
                giamtc: 0,
                trigiamtc: 0,
                trigianc: 0,
                trigiamtc: 0
            }, {
                stt:5,
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
                stt:6,
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
            }],
            "dataqt35": [{
                stt:1,
                chiphiid: 1,
                diengiai: 'Lề xi măng',
                dvt: 'm2',
                sl1: 1.25,
                sl2:0.75,
                dongia:213000,
                trigia1: 10,
                trigia2: 0,
                ghichu: ""
            }, {
                stt:2,
                chiphiid: 2,
                diengiai: 'Nhựa dày 10 cm',
                dvt: 'm2',
                sl1: 0.00,
                sl2:0.00,
                dongia:890000,
                trigia1: 0.0,
                trigia2: 0.0,
                ghichu: ""
            }, {
                stt:3,
                chiphiid: 3,
                diengiai: 'Bê tông xi măng',
                dvt: 'm2',
                sl1: 0.00,
                sl2:0.00,
                dongia:890000,
                trigia1: 0.0,
                trigia2: 0.0,
                ghichu: ""
            }]
    }}
});
