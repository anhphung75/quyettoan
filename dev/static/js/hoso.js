/* import * as hoso from "./hoso/api";
var TatcaHoso = hoso.Tat(curYear);
*/
var listJson = [
    {
        dvtc: "QLMLQ2",
        sodot: "GM01",
        mahoso: "GM01",
        sohoso: "GM12345/10",
        khachhang: "cty a",
        diachi: "123 duong 1, quan 2"
    },
    {
        dvtc: "QLMLQ2",
        sodot: "GM01",
        mahoso: "GM02",
        sohoso: "GM12345/11",
        khachhang: "cty b",
        diachi: "123 duong 1, quan 3"
    },
    {
        dvtc: "QLMLQ2",
        sodot: "GM01",
        mahoso: "GM03",
        sohoso: "GM12345/12",
        khachhang: "cty c",
        diachi: "123 duong 1, quan 4"
    },
    {
        dvtc: "QLMLQ2",
        sodot: "GM01",
        mahoso: "GM04",
        sohoso: "GM12345/13",
        khachhang: "cty d",
        diachi: "123 duong 1, quan 5"
    },
    {
        dvtc: "QLMLQ2",
        sodot: "GM01",
        mahoso: "GM05",
        sohoso: "GM12345/14",
        khachhang: "cty e",
        diachi:
            "123 duong 1, quan 6 123 duong 1, quan 6 123 duong 1, quan 6 123 duong 1, quan 6 123 duong 1, quan 6 ,123 duong 1, quan 6 123 duong 1, quan 6 123 duong 1, quan 6 123 duong 1, quan 6 123 duong 1, quan 6"
    },
    {
        dvtc: "QLMLQ2",
        sodot: "GM01",
        mahoso: "GM06",
        sohoso: "GM12345/15",
        khachhang: "cty f",
        diachi: "123 duong 1, quan 7"
    },
    {
        dvtc: "QLMLQ2",
        sodot: "GM01",
        mahoso: "GM07",
        sohoso: "GM12345/16",
        khachhang: "cty g",
        diachi: "123 duong 1, quan 8"
    },
    {
        dvtc: "QLMLQ2",
        sodot: "GM01",
        mahoso: "GM08",
        sohoso: "GM12345/17",
        khachhang: "cty h",
        diachi: "123 duong 1, quan 9"
    },
    {
        dvtc: "QLMLQ2",
        sodot: "GM01",
        mahoso: "GM09",
        sohoso: "GM12345/18",
        khachhang: "cty i",
        diachi: "123 duong 1, quan 10"
    },
    {
        dvtc: "QLMLQ2",
        sodot: "GM01",
        mahoso: "GM10",
        sohoso: "GM12345/19",
        khachhang: "cty j",
        diachi: "123 duong 1, quan 12"
    }
];

var webapp = new Vue({
    el: "#webapp",
    delimiters: ["{`", "`}"],
    data() {
        return {
            curYear: new Date().getFullYear(),
            dsnam: [2017, 2018, 2019, 2020],
            recs: listJson,
            s_dvtc: "",
            s_sodot: "",
            s_sohoso: "",
            s_khachhang: "",
            s_diachi: "",
            /* pagination */
            curPage: 0,
            itemsPerPage: 10,
            sortBy: {
                colName: "stt",
                direction: 1
            }
        };
    },
    computed: {
        recsFilter() {
            let recs = this.recs;
            if (this.s_dvtc.length > 0) {
                recs = recs.filter(
                    item =>
                        item.dvtc
                            .toLowerCase()
                            .indexOf(this.s_dvtc.toLowerCase()) > -1
                );
            }
            if (this.s_sodot.length > 0) {
                recs = recs.filter(
                    item =>
                        item.sodot
                            .toLowerCase()
                            .indexOf(this.s_sodot.toLowerCase()) > -1
                );
            }
            if (this.s_sohoso.length > 0) {
                recs = recs.filter(
                    item =>
                        item.sohoso
                            .toLowerCase()
                            .indexOf(this.s_sohoso.toLowerCase()) > -1
                );
            }
            if (this.s_khachhang.length > 0) {
                recs = recs.filter(
                    item =>
                        item.khachhang
                            .toLowerCase()
                            .indexOf(this.s_khachhang.toLowerCase()) > -1
                );
            }
            if (this.s_diachi.length > 0) {
                recs = recs.filter(
                    item =>
                        item.diachi
                            .toLowerCase()
                            .indexOf(this.s_diachi.toLowerCase()) > -1
                );
            }
            return recs;
        },
        recsTotal() {
            return this.recsFilter.length;
        },
        pageTotal() {
            return Math.ceil(this.recsFilter.length / this.itemsPerPage);
        },
        recsPage() {
            if (this.curPage != 0 && this.curPage >= this.pageTotal) {
                this.curPage = this.pageTotal - 1;
            }
            let index = this.curPage * this.itemsPerPage;
            let recs = this.recsFilter;
            let colName = this.sortBy.colName;
            recs = recs.sort((a, b) => {
                if (this.sortBy.direction == 1)
                    return a[colName] > b[colName] ? 1 : -1;
                else return a[colName] < b[colName] ? 1 : -1;
                return 0;
            });
            return recs.slice(index, index + this.itemsPerPage);
        },
        firstPage() {
            return 0;
        },
        lastPage() {
            return this.pageTotal - 1;
        },
        nextPage() {
            let next = this.curPage + 1;
            return next > this.lastPage ? this.lastPage : next;
        },
        prevPage() {
            let prev = this.curPage - 1;
            return prev < this.firstPage ? this.firstPage : prev;
        },
        pages() {
            let a = this.curPage - 2;
            if (a > this.pageTotal - 5) {
                a = this.pageTotal - 5;
            }
            if (a < 0) {
                a = 0;
            }
            let z = a + 5;
            if (z > this.pageTotal) {
                z = this.pageTotal;
            }
            let pages = [];
            for (let i = a; i < z; i++) {
                pages.push(i);
            }
            console.log("list page show =" + pages);
            return pages;
        }
    },
    methods: {
        setPage(page) {
            this.curPage = page;
        },
        sortByColumn(colName) {
            this.sortBy.colName == colName
                ? (this.sortBy.direction = this.sortBy.direction * -1)
                : (this.sortBy.direction = 1);
            this.sortBy.colName = colName;
        }
    }
});
