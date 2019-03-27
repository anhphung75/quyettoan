function lamTronSo(socanlamtron = 0, sole = 0) {
    if ((typeof socanlamtron !== 'number') || (typeof sole !== 'number') || 
        (socanlamtron<0) || (sole<-9) || (sole>9))
        return NaN;
    let s = parseFloat(socanlamtron) || 0;
    let l =parseInt(sole) || 0;
    if (l<0){
        let m=10**Math.abs(l);
        let a = parseFloat(s/m);
        return a.toFixed(0)*m;
    } else {
        return s.toFixed(l);
    }
};
function setFocus(elementID) {let a= elementID.split("-");
    try {document.getElementById(elementID).focus();}
    catch(err) {document.getElementById(a[0] +'-0').focus();}
};
Vue.directive('focus',{inserted(el){el.focus()}});
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
        {machiphi:1,
        mota:"Cắt mặt nhựa và BTXM",
        dvt:"mét",
        masovattu:"",
        baocao_qtvt:"",
        baocao_qtgt:"",
        dm_beton:0,
        dm_van:0,
        dm_cat_on:0,
        dm_cat_oc:0},
    "VT201810121011": //PL + yyyymmddhhmm
        {machiphi:2,
        mota:"Đai khởi thủy 100 x 3/4'",
        dvt:"cái",
        masovattu:"",
        baocao_qtvt:"",
        baocao_qtgt:"",
        dm_beton:0,
        dm_van:0,
        dm_cat_on:0,
        dm_cat_oc:0},
    "TL201810121011": //PL + yyyymmddhhmm
        {machiphi:3,
        mota:"Bê tông xi măng",
        dvt:"m2",
        masovattu:"",
        baocao_qtvt:"",
        baocao_qtgt:"",
        dm_beton:0,
        dm_van:0,
        dm_cat_on:0,
        dm_cat_oc:0}
};


       
var plqt=["GMMP","GMDT","TLMP","TLDT"];
var dvtc=["TCTB","QLMLQ2","QLMLQ9","QLMLTD"];

var qt31=[];
var qt32=[];
var qt33=[];
var qt34=[];
var qt35=[];

