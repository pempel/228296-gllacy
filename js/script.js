var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var showLink = document.querySelector(".map-contacts a.button");
var closeButton = modal.querySelector(".modal-close");

if (modal && overlay && showLink && closeButton) {
  showLink.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal-show");
    overlay.classList.add("overlay-show");
  });

  closeButton.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  });
}
