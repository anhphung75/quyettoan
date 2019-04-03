/* import * as hoso from "./hoso/api";
var TatcaHoso = hoso.Tat(curYear);
*/
var listJson= [
    {mahoso:'GM01', sohoso:'GM12345/10', khachhang:'cty a', diachi:'123 duong 1, quan 2'},
    { mahoso: 'GM02', sohoso: 'GM12345/11', khachhang: 'cty b', diachi: '123 duong 1, quan 3' },
    { mahoso: 'GM03', sohoso: 'GM12345/12', khachhang: 'cty c', diachi: '123 duong 1, quan 4' },
    { mahoso: 'GM04', sohoso: 'GM12345/13', khachhang: 'cty d', diachi: '123 duong 1, quan 5' },
    { mahoso: 'GM05', sohoso: 'GM12345/14', khachhang: 'cty e', diachi: '123 duong 1, quan 6 123 duong 1, quan 6 123 duong 1, quan 6 123 duong 1, quan 6 123 duong 1, quan 6' },
    { mahoso: 'GM06', sohoso: 'GM12345/15', khachhang: 'cty f', diachi: '123 duong 1, quan 7' },
    { mahoso: 'GM07', sohoso: 'GM12345/16', khachhang: 'cty g', diachi: '123 duong 1, quan 8' },
    { mahoso: 'GM08', sohoso: 'GM12345/17', khachhang: 'cty h', diachi: '123 duong 1, quan 9' },
    { mahoso: 'GM09', sohoso: 'GM12345/18', khachhang: 'cty i', diachi: '123 duong 1, quan 10' },
    { mahoso: 'GM10', sohoso: 'GM12345/19', khachhang: 'cty j', diachi: '123 duong 1, quan 12' }
];

var webapp = new Vue({
    el: '#webapp',
    delimiters: ["{`", "`}"],
    data() {
        return {
        curYear: new Date().getFullYear(),
        dsnam: [2017, 2018 , 2019 , 2020],
        rows: listJson,
        s_mahoso: '',
        s_sohoso: '',
        s_khachhang: '',
        s_diachi: '',
        /* pagination */
        curPage: 0,
        itemsPerPage:7,
        filters: {},
        sortBy: {
            colName: 'stt',
            direction: 1
        }
    }},
    computed: {
        rowsFilter() {
            let rowX= this.rows;
            if (this.s_sohoso.length > 0) {
                rowX = rowX.filter(item =>
                    (item.sohoso.toLowerCase().indexOf(this.s_sohoso.toLowerCase()) > -1));
            };
            if (this.s_khachhang.length > 0) {
                rowX = rowX.filter(item =>
                    (item.khachhang.toLowerCase().indexOf(this.s_khachhang.toLowerCase()) > -1));
            };
            if (this.s_diachi.length > 0) {
                rowX = rowX.filter(item =>
                    (item.diachi.toLowerCase().indexOf(this.s_diachi.toLowerCase()) > -1));
            };
            return rowX;
        },
        showing() {
            let curPage = this.curPage + 0;
            let begin = (curPage * this.itemsPerPage) + 1;
            let end = begin - 1 + this.rowsFilter.length;
            let total = this.rowsFilter.length;
            return {
                begin, end, total
            };
        },
        totalPages() {
            return Math.ceil(this.rowsFilter.length / this.itemsPerPage);
        },
        rowsPage() {
            if (this.curPage != 0 && this.curPage >= this.totalPages) {
                this.curPage = this.totalPages - 1
            }
            let index = this.curPage * this.itemsPerPage;
            let rows = this.rowsFilter;
            let colName = this.sortBy.colName;

            rows = rows.sort((a, b) => {

                if (this.sortBy.direction == 1)
                    return a[this.sortBy.colName] >
                        b[this.sortBy.colName]
                        ? 1
                        : -1;
                else
                    return a[this.sortBy.colName] <
                        b[this.sortBy.colName]
                        ? 1
                        : -1;

                return 0;

            });

            return rows.slice(index, (index + this.itemsPerPage))
        },
        firstPage() {
            return 0;
        },
        lastPage() {
            return this.totalPages - 1;
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
            let pages = [];
            for (let i = 0; i < this.totalPages; i++) {
                pages.push(i);
            }
            if (pages.length > 5) {
                let active = this.curPage,
                    before = 2,
                    after = 2,
                    last = pages.length - 1,
                    diff;

                if (active - before < 0) {
                    diff = active - before;
                    diff = 0 - diff;
                    after += diff;
                    before += -diff;
                }
                if (active + after > last) {
                    diff = active + after;
                    diff = last - diff;
                    after += diff;
                    before += -diff;
                }
                pages = pages.reduce((pre, cur) => {
                    if (cur >= active - before && cur <= active + after) {
                        pre.push(cur)
                    }
                    return pre;
                }, [])
            }
            return pages;
        },
    },
    methods: {
        setPage(page) {
            this.curPage = page
        },
        sortByColumn(colName) {
            this.sortBy.colName == colName
                ? (this.sortBy.direction =
                      this.sortBy.direction * -1)
                : (this.sortBy.direction = 1);
            this.sortBy.colName = colName;
        },
    }
});