const Direction = {
  IN: "IN",
  OUT: "OUT",
};
const Type_Column = {
  BODY: "BODY",
  HEAD: "HEAD",
};
const injectCSS = () => {
  const style = document.createElement("style");
  style.textContent = `

    `;
  document.head.append(style);
};
const scaleColumn = (event, _direction, _index) => {
  let index;
  if (_index) {
    index = _index;
  } else {
    const el = event.target;
    const parentBody = el.parentElement;
    index = [...parentBody.children].indexOf(el);
  }
  //console.log(`Index `,index);
  const allTrs = document.querySelectorAll(".breakdown-table tr");
  allTrs.forEach((tItem) => {
    const innerChilds = [...tItem.children];
    const selectedChild = innerChilds[index];
    if (_direction === Direction.IN && !selectedChild.classList.contains('breakdown-info-panel')) {
      selectedChild.classList.add("scale-col");
    } else {
      selectedChild.classList.remove("scale-col");
    }
  });
  if (index > 0) {
    // change the head
    const th = document.querySelector(".breakdown-table th");
    const selectedHeader = [...th.parentElement.children][index];
    if (_direction === Direction.IN) {
      selectedHeader.classList.add("scale-col");
    } else {
      selectedHeader.classList.remove("scale-col");
    }
  }
};
const scaleHeader = (event, _direction) => {
  const el = event.target;
  const parentBody = el.parentElement;
  const index = [...parentBody.children].indexOf(el);
  const allTrs = [...parentBody.parentElement.children];
  allTrs.forEach((tItem) => {
    const innerChilds = [...tItem.children];
    const selectedChild = innerChilds[index];
    if (_direction === Direction.IN) {
      selectedChild.classList.add("scale-col");
    } else {
      selectedChild.classList.remove("scale-col");
    }
  });
  if (index > 0) {
    const allTrs = document.querySelectorAll(".breakdown-table tbody tr");
    allTrs.forEach((tItem) => {
      const innerChilds = [...tItem.children];
      const selectedChild = innerChilds[index];
      if (_direction === Direction.IN) {
        
        selectedChild.classList.add("scale-col");
      } else {
        selectedChild.classList.remove("scale-col");
      }
    });
  }
};

const removeListeners = () => {
  document.querySelectorAll('.scale-col').forEach((item) => {item.classList.remove('scale-col');});
};
// const wrapDiv = (item) => {
//   item.innerHTML = `<div class="scale-wrapper">${item.innerHTML}</div>`;
// };
const mouseEnterEvent = (event, _type) => {
  removeListeners();
  if (_type === Type_Column.BODY) {
    scaleColumn(event, Direction.IN);
  } else {
    scaleHeader(event, Direction.IN);
  }
};
const mouseLeaveEvent = (event, _type) => {
  if (_type === Type_Column.BODY) {
    scaleColumn(event, Direction.OUT);
  } else {
    scaleHeader(event, Direction.OUT);
  }
};
const injectListeners = () => {
  var tds = document.querySelectorAll(".breakdown-table td");
  tds.forEach((item) => {
    const parentBody = item.parentElement;
    const index = [...parentBody.children].indexOf(item);
    if (index > 0 && !item.parentElement.classList.contains("best-match-row")) {
      //wrapDiv(item);
      ["touchstart", "mouseenter"].forEach((evt) => {
        item.addEventListener(evt, (event) => {
          mouseEnterEvent(event, Type_Column.BODY);
        });
      });
      ["touchend", "mouseleave"].forEach((evt) => {
        item.addEventListener(evt, (event) => {
          mouseLeaveEvent(event, Type_Column.BODY);
        });
      });
    }
  });
  var tds = document.querySelectorAll(".breakdown-table th");
  tds.forEach((item) => {
    const parentBody = item.parentElement;
    const index = [...parentBody.children].indexOf(item);
    if (index > 0) {
      //wrapDiv(item);
      ["touchstart", "mouseenter"].forEach((evt) => {
        item.addEventListener(evt, (event) => {
          mouseEnterEvent(event, Type_Column.HEAD);
        });
      });
      ["touchend", "mouseleave"].forEach((evt) => {
        item.addEventListener(evt, (event) => {
          mouseLeaveEvent(event, Type_Column.HEAD);
        });
      });
    }
  });
  const brkdwnTable = document.querySelector("es-breakdown-table");
  brkdwnTable.addEventListener("mouseleave", function () {
    (function pollingFunction() {
      if (document.querySelector(".best-match-column.display-best-match")) {
        raiseDefault();
        //console.log("Mouse out from table");
      } else {
        setTimeout(pollingFunction, 25);
      }
    })();
  });
};

const raiseDefault = () => {
  // raise the default one
  const bestMatchEl = document.querySelector(".display-best-match");
  const selectedIndex = [...bestMatchEl.parentElement.children].indexOf(
    bestMatchEl
  );
  scaleColumn(null, Direction.IN, selectedIndex);
 // console.log("Default raised!!");
};
const init = () => {
  injectCSS();
  injectListeners();
  raiseDefault();
};
//add page change listener
window.addEventListener("pageChange", function () {
  if (window.location.pathname === "/motor/breakdown") {
    (function pollingFunction() {
      if (document.querySelector(".best-match-column.display-best-match")) {
        init();
        console.log(
          "Page Changed: 000801-ESU: SW Breakdown Best Match Prominence: All Devices"
        );
      } else {
        setTimeout(pollingFunction, 25);
      }
    })();
  }
});
//detect safari
var isSafariBrowser = () => navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') <= -1;
if(isSafariBrowser() == true){
  document.body.classList.add("safari");
}
// call the init
(function pollingFunction() {
  if (document.querySelector(".best-match-column.display-best-match")) {
    init();
    console.log("000801-ESU: SW Breakdown Best Match Prominence: All Devices - V 1.10");
  } else {
    setTimeout(pollingFunction, 25);
  }
})();
