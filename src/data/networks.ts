import coinImages from "../assets/coins";

interface networksData {
  icon: string;
  name: string;
  tag: string;
  address: string;
}

export const networksData: networksData[] = [
  {
    icon: coinImages["ethereum"],
    name: "Sepolia testnet",
    tag: "16015286601757825753",
    address: "0x0bf3de8c5d3e8a2b34d2beeb17abfcebaf363a59",
  },
  {
    icon: coinImages["optimism"],
    name: "Optimism Goerli testnet",
    tag: "2664363617261496610",
    address: "0xcc5a0b910d9e9504a7561934bed294c51285a78d",
  },
  {
    icon: coinImages["polygon"],
    name: "Mumbai testnet",
    tag: "12532609583862916517",
    address: "0x1035cabc275068e0f4b745a29cedf38e13af41b1",
  },
  {
    icon: coinImages["avalanche"],
    name: "Avalanche",
    tag: "14767482510784806043",
    address: "0xf694e193200268f9a4868e4aa017a0118c9a8177",
  },
  {
    icon: coinImages["bnb"],
    name: "BNB Chain testnet",
    tag: "13264668187771770619",
    address: "0xe1053ae1857476f36a3c62580ff9b016e8ee8f6f",
  },
  {
    icon: coinImages["base"],
    name: "Base Goerli testnet",
    tag: "5790810961207155433",
    address: "0x80af2f44ed0469018922c9f483dc5a909862fdc2",
  },
];
