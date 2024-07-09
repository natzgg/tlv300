const isProduction = process.env.NODE_ENV === "production";

const config = {
  apiUrl: !isProduction
    ? process.env.NEXT_PUBLIC_WHOIS_API_URL
    : process.env.WHOIS_API_URL,
  apiKey: !isProduction
    ? process.env.NEXT_PUBLIC_WHOIS_API_KEY
    : process.env.WHOIS_API_KEY,
};

export default config;
