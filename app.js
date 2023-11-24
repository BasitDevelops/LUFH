const notificationIcon = document.querySelector(".notification-icon");
const notificationMenu = document.querySelector(".notification-menu");

const nameTag = document.querySelector(".name-tag");
const profileMenu = document.querySelector(".profile-menu");

const selectAPlanCloseBtn = document.querySelector(".select-a-plan .close-btn");
const selectAPlanCTA = document.querySelector(".select-a-plan");

const setupProgress = document.querySelector(".progress");

const accordionToggleBtn = document.querySelector(".accordion-toggle-btn");
const accordion = document.querySelector(".accordion");

const accordionItems = document.querySelectorAll(".accordion .step");

const checkMarkBtns = document.querySelectorAll(".check-mark-btn");

notificationIcon.addEventListener("click", () => {
  if (profileMenu.classList.contains("open-menu")) {
    profileMenu.classList.remove("open-menu");
  }
  notificationMenu.classList.toggle("open-menu");
});

nameTag.addEventListener("click", () => {
  if (notificationMenu.classList.contains("open-menu")) {
    notificationMenu.classList.remove("open-menu");
  }
  profileMenu.classList.toggle("open-menu");
});

selectAPlanCloseBtn.addEventListener("click", () => {
  selectAPlanCTA.classList.add("close");
});

accordionToggleBtn.addEventListener("click", () => {
  accordion.classList.toggle("open-menu");

  if (!accordion.classList.contains("open-menu")) {
    accordionToggleBtn.innerHTML = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>
  </svg>`;
  } else {
    accordionToggleBtn.innerHTML = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A"/>
    </svg>`;
  }
});

accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener("click", () => {
    // Remove "active" class from all accordion items
    accordionItems.forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });

    // Toggle "active" class on the clicked accordion item
    accordionItem.classList.add("active");
  });
});

let progress = 0;
checkMarkBtns.forEach((btn) => {
  //   btn.addEventListener("mouseover", () => {
  //     btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
  //     </svg>`;
  //   });

  //   btn.addEventListener("mouseout", () => {
  //     btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
  //     </svg>`;
  //   });

  btn.addEventListener("click", () => {
    const defaultSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
      </svg>`;

    const firstSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#D9D9D9" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    const secondSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    const thirdSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    const fourthSvg = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.77574 4.89535C9.01093 4.83993 9.24651 4.98566 9.30193 5.22085L10.5318 10.4402C10.5872 10.6754 10.4415 10.9109 10.2063 10.9663L7.59662 11.5813C7.36143 11.6367 7.12585 11.491 7.07043 11.2558C7.01501 11.0206 7.16074 10.785 7.39593 10.7296L9.57976 10.215L8.45024 5.42154C8.39483 5.18635 8.54056 4.95077 8.77574 4.89535Z" fill="white"/>
      </g>
    </svg>`;

    const fifthSvg = `<svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#303030"></circle>
      <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
        ></path>
        </svg>`;

    // setupProgress.style = {
    //   width: "16px",
    // };

    if (btn.id === "false") {
      progress = progress + 16;
      setupProgress.style.width = `${progress}px`;
      console.log(setupProgress.style.width);
      setTimeout(() => {
        btn.innerHTML = firstSvg;
      }, 100);
      setTimeout(() => {
        btn.innerHTML = secondSvg;
      }, 200);
      setTimeout(() => {
        btn.innerHTML = thirdSvg;
      }, 300);
      setTimeout(() => {
        btn.innerHTML = fourthSvg;
      }, 400);
      setTimeout(() => {
        btn.innerHTML = fifthSvg;
      }, 500);

      console.log(setupProgress);

      btn.id = true;
    } else {
      progress = progress - 16;
      setupProgress.style.width = `${progress}px`;
      setTimeout(() => {
        btn.innerHTML = fourthSvg;
      }, 100);
      setTimeout(() => {
        btn.innerHTML = thirdSvg;
      }, 200);
      setTimeout(() => {
        btn.innerHTML = secondSvg;
      }, 300);
      setTimeout(() => {
        btn.innerHTML = firstSvg;
      }, 400);
      setTimeout(() => {
        btn.innerHTML = defaultSvg;
      }, 500);

      btn.id = false;
    }
  });
});