/* dữ liệu quyết toán */
var qtgt = new Vue({
    el: '#qtgt',
    delimiters: ["{`", "`}"],
    methods:{
        dragEnd(ev) {
            this.dragging = -1
        },
        addI1(){this.data1.push({isedit:false,machiphi:1,soluong:1});},
        removeI1(item){this.data1.splice(this.data1.indexOf(item), 1);},
        removeI1At(index){this.data1.splice(index, 1);},
        drag1Start(which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        drag1Finish(to, ev) {
            this.moveI1(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveI1(from, to) {
            if (to === -1) {
                this.removeI1At(from);
            } else {
                this.data1.splice(to, 0, this.data1.splice(from, 1)[0]);
            }
        },
        addI2(){this.data2.push({isedit:false,machiphi:1,soluong:1});},
        removeI2(item){this.data2.splice(this.data2.indexOf(item), 1);},
        removeI2At(index){this.data2.splice(index, 1);},
        drag2Start(which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        drag2Finish(to,ev){
            this.moveI2(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveI2(from,to){
            if (to === -1){
                this.removeI2At(from);
            } else {
                this.data2.splice(to, 0, this.data2.splice(from, 1)[0]);
            }
        },
        addI3(){this.data3.push({isedit:false,machiphi:1,soluong:1});},
        removeI3(item){this.data3.splice(this.data3.indexOf(item), 1);},
        removeI3At(index){this.data3.splice(index, 1);},
        drag3Start(which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        drag3Finish(to,ev){
            this.moveI3(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveI3(from, to) {
            if (to === -1) {
                this.removeI3At(from);
            } else {
                this.data3.splice(to, 0, this.data3.splice(from, 1)[0]);
            }
        },
        addI4(){this.data4.push({isedit:false,machiphi:1,soluong:1});},
        removeI4(item){this.data4.splice(this.data4.indexOf(item), 1);},
        removeI4At(index){this.data4.splice(index, 1);},
        drag4Start(which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        drag4Finish(to, ev){
            this.moveI4(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveI4(from, to) {
            if (to === -1) {
                this.removeI4At(from);
            } else {
                this.data4.splice(to, 0, this.data4.splice(from, 1)[0]);
            }
        },
        addI5(){this.data5.push({isedit:false,machiphi:'tl1',sl_oc:0,sl_on:0});},
        removeI5(item){this.data5.splice(this.data5.indexOf(item),1);},
        removeI5At(index){this.data5.splice(index,1);},
        drag5Start(which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        drag5Finish(to, ev) {
            this.moveI5(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },
        moveI5(from, to) {
            if (to === -1) {
                this.removeI5At(from);
            } else {
                this.data5.splice(to, 0, this.data5.splice(from, 1)[0]);
            }
        },
        up2e(e,k){setFocus(e+(parseInt(k)-1))},
        down2e(e,k){setFocus(e+(parseInt(k)+1))},
        move2e(e,k){setFocus(e+parseInt(k))},
        /* combo box*/
        data5selected(index){
            this.showDropdown = false;
            console.log('machiphi=' +index)
        },
        handleBackspace(){this.showDropdown = true},
        select(index){
            this.showDropdown = false;
            this.starttime = this.filteredTimes[index]
        },
        selectNext(){
            if (this.showDropdown){
                if (this.selectedIndex < this.filteredTimes.length - 1) {
                    this.selectedIndex++;
                } else {
                    this.selectedIndex = 0;
                }        
            } else {
                this.showDropdown = true;
            }
        },
        selectPrev(){
            if (this.selectedIndex>0){
                this.selectedIndex--;
            } else {
                this.selectedIndex = this.filteredTimes.length - 1;
            }
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
        baogia(){
            let dataBaogia='{'+
            '"dc1":{"giavl":"100","gianc":"0","giamtc":"5000"},'+
            '"dc2":{"giavl":"1000","gianc":"0","giamtc":"0"},'+
            '"dc3":{"giavl":"100000","gianc":"0","giamtc":"0"},'+
            '"vl1":{"giavl":"100","gianc":"100","giamtc":0},'+
            '"vl2":{"giavl":"1000","gianc":"200","giamtc":"0"},'+
            '"vl3":{"giavl":"100000","gianc":"3000","giamtc":"0"},'+
            '"tl1":{"giavl":"100","gianc":"100","giamtc":0},'+
            '"tl2":{"giavl":"1000","gianc":"200","giamtc":"0"},'+
            '"tl3":{"giavl":"100000","gianc":"3000","giamtc":"0"}'+
            '}';
            return JSON.parse(dataBaogia)
        },
        n_vl(){let total = 0;
            for (let i = 0; i < this.data3.length; i++) {
                let s=this.data3[i];
                try{
                    s.mota=this.cpDaocat[s.machiphi].mota,
                    s.dvt=this.cpDaocat[s.machiphi].dvt
                }catch(e){s.mota='',s.dvt=''};
                try{s.giavl=this.baogia[s.machiphi].giavl}catch(e){s.giavl=0};
                s.tienvl = lamTronSo(s.soluong * s.giavl, 0);
                total += parseInt(s.tienvl);
            };
            for (let i = 0; i < this.data4.length; i++) {
                let s=this.data4[i];
                try{
                    s.mota=this.cpVattu[s.machiphi].mota,
                    s.dvt=this.cpVattu[s.machiphi].dvt
                }catch(e){s.mota='',s.dvt=''};
                try{s.giavl=this.baogia[s.machiphi].giavl}catch(e){s.giavl=0};
                s.tienvl = lamTronSo(s.soluong * s.giavl, 0);
                total += parseInt(s.tienvl);
            };
            return total
        },
        n_nc(){let total = 0;
            for (let i = 0; i < this.data3.length; i++) {
                let s=this.data3[i];
                try{s.gianc=this.baogia[s.machiphi].gianc}catch(e){s.gianc=0};
                s.tiennc = lamTronSo(s.soluong * s.gianc, 0);
                total += parseInt(s.tiennc);
            };
            for (let i = 0; i < this.data4.length; i++) {
                let s=this.data4[i];
                try{s.gianc=this.baogia[s.machiphi].gianc}catch(e){s.gianc=0};
                s.tiennc = lamTronSo(s.soluong * s.gianc, 0);
                total += parseInt(s.tiennc);
            };
            return total
        },
        n_mtc(){let total = 0;
            for (let i = 0; i < this.data3.length; i++) {
                let s=this.data3[i];
                try{s.giamtc=this.baogia[s.machiphi].giamtc}catch(e){s.giamtc=0};
                s.tienmtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.tienmtc);
            };
            for (let i = 0; i < this.data4.length; i++) {
                let s=this.data4[i];
                try{s.giamtc=this.baogia[s.machiphi].giamtc}catch(e){s.giamtc=0};
                s.tienmtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.tienmtc);
            };
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
            for (let i = 0; i < this.data5.length; i++) {
                let s=this.data5[i];
                try{
                    s.mota=this.cpTailap[s.machiphi].mota,
                    s.dvt=this.cpTailap[s.machiphi].dvt
                }catch(e){s.mota='',s.dvt=''};
                try{s.dongia=this.baogia[s.machiphi].giavl}catch(e){s.giavl=0};
                s.tien_on = lamTronSo(s.sl_on * s.dongia, -3);
                total += parseInt(s.tien_on);
            };
            return total
        },
        n_Lb(){return lamTronSo(this.n_Gxd2 * 100 / 110,0)},
        n_Vat2(){return (parseInt(this.n_Gxd2) - parseInt(this.n_Lb))},
        /* phần ống cái */
        c_vl(){let total = 0;
            for (let i = 0; i < this.data1.length; i++) {
                let s=this.data1[i];
                try{
                    s.mota=this.cpDaocat[s.machiphi].mota,
                    s.dvt=this.cpDaocat[s.machiphi].dvt
                }catch(e){s.mota='',s.dvt=''};
                try{s.giavl=this.baogia[s.machiphi].giavl}catch(e){s.giavl=0};
                s.tienvl = lamTronSo(s.soluong * s.giavl, 0);
                total += parseInt(s.tienvl);
            };
            for (let i = 0; i < this.data2.length; i++) {
                let s=this.data2[i];
                try{
                    s.mota=this.cpVattu[s.machiphi].mota,
                    s.dvt=this.cpVattu[s.machiphi].dvt
                }catch(e){s.mota='',s.dvt=''};
                try{s.giavl=this.baogia[s.machiphi].giavl}catch(e){s.giavl=0};
                s.tienvl = lamTronSo(s.soluong * s.giavl, 0);
                total += parseInt(s.tienvl);
            };
            return total
        },
        c_nc(){let total = 0;
            for (let i = 0; i < this.data1.length; i++) {
                let s=this.data1[i];
                try{s.gianc=this.baogia[s.machiphi].gianc}catch(e){s.gianc=0};
                s.tiennc = lamTronSo(s.soluong * s.gianc, 0);
                total += parseInt(s.tiennc);
            };
            for (let i = 0; i < this.data2.length; i++) {
                let s=this.data2[i];
                try{s.gianc=this.baogia[s.machiphi].gianc}catch(e){s.gianc=0};
                s.tiennc = lamTronSo(s.soluong * s.gianc, 0);
                total += parseInt(s.tiennc);
            };
            return total
        },
        c_mtc(){let total = 0;
            for (let i = 0; i < this.data1.length; i++) {
                let s=this.data1[i];
                try{s.giamtc=this.baogia[s.machiphi].giamtc}catch(e){s.giamtc=0};
                s.tienmtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.tienmtc);
            };
            for (let i = 0; i < this.data2.length; i++) {
                let s=this.data2[i];
                try{s.giamtc=this.baogia[s.machiphi].giamtc}catch(e){s.giamtc=0};
                s.tienmtc = lamTronSo(s.soluong * s.giamtc, 0);
                total += parseInt(s.tienmtc);
            };
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
            for (let i = 0; i < this.data5.length; i++) {
                let s=this.data5[i];
                s.tien_oc = lamTronSo(s.sl_oc * s.dongia, -3);
                total += parseInt(s.tien_oc);
            };
            return total
        },
        c_Lb(){return lamTronSo(this.c_Gxd2 * 100 / 110,0)},
        c_Vat2(){return (parseInt(this.c_Gxd2) - parseInt(this.c_Lb))},
        /* phần tổng kết */
        tcA(){return (parseInt(this.n_Gxd1) + parseInt(this.c_Gxd1))},
        tcB(){return (parseInt(this.n_Gxd2) + parseInt(this.c_Gxd2))},
        Gxd(){return (parseInt(this.tcA) + parseInt(this.tcB))},
        /* search */
        dsTailap(){
            let ds= new chiphi;
            let sKey=this.searchKey;
            for (let i = 0; i < Object.keys(ds).length; i++) {
                if (ds[i].mota.toLowerCase().indexOf(sKey) == -1){delete ds[i]};
            };
            return ds
        }
    },
    data() {return{
        errors: [],
        dragging: -1,
        timcp:'',
        showDropdown: false,
        selectedIndex: 0,
        maheso:7,
        mabaogia:20181015,
        maqt:"2018GMMP001001",
        options: [      
            {id:"tl1",label:"gạch terrazo",dvt:"m2"},
            {id:"tl2",label:"Nhựa dày 10cm",dvt:"m2"},
            {id:"tl3",label:"Bê tông xi măng",dvt:"m2"},
        ],
        cpDaocat:{
            "dc1":{"mota":"gạch terrazo","dvt":"m2"},
            "dc2":{"mota":"Nhựa dày 10cm","dvt":"m2"},
            "dc3":{"mota":"Bê tông xi măng","dvt":"m2"}
        },
        cpVattu:{
            "vl1":{"mota":"gạch terrazo","dvt":"m2"},
            "vl2":{"mota":"Nhựa dày 10cm","dvt":"m2"},
            "vl3":{"mota":"Bê tông xi măng","dvt":"m2"}
        },
        cpTailap:{
            "tl1":{"mota":"gạch terrazo","dvt":"m2"},
            "tl2":{"mota":"Nhựa dày 10cm","dvt":"m2"},
            "tl3":{"mota":"Bê tông xi măng","dvt":"m2"}
        },
        data1:[
            {isedit:false,machiphi:'dc1',soluong:1},
            {isedit:false,machiphi:'dc2',soluong:2},
            {isedit:false,machiphi:'dc3',soluong:3}
        ],
        data2:[
            {isedit:false,machiphi:'vt1',soluong:1},
            {isedit:false,machiphi:'vt2',soluong:2},
            {isedit:false,machiphi:'vt3',soluong:3}
        ],
        data3:[
            {isedit:false,machiphi:'dc1',soluong:1},
            {isedit:false,machiphi:'dc2',soluong:2},
            {isedit:false,machiphi:'dc3',soluong:3}
        ],
        data4:[
            {isedit:false,machiphi:'vt1',soluong:1},
            {isedit:false,machiphi:'vt2',soluong:2},
            {isedit:false,machiphi:'vt3',soluong:3}
        ],
        data5:[
            {isedit:false,machiphi:'tl1',sl_oc:1,sl_on:1},
            {isedit:false,machiphi:'tl2',sl_oc:2,sl_on:0},
            {isedit:false,machiphi:'tl3',sl_oc:0,sl_on:3}
        ]
    }}
});
