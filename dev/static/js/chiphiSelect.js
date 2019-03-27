
var datachiphi= new Vue({
    el: '#datachiphi',
    delimiters: ["{`", "`}"],
    data() {return{
        chiphiid:0,
        bangchiphi:[
            {machiphi:"DC201810121011", //PL + yyyymmddhhmm
            chiphiid:1,
            diengiai:"Cắt mặt nhựa và BTXM",
            dvt:"mét",
            masovattu:"123",
            baocao_qtvt:"",
            baocao_qtgt:"",
            dm_beton:0,
            dm_van:0,
            dm_cat_on:0,
            dm_cat_oc:0},
            {machiphi:"VT201810121011", //PL + yyyymmddhhmm
            chiphiid:2,
            diengiai:"Đai khởi thủy 100 x 3/4'",
            dvt:"cái",
            masovattu:"123456",
            baocao_qtvt:"",
            baocao_qtgt:"",
            dm_beton:0,
            dm_van:0,
            dm_cat_on:0,
            dm_cat_oc:0},
            {machiphi:"TL201810121011", //PL + yyyymmddhhmm
            chiphiid:3,
            diengiai:"Bê tông xi măng",
            dvt:"m2",
            masovattu:"123456789",
            baocao_qtvt:"",
            baocao_qtgt:"",
            dm_beton:0,
            dm_van:0,
            dm_cat_on:0,
            dm_cat_oc:0}
        ]
    }}
});
