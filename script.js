/* when user clicks next or back switch page */

const setStep = step => {
    document.querySelectorAll('.step-content').forEach(element => element.style.display = 'none'); /* first hide all pages except the one with class current*/
    document.querySelector("[data-step='" + step + "']").style.display = 'block'; /* display the selected page */
   

}
document.querySelectorAll("[data-set-step]").forEach(element => { /* select all buttons */
	element.onclick = event => {
		event.preventDefault();
		setStep(parseInt(element.dataset.setStep)); /* call function setStep with value of data-set-step */
	};
});

