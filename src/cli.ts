import { Command } from "commander"
import { pizzaLogger } from "./pizza-logger"

export const cli = new Command()

cli
	.version("0.0.1")
	.option("-p, --pizza-type <type>", "Flavour of pizza")
	.command("order <size>")
	.description("order a pizza")
	.action((size) => {
		pizzaLogger({
			pizzaType: cli.pizzaType,
			size,
		})
	})
