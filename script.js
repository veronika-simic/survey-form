/* when user clicks next or back switch page */

const setStep = step => {
    document.querySelectorAll('.step-content').forEach(element => element.style.display = 'none'); /* first hide all pages except the one with class current*/
    document.querySelector("[data-step='" + step + "']").style.display = 'block'; /* display the selected page */
   /* change dots in header */
   document.querySelectorAll('.steps .step').forEach((element, index) => {
   index < step-1 ? element.classList.add("complete") : element.classList.remove("complete"); /* complete or not */
   index == step-1 ? element.classList.add("current") : element.classList.remove("current"); /* current or not */
   
})

}
document.querySelectorAll("[data-set-step]").forEach(element => { /* select all buttons */
	element.onclick = event => {
		event.preventDefault();
		setStep(parseInt(element.dataset.setStep)); /* call function setStep with value of data-set-step */
	};
});

