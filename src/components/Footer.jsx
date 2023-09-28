function Footer({ length }) {
  return (
    <footer className="bg-primary text-white p-3">
      {length} List {length === 1 ? "item" : "items"}
    </footer>
  );
}

export default Footer;
