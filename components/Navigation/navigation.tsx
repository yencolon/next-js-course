import Link from 'next/link';
const Navigation: React.FC = () => (
  <nav>
    <Link href="/">
      <span aria-label="Liink">Link</span>
    </Link>
  </nav>
);

export default Navigation;