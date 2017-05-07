let layout;
import $ from 'jquery';

class Layout {
    constructor() {
    }

    layoutAdjustments() {
        this.boxGrid();
        
        $(window).resize(() => {
            this.boxGrid();
        });
    }

    boxGrid() {
        const $webTable = $('.web-table');
        const $grid = $webTable.find('.grid');

        const $col = $webTable.find('.col');
        $col.width(parseInt($webTable.width())/18);

        for (let grid of $grid) {
            const $this = $(grid);
            $this.height($this.width());
        }
    }

    static init() {
        if (!layout) {
            layout = new Layout();
        }
        return layout;
    }

}

export default Layout;