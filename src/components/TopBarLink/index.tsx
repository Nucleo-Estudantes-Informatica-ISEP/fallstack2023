import Link from 'next/link';

interface TopbarLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const TopbarLink: React.FC<TopbarLinkProps> = ({ href, children, onClick }) => {
    return (
        <>
            <Link
                onClick={onClick}
                href={href}
                className="text-primary transition duration-100 ease-in-out">
                <button>{children}</button>
            </Link>
        </>
    );
};

export default TopbarLink;
