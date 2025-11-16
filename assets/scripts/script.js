'use strict';

document.getElementById("cancel-dropdown").addEventListener("click", function() {
  document.querySelector(".user-info").classList.add("hidden")
})

document.getElementById("user-icon").addEventListener("click", function() {
  document.querySelector(".user-info").classList.remove("hidden")
})

const fileInput = document.getElementById("fileInput");
  const preview = document.getElementById("preview");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      preview.innerHTML = `<img src="${imgURL}" style="max-width:500px; border:1px solid #ccc; border-radius: 5px;">`;
    }
});