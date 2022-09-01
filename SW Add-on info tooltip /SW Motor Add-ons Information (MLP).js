// Import main Sass/SCSS here
//import "./variation-1.scss";

// Start Variation JS
void (function loadVariation() {
  const testId = "esure_sw_motor_addons_information";
  const testName = "000834-ESU SW Motor Add-ons Information - MLP";
  const test = {
    data: {
      modal: [
        {
          id: "c-modal-1",
          modalTitle: "Accident caused by someone else",
          modalCopyHTML: `
            <p>
              Your claim will be assessed and if it is more likely than not that incurring legal costs will result in a successful or more advantageous outcome, we will pay up to £100,000 (including VAT) towards legal costs incurred to help pursue your claim.
            </p>
          `,
        },
        {
          id: "c-modal-2",
          modalTitle: "Motoring prosecution",
          modalCopyHTML: `
            <p>
              Your claim will be assessed and if it is more likely than not that incurring legal costs will result in a successful or more advantageous outcome, we will provide up to £100,000 (including VAT) to defend you if charged with a motoring offence arising from an incident while using your car (and which is not covered under Section 1 Liability to other people and their property).
            </p>
          `,
        },
        {
          id: "c-modal-3",
          modalTitle: "Motoring database dispute",
          modalCopyHTML: `
            <p>
              Your claim will be assessed and if it is more likely than not that incurring legal costs will result in a successful or more advantageous outcome, we will pay legal costs up to £10,000 to represent you in a dispute with the police, government agency and/or insurer:
            </p>
            <ul>
              <li>if the insured vehicle is seized due to a failure in communication between your insurer and the Motor Insurance Database, or</li>
              <li>if incorrect information is held / recorded on a motoring database about your driving record (e.g. driving licence, claims, convictions) or</li>
              <li>if incorrect information is held about the insured vehicle, which adversely affects you.</li>
            </ul>
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
      test.version = "Version 1.2";
      test.variation = "Variation 1";
    },
    preSetupEvents: function () {
      // Setup test independent/global events
      document.addEventListener("click", test.handleDocumentClicks);
    },
    mainCSS: function () {
      var styleEl = document.createElement("style");
      styleEl.setAttribute("type", "text/css");
      document.head.appendChild(styleEl).textContent = `
        // .${testId} * {
        //   border: 2px solid red;
        // }
      `;
    },
    insertInfoCircleIcon: function () {
      // Get first breakdown table
      const breakdownTableFirst = document.querySelectorAll(
        "table.breakdown-table"
      )[0];

      // Return if no breakdown table
      if (!breakdownTableFirst) return;

      // Identify first breakdown table
      breakdownTableFirst.classList.add("c-first-breakdown-table");

      // Get 2nd to 4th row of first breakdown table
      const breakdownInfoPanels = Array.from(
        breakdownTableFirst.querySelectorAll("tbody tr")
      ).slice(1, 4);

      // Loop over above rows and prepend info-circle icon
      breakdownInfoPanels.forEach((item, index) => {
        item
          .querySelector(".breakdown-info-panel")
          .insertAdjacentHTML(
            "afterbegin",
            `<i class="fas fa-info-circle c-open-modal" id="c-icon-${
              index + 1
            }" tabindex="0" data-target-modal="#c-modal-${index + 1}"></i>`
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
        <div class='c-modal' id='${modalId}' data-animation='slideInOutTop'>
          <div class='c-modal__content'>
            <div class='c-modal__header'>
              <h4 class='c-modal__title'>${modalTitle}</h4>
              <i class='fas fa-times c-modal__close' tabindex="0"></i>
            </div>
            <div class='c-modal__body'>
              <div class='c-modal__copy'>
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
      test.modal = document.querySelector(".c-modal");
    },
    postSetupEvents: function () {
      // Setup test dependent events
      // test.modal.addEventListener("click", test.handleModalClick);
    },
    handleDocumentClicks: function (e) {
      // Open modal
      if (e.target.className.includes("c-open-modal")) {
        const id = e.target.dataset.targetModal;
        document.querySelector(id).classList.add("is-visible");
      }

      // Remove modal
      if (
        e.target.className.includes("c-modal__close") ||
        !e.target.closest(".c-modal__content")
      ) {
        const modal = e.target.closest(".c-modal");

        // If modal found, remove class is-visible
        modal && modal.classList.remove("is-visible");
      }
    },
    registerMutationObservers: function () {
      // Re insert info circle icon on DOM change
      new MutationObserver(() => {
        if (
          !document.querySelector("i.c-open-modal") &&
          location.href.includes("motor/cover-options")
        ) {
          test.insertInfoCircleIcon();
          // console.log("Icon re-inserted:", "Info circle icon has been re inserted!");
        }
      }).observe(document, { subtree: true, childList: true });
    },
  };

  // Polling conditions
  if (
    !document.querySelector(`.${testId}`) &&
    document.querySelector("table.breakdown-table") &&
    location.href.includes("motor/cover-options")
  ) {
    try {
      // Activate test
      test.init();

      // Success log
      //console.table(
        //"Success:",
        //`${test.name}: ${test.variation}: ${test.version}`
      //);
    } catch (error) {
      // Error log
      //console.table("Error:", `${test.name}: Initialization error:`, error);
    }
  } else {
    setTimeout(loadVariation, 25);
  }
})(); // End Variation JS