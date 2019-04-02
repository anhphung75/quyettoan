var curYear = new Date().getFullYear();
/* import * as hoso from "./hoso/api";
var TatcaHoso = hoso.Tat(curYear);
*/

var webapp = new Vue({
    el: '#webapp',
    delimiters: ["{`", "`}"],
    data() {
        return {
        curYear: curYear,
        dsnam: [2017, 2018 , 2019 , 2020],
        /* pagination */
        rows: [],
        currentPage: 0,
        itemsPerPage:7,
        filters: {},
        sortBy: {
            column: this.columns[0].name,
            direction: 1
        }
    }},
    computed: {
        showing() {
            let currentPage = this.currentPage + 0;
            let begin = (currentPage * this.itemsPerPage) + 1;
            let end = begin - 1 + this.rows.length;
            let total = this.data.length;
            return {
                begin, end, total
            }
        },
        totalPages() {
            return Math.ceil(this.data.length / this.itemsPerPage)
        },
        rows() {
            if (this.currentPage != 0 && this.currentPage >= this.totalPages) {
                this.currentPage = this.totalPages - 1
            }
            let index = this.currentPage * this.itemsPerPage;
            let rows = this.data;
            let column = this.sortBy.column;

            rows = rows.sort((a, b) => {

                if (this.sortBy.direction == 1)
                    return a[this.sortBy.column] > b[this.sortBy.column] ? 1 : -1;
                else
                    return a[this.sortBy.column] < b[this.sortBy.column] ? 1 : -1;

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
            let next = this.currentPage + 1;
            return next > this.lastPage ? this.lastPage : next;
        },
        prevPage() {
            let prev = this.currentPage - 1;
            return prev < this.firstPage ? this.firstPage : prev;
        },
        pages() {
            let pages = [];
            for (let i = 0; i < this.totalPages; i++) {
                pages.push(i);
            }
            if (pages.length > 5) {
                let active = this.currentPage,
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
            this.currentPage = page
        },
    }
});