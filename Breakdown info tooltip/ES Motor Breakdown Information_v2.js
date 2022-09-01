var breakdownInfo = {
    init: function () {
        this.mainCss();
        this.mainJs();
    },
    mainCss: function () {
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        document.head.appendChild(styles).textContent =
            '';
    },
    mainJs: function () {

        // function to insert info icon
        function insertInfoIcon() {

            // Get first breakdown table
            const breakdownTable = document.querySelectorAll("es-breakdown-table table.breakdown-table")[0];
            breakdownTable.classList.add("im-first-breakdown-table");

            // Get 2nd to 4th row of first breakdown table
            const breakdownInfoPanels = Array.from(breakdownTable.querySelectorAll("thead th")).slice(1, 4);

            // Loop over above rows and prepend info-circle icon
            breakdownInfoPanels.forEach((item, index) => {
                if (item.classList.contains('icon-added') === false) {

                    item.classList.add('icon-added');
                    item.insertAdjacentHTML(
                        "beforeend",
                        `<i class="fas fa-info-circle c-open-modal" id="im-icon-${index + 1
                        }" tabindex="0"></i>`
                    );
                }
            });

        }

        insertInfoIcon()

        // Open info panel based on click

        document.addEventListener("click", function (e) {

            if (e.target.id === 'im-icon-1') {
                if (e.target.parentElement.classList.contains('breakdown-selected-header') === false) {
                    openInfoPanel('#tab-anchor-0 .accordion-section');
                }
                document.querySelector('.whatsCoveredLink a').click();
            }

            if (e.target.id === 'im-icon-2') {

                if (e.target.parentElement.classList.contains('breakdown-selected-header') === false) {
                    openInfoPanel('#tab-anchor-1 .accordion-section');
                }
                document.querySelector('.whatsCoveredLink a').click();
            }

            if (e.target.id === 'im-icon-3') {
                if (e.target.parentElement.classList.contains('breakdown-selected-header') === false) {
                    openInfoPanel('#tab-anchor-2 .accordion-section');
                }
                document.querySelector('.whatsCoveredLink a').click();
            }
        });

        // panel click function
        function openInfoPanel(selector) {

            document.querySelector('.whatsCoveredLink a').click();
            document.querySelector(selector).click();
        }

        // Re insert info circle icon on DOM change
        new MutationObserver(() => {
            if (esureDataLayer.pageName.indexOf('MOTOR Breakdown Cover') >= 0 &&
                document.querySelector("es-breakdown-table table.breakdown-table thead")) {
                insertInfoIcon()
            }
        }).observe(document, { subtree: true, childList: true });

    },
};

(function pollForBreakdownTable() {
    if (document.querySelector("es-breakdown-table table.breakdown-table thead") &&
        esureDataLayer.pageName.indexOf('MOTOR Breakdown Cover') >= 0) {

        breakdownInfo.init();
        //console.log('000822-ESU: ES Motor: Breakdown Information - v:1.0');

    } else {
        setTimeout(pollForBreakdownTable, 30);
    }
})();