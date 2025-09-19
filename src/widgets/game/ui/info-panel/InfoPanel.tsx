import "./styles.css";

type InfoPanelProps = {
  status: string | null;
};

export function InfoPanel({ status }: InfoPanelProps) {
  return (
    <>
      <div className="info-panel">
        <span className="info-tatle-game">{status}</span>
      </div>
    </>
  );
}
