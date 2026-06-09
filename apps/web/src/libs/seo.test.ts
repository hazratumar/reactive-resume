import { describe, expect, it } from "vitest";
import {
	createNoindexFollowMeta,
	createRootStructuredDataScript,
	getCanonicalRootUrl,
	getRootStructuredData,
} from "./seo";

describe("getCanonicalRootUrl", () => {
	it("uses the production root when no origin is available", () => {
		expect(getCanonicalRootUrl()).toBe("https://resumebuilder.com/");
	});

	it("normalizes an app origin to the root URL", () => {
		expect(getCanonicalRootUrl("http://localhost:3000")).toBe("http://localhost:3000/");
		expect(getCanonicalRootUrl("https://resumebuilder.com/")).toBe("https://resumebuilder.com/");
	});
});

describe("createNoindexFollowMeta", () => {
	it("returns the robots noindex metadata used by private app surfaces", () => {
		expect(createNoindexFollowMeta()).toEqual({ name: "robots", content: "noindex, follow" });
	});
});

describe("createRootStructuredDataScript", () => {
	it("serializes JSON-LD using the structured data script id", () => {
		const script = createRootStructuredDataScript("https://resumebuilder.com/");

		expect(script.id).toBe("resume-builder-structured-data");
		expect(script.type).toBe("application/ld+json");
		expect(JSON.parse(script.children)).toMatchObject({ "@context": "https://schema.org" });
	});

	it("escapes script-breaking sequences in JSON-LD children", () => {
		const script = createRootStructuredDataScript("https://resumebuilder.com/</script><!---->\u2028\u2029");

		expect(script.children).not.toContain("</script");
		expect(script.children).not.toContain("<!--");
		expect(script.children).not.toContain("\u2028");
		expect(script.children).not.toContain("\u2029");
		expect(script.children).toContain("\\u003C/script");
		expect(script.children).toContain("\\u003C!--");
		expect(script.children).toContain("\\u2028");
		expect(script.children).toContain("\\u2029");
	});
});

describe("getRootStructuredData", () => {
	it("describes only conservative visible product facts", () => {
		const schemas = getRootStructuredData("https://resumebuilder.com/");

		expect(schemas).toHaveLength(4);
		expect(schemas[0]).toMatchObject({
			"@type": "WebSite",
			name: "Resume Builder",
			url: "https://resumebuilder.com/",
		});
		expect(schemas[1]).toMatchObject({
			"@type": ["SoftwareApplication", "WebApplication"],
			name: "Resume Builder",
			applicationCategory: "BusinessApplication",
			operatingSystem: "Web",
			offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
		});
		expect(schemas[3]).toMatchObject({
			"@type": "FAQPage",
			mainEntity: expect.arrayContaining([
				expect.objectContaining({
					name: "Is Resume Builder really free?",
				}),
			]),
		});
	});
});
