export const fetchWhoisData = async (domainName: string | null) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WHOIS_API_URL}?domainName=${domainName}&apiKey=${process.env.NEXT_PUBLIC_WHOIS_API_KEY}&outputFormat=JSON`
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
