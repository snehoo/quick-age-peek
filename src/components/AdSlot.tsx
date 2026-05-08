interface AdSlotProps {
  slotId: string;
  className?: string;
}

/**
 * Unified ad placeholder. The <ins> AdSense tag will go here later.
 * AdSense responsive units handle sizing per viewport — no breakpoint toggles.
 */
const AdSlot = ({ slotId, className = "" }: AdSlotProps) => {
  return (
    <div
      data-ad-slot={slotId}
      className={`mx-auto w-full max-w-3xl my-6 rounded-lg border border-dashed border-border bg-muted/20 px-4 py-4 flex flex-col items-center justify-center text-center hidden ${className}`}
      style={{ minHeight: 90 }}
      aria-label="Advertisement"
    >
      <span className="text-xs uppercase tracking-wider text-muted-foreground">
        Advertisement
      </span>
      <span className="mt-1 text-[10px] text-muted-foreground/60 font-mono">
        {slotId}
      </span>
    </div>
  );
};

export default AdSlot;
