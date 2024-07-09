import config from "@/config";

export const fetchWhoisData = async (domainName: string | null) => {
  try {
    const response = await fetch(
      `${config.apiUrl}?domainName=${domainName}&apiKey=${config.apiKey}&outputFormat=JSON`
    );
    if (!response.ok) {
      throw new Error(`Error fetching WHOIS data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching WHOIS data", error);
    throw error;
  }
};
