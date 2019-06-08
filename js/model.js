// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let modal1 = document.getElementById("proj_NS");
let modal2 = document.getElementById("proj_FYB");
let modal3 = document.getElementById("proj_QBG");

modal1.addEventListener("click", ()=> {openModal(modal1)});
modal2.addEventListener("click", () => { openModal(modal2) });
modal3.addEventListener("click", () => { openModal(modal3) });


function openModal(modal) {
  // When the user clicks on the button, open the modal 
console.log(modal)
  switch (modal.id) {
    case "proj_NS":
      let a = document.getElementById("modal_NS");
      a.style.display = "block"
      break;
    case "proj_QBG":
      let b = document.getElementById("modal_QBG");
      b.style.display = "block"
      break;

    case "proj_FYB":
      let c = document.getElementById("modal_FYB");
      c.style.display = "block"
      break;

    default:
    // code block
  }
}


function closeModal(event) {
// When the user clicks anywhere outside of the modal, close it
  let modal = document.getElementById(event.target.id);
  if (event.target == modal) {
    modal.style.display = "none";
  }

}