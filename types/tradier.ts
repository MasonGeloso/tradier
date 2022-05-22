export interface Greek {
    delta: number;
    gamma: number;
    theta: number;
    vega: number;
    rho: number;
    phi: number;
    bid_iv: number;
    mid_iv: number;
    ask_iv: number;
    smv_vol: number;
    updated_at: string;
}

export interface Option {
    symbol: string;
    description: string;
    exch: string;
    type: string;
    last: number;
    change: number;
    volume: number;
    open: number;
    high: number;
    low: number;
    close: number;
    bid: number;
    ask: number;
    underlying: string;
    strike: number;
    change_percentage: number;
    average_volume: number;
    last_volume: number;
    trade_date: number | Date;
    prevclose: number;
    week_52_high: number;
    week_52_low: number;
    bidsize: number;
    bidexch: string;
    bid_date: number | string;
    asksize: number;
    askexch: string;
    ask_date: number | string;
    open_interest: number;
    contract_size: number;
    expiration_date: string;
    expiration_type: string;
    option_type: "put" | "call";
    root_symbol: string;
    greeks?: Greek;
}

export interface HistoricPricingData {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

export interface SeriesData {
    time: string;
    timestamp: number;
    price: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    vwap: number;
}

export interface Security {
    symbol: string;
    exchange: string;
    type: string;
    description: string;
}

export type StrikeResponse = number[];

export type OptionsExpirationResponse = string[] | { date: string; strikes: number[] }[];

export type Interval = "daily" | "monthly" | "weekly";

export type MinuteInterval = "tick" | "1min" | "5min" | "15min";
