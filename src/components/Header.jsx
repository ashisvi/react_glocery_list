export default function Header({ title }) {
  return (
    <header>
      <h1 className="fw-bolder bg-primary text-light p-3">{title}</h1>
    </header>
  );
}

// Default props

Header.defaultProps = {
  title: "List",
};
