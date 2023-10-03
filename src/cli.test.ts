import { vi, expect, test, describe } from "vitest"
import { cli } from "./cli"
import { pizzaLogger } from "./pizza-logger"

vi.mock(`./pizza-logger`, () => {
	return {
		pizzaLogger: vi.fn(() => console.log(`yay it was mocked!`)),
	}
})

describe(`mocking cli in same process`, () => {
	test("mocks pizza logger for funsies", async () => {
		const simulatedArgv = [
			"node",
			"index.js",
			..."order large --pizza-type pepperoni".split(" "),
		]

		await cli.parseAsync(simulatedArgv)

		expect(pizzaLogger).toBeCalledTimes(1)
	})
})
