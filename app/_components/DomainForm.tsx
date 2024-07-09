"use client";

import { fetchWhoisData } from "../../_services/whoisService";
import { ShowTableType } from "../../_types/types";
import DomainTable from "./DomainTable";
import { useState } from "react";
import LoadingForm from "./LoadingForm";
import DomainHeader from "./DomainHeader";

const DomainForm = () => {
  const [showTable, setShowTable] = useState<ShowTableType>("domain info");
  const [domainData, setDomainData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState<string | null>(null);

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShowTable(event.target.value as ShowTableType);
  };

  const submitHandle = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWhoisData(input);
      setDomainData(data.WhoisRecord);
      if (!data.WhoisRecord) {
        setError(data.ErrorMessage.msg);
      }
    } catch (error) {
      setError("Failed to fetch domain data");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <DomainHeader />
      <form
        onSubmit={submitHandle}
        className="flex flex-col border p-4 gap-4 rounded-2xl bg-slate-50"
      >
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          name="domainName"
          placeholder="Input domain"
          className="border rounded-lg p-2 shadow-sm outline-none focus:border-2 active:scale-95 transition-all duration-150 font-light placeholder:text-light"
        />
        <button
          type="submit"
          className="border rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-white py-2"
        >
          Search
        </button>
        <select
          value={showTable}
          className="border rounded"
          onChange={(e) => selectHandler(e)}
        >
          <option value="domain info">Domain Information</option>
          <option value="contact info">Contact Information</option>
        </select>
      </form>
      {loading && <LoadingForm />}
      {error && <p className="text-red-500 font-bold">{error}</p>}

      {domainData && (
        <DomainTable showTable={showTable} domainData={domainData} />
      )}
    </div>
  );
};

export default DomainForm;
