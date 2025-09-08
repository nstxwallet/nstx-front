"use client";

interface CoinData {
  coinData?: {
    coin: string;
    name: string;
    depositAllEnable: boolean;
    withdrawAllEnable: boolean;
    trading: boolean;
    networks: {
      id: string;
      network: string;
      isDefault: boolean;
      depositEnable: boolean;
      withdrawEnable: boolean;
    }[];
  };
}

const Card = ({ coinData }: CoinData) => {
  if (!coinData) {
    return <div className="text-gray-400 p-4">No data available</div>;
  }

  return (
    <div className="crypto-card border rounded-xl shadow-md p-4 bg-gray-800 text-white">
      <div className="flex items-center justify-between border-b pb-2 mb-3">
        <h2 className="text-xl font-bold">
          {coinData.name} ({coinData.coin})
        </h2>
        <span
          className={`text-sm px-2 py-1 rounded-lg ${
            coinData.trading ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {coinData.trading ? "Trading Enabled" : "Trading Disabled"}
        </span>
      </div>
      <p className="text-sm text-gray-300">
        Deposit: {coinData.depositAllEnable ? "✔️" : "❌"} | Withdraw:{" "}
        {coinData.withdrawAllEnable ? "✔️" : "❌"}
      </p>
      <h3 className="mt-3 font-semibold">Supported Networks:</h3>
      {coinData.networks?.length > 0 ? (
        <ul className="networks-list mt-2 space-y-1">
          {coinData.networks.map((network) => (
            <li
              key={network.id}
              className={`network-item ${network.isDefault ? "default-network" : ""}`}
            >
              <span className="font-medium">{network.network}</span>
              <span className="ml-2 text-sm">
                {network.depositEnable ? "Deposit ✅" : "Deposit ❌"} |{" "}
                {network.withdrawEnable ? "Withdraw ✅" : "Withdraw ❌"}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-sm mt-2">No networks available</p>
      )}
    </div>
  );
};

Card.displayName = "Card";

export { Card };
