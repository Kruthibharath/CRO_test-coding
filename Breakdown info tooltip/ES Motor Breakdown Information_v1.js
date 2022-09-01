// Start Variation JS
void (function loadVariation() {
    const testId = "esure_sw_motor_breakdown_info";
    const testName = "000822-ESU: ES Motor: Breakdown Information";
    const test = {
        data: {
            modal: [
                {
                    id: "im-modal-1",
                    modalTitle: "Help over 1/4 mile from home",
                    modalCopyHTML: `
              <p>
                This covers incidents more than 1/4 mile away from your home and is limited to the vehicle shown on your Schedule and Certificate of Motor Insurance.
              </p>
            `,
                },
                {
                    id: "im-modal-2",
                    modalTitle: "Towing to a garage within 10 miles",
                    modalCopyHTML: `
              <p>
                If the vehicle can't be repaired at the roadside, it will be towed to a garage of your choice within 10 miles of the incident or to another destination of your choice within 10 miles of the incident.
              </p>
            `,
                },
                {
                    id: "im-modal-3",
                    modalTitle: "Help within 1/4 miles from home",
                    modalCopyHTML: `
              <p>
                This covers incidents at your home or within 1/4 mile of your home and is limited to the vehicle shown on your Schedule and Certificate of Motor Insurance.
              </p>
            `,
                },
                {
                    id: "im-modal-4",
                    modalTitle: "Take car to any one UK destination",
                    modalCopyHTML: `
              <p>
                Recovery of the vehicle, driver and up to 8 passengers to your home address, or your original intended destination in the UK or a suitable garage.
              </p>
            `,
                },
                {
                    id: "im-modal-5",
                    modalTitle: "Other transport to finish journey",
                    modalCopyHTML: `
              <p>
                If your vehicle can't be repaired at the roadside or at home, you’ll be offered the choice of the following services:
              </p>
              <ul>
                <li>Recovery of the vehicle, driver and up to 8 passengers to your home address, or your original intended destination in the UK or a suitable garage.</li>
                <li>Hire car to complete your journey up to £100.</li>
                <li>Overnight accommodation up to £150 per person and £600 per incident.</li>
                <li>Alternative transport of the driver to continue the journey, up to £100.</li>
              </ul>
            `,
                },
                {
                    id: "im-modal-6",
                    modalTitle: "Chaffeur - if driver too ill",
                    modalCopyHTML: `
              <p>
                If the only driver is unable to drive due to illness or injury, the RAC will also pay for a chauffeur to take the driver, up to 8 passengers, the vehicle and any luggage to your destination anywhere in the UK.
              </p>
            `,
                },
            ],
        },
        init: function () {
            // Add a test specific classname to the body element
            document.body.classList.add(testId);

            // Below function calls order is important
            test.preSetupVariables();
            test.preSetupEvents();
            test.mainCSS();
            test.mainJS();
            test.postSetupVariables();
            test.postSetupEvents();
            test.registerMutationObservers();
        },
        preSetupVariables: function () {
            // Setup test independent/global variables
            test.name = testName;
            test.version = "Version 2.3";
            test.variation = "Variation 2";
        },
        preSetupEvents: function () {


            // Setup test independent/global events
            document.addEventListener("click", test.handleDocumentClicks);
        },
        mainCSS: function () {
            var styleEl = document.createElement("style");
            styleEl.setAttribute("type", "text/css");
            document.head.appendChild(styleEl).textContent = ``;
        },
        insertInfoCircleIcon: function () {
            // Get first breakdown table
            const breakdownTable = document.querySelectorAll("es-breakdown-table table.breakdown-table")[0];

            // Return if no breakdown table
            if (!breakdownTable) return;

            // Identify first breakdown table
            breakdownTable.classList.add("im-first-breakdown-table");

            // Get 2nd to 4th row of first breakdown table
            const breakdownInfoPanels = Array.from(
                breakdownTable.querySelectorAll("tbody tr")
            ).slice(0, 6);

            // Loop over above rows and prepend info-circle icon
            breakdownInfoPanels.forEach((item, index) => {
                item
                    .querySelector(".breakdown-info-panel")
                    .insertAdjacentHTML(
                        "afterbegin",
                        `<i class="fas fa-info-circle im-open-modal" id="im-icon-${index + 1
                        }" tabindex="0" data-target-modal="#im-modal-${index + 1}"></i>`
                    );
            });
        },
        mainJS: function () {

            // Insert info circle icon to first breakdown table
            test.insertInfoCircleIcon();

            // Insert 3 modals to the body
            test.data.modal.forEach((item) => {
                document.body.insertAdjacentHTML(
                    "beforeend",
                    test.buildModalMarkup(item.id, item.modalTitle, item.modalCopyHTML)
                );
            });
        },
        buildModalMarkup: function (modalId, modalTitle, modalCopy) {
            var markup;

            markup = `
          <div class='im-modal' id='${modalId}' data-animation='slideInOutTop'>
            <div class='im-modal__content'>
              <div class='im-modal__header'>
                <h4 class='im-modal__title'>${modalTitle}</h4>
                <i class='fas fa-times im-modal__close' tabindex="0"></i>
              </div>
              <div class='im-modal__body'>
                <div class='im-modal__copy'>
                  ${modalCopy}
                </div>
              </div>
            </div>
          </div>
        `;

            return markup;
        },
        postSetupVariables: function () {
            // Setup test dependent variables
            test.modal = document.querySelector(".im-modal");
        },
        postSetupEvents: function () {
            // Setup test dependent events
            // test.modal.addEventListener("click", test.handleModalClick);
        },
        handleDocumentClicks: function (e) {
            // Open modal
            if (e.target.className.includes("im-open-modal")) {
                const id = e.target.dataset.targetModal;
                document.querySelector(id).classList.add("is-visible");
            }

            // Remove modal
            if (
                e.target.className.includes("im-modal__close") ||
                !e.target.closest(".im-modal__content")
            ) {
                const modal = e.target.closest(".im-modal");

                // If modal found, remove class is-visible
                modal && modal.classList.remove("is-visible");
            }
        },
        registerMutationObservers: function () {
            // Re insert info circle icon on DOM change
            new MutationObserver(() => {
                if (
                    !document.querySelector("i.im-open-modal") &&
                    location.href.includes("motor/breakdown")
                ) {
                    test.insertInfoCircleIcon();
                    // console.log("Info circle:", "Info circle icon has been re inserted!");
                }
            }).observe(document, { subtree: true, childList: true });
        },
    };

    // Polling conditions
    if (
        !document.querySelector(`.${testId}`) &&
        document.querySelector("table.breakdown-table") &&
        location.href.includes("motor/breakdown")
    ) {
        try {
            // Activate test
            test.init();

            // Success log
            // console.table(
            //     "Success:",
            //     `${test.name}: ${test.variation}: ${test.version}`
            // );
        } catch (error) {
            // Error log
            //console.table("Error:", `${test.name}: Initialization error:`, error);
        }
    } else {
        setTimeout(loadVariation, 25);
    }
})(); // End Variation JS