export default function Header({ title, subtitle }) {
  return (
    <header className="dashboard-header">
      <h1>{title}</h1>
      {subtitle && <p className="dashboard-subtitle">{subtitle}</p>}
    </header>
  );
}
