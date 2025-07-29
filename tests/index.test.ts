import { describe, it } from "vitest";
import { AuthApi, Configuration } from "../src/index";

describe("Basic API", () => {
	it("can instantiate the base API without error ", async () => {
		const config = new Configuration({
			basePath: "http://localhost:3000/api",
			apiKey: "foo_bar",
		});
		new AuthApi(config);
	});
});
