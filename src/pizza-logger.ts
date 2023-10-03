export const pizzaLogger = ({ size, pizzaType }) => {
	if (pizzaType) {
		console.log(`Ordering a ${size} ${pizzaType} pizza`)
	} else {
		console.log(`Ordering a ${size} pizza`)
	}
}
