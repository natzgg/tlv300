import { DomainTableProps } from "../../_types/types";

const DomainTable: React.FC<DomainTableProps> = ({ showTable, domainData }) => {
  return (
    <div className="w-full flex items-center justify-center p-2 md:p-20">
      {showTable === "domain info" && (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full overflow-x-auto">
            <thead className="text-sm items-center w-full border-collapse text-blue-600">
              <tr>
                <th className="border bg-gray-50 px-2">Domain Name</th>
                <th className="border bg-gray-50 px-2">Registrar Name</th>
                <th className="border bg-gray-50 px-2">Registration Date</th>
                <th className="border bg-gray-50 px-2">Expiration Date</th>
                <th className="border bg-gray-50 px-2">Estimated Domain Age</th>
                <th className="border bg-gray-50 px-2">Hostnames</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-base italic font-semibold text-center">
              <tr className="text-green-500">
                <td className="py-4 px-6 border border-gray-200">
                  {domainData.domainName ?? (
                    <span className="text-red-500">No Domain Name found</span>
                  )}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {domainData.registrarName ?? (
                    <span className="text-red-500">
                      No Registrar Name found
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {domainData.registryData?.createdDate ?? (
                    <span className="text-red-500">
                      No Registration Date found
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {domainData.registryData?.expiresDate ?? (
                    <span className="text-red-500">
                      No Expiration Date found
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {domainData.estimatedDomainAge ?? (
                    <span className="text-red-500">
                      No Estimated Domain Age found
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {domainData.registryData?.nameServers?.hostNames?.length ? (
                    domainData.registryData.nameServers.hostNames.join(", ")
                  ) : (
                    <span className="text-red-500">No Hostnames found</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {showTable === "contact info" && (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border">
            <thead className="text-sm items-center w-full border-collapse text-blue-600">
              <tr>
                <th className="border bg-gray-50 px-2">Registrant Name</th>
                <th className="border bg-gray-50 px-2">
                  Technical Contact Name
                </th>
                <th className="border bg-gray-50 px-2">
                  Administrative Contact Name
                </th>
                <th className="border bg-gray-50 px-2">Contact Email</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-base italic font-semibold text-center">
              <tr className="text-green-500">
                <td className="py-4 px-6 border border-gray-200">
                  {domainData.registrant?.name ||
                    domainData.registrant?.organization ||
                    domainData.registryData?.registrant?.name || (
                      <span className="text-red-500">No Registrant Info</span>
                    )}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {domainData.technicalContact?.name ||
                    domainData.technicalContact?.organization ||
                    domainData.registryData?.technicalContact?.name || (
                      <span className="text-red-500">
                        No Technical Contact found
                      </span>
                    )}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {domainData.administrativeContact?.name ||
                    domainData.administrativeContact?.organization ||
                    domainData.registryData?.administrativeContact?.name || (
                      <span className="text-red-500">
                        No Administrative Contact found
                      </span>
                    )}
                </td>
                <td className="py-4 px-6 border border-gray-200">
                  {domainData.contactEmail || (
                    <span className="text-red-500">No Contact Email found</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DomainTable;
