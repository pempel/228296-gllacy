var modal = document.querySelector(".modal");
var showLink = document.querySelector(".map-contacts a.button");
var closeButton = modal.querySelector(".modal-content-close");

if (modal && showLink && closeButton) {
  showLink.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal-show");
  });

  closeButton.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.remove("modal-show");
  });
}
