const STACK = [
  "Flutter", "Dart", "Next.js", "React", "TypeScript", "Solidity",
  "Hardhat", "Viem", "Wagmi", "Firebase", "Supabase", "Celo",
  "GoodDollar", "ERC-4337", "MCP",
];

export function StackMarquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="overflow-hidden border-y-2 border-black bg-[#c9beff] py-4">
      <div className="marquee-track flex gap-3 w-max">
        {items.map((s, i) => (
          <span key={i} className="tech-badge">{s}</span>
        ))}
      </div>
    </div>
  );
}
