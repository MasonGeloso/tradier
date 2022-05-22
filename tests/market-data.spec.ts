import Tradier from "../src";

describe("Market Data Tests", () => {
    const api = new Tradier(process.env.TRADIER_KEY, "prod");

    it("Gets quotes", async () => {
        const data = await api.marketData.getQuotes("AAPL", true);

        if (Array.isArray(data)) expect(data[0].symbol).toBe("AAPL");
        else expect(data.symbol).toBe("AAPL");
    });

    it("Gets empty option chain", async () => {
        const data = await api.marketData.getOptionChain("AAPL", "2022-08-01", true);
        if (!Array.isArray(data)) expect(data.options).toBeNull();
    });

    it("Gets empty option chain", async () => {
        const data = await api.marketData.getOptionChain("TSLA", "2022-07-01", true);
        if (Array.isArray(data)) expect(data.length).toBeGreaterThan(0);
    });

    it("Gets option strikes", async () => {
        const data = await api.marketData.getOptionStrikes("TSLA", "2022-07-01");
        expect(typeof data[0]).toBe("number");
    });

    it("Gets option symbols", async () => {
        const data = await api.marketData.getOptionSymbols("TSLA");
        expect(typeof data[0]).toBe("string");
    });

    it("Gets historic pricing", async () => {
        const data = await api.marketData.getHistoricalPricing(
            "TSLA",
            "weekly",
            "2022-05-01",
            "2022-05-10"
        );

        expect(typeof data.day[0].open).toBe("number");
    });

    it("Gets ETB List", async () => {
        const data = await api.marketData.getETBList();
        expect(typeof data[0].symbol).toBe("string");
    });
});
