
const stackElements = (originalElement, occ, distance) => {


	console.log("stackElements", originalElement);

	let i = 0

	while(i < occ) {

		const clonedElement = originalElement.cloneNode(true);

		// Calculate the position of each cloned element
		const leftOffset = i * distance;    // Horizontal distance
		const topOffset = i * distance;     // Vertical distance

		// Set the position of the cloned element
		clonedElement.style.position = 'absolute';
		clonedElement.style.left = `${leftOffset}px`;
		clonedElement.style.top = `${topOffset}px`;

		// Append the cloned element to the body
		originalElement.parentElement.appendChild(clonedElement);

		i++
	}

	originalElement.remove();

}

document.addEventListener("DOMContentLoaded", () => {

	const browserContainer = document.querySelector(".browser-back-container")

	stackElements(browserContainer, 3, 10)


})