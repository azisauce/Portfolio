import './NavDots.css'

type NavDotsProps = {
    activeSection: number;
    sections: number;
};
  
function NavDots({ activeSection, sections }: NavDotsProps) {
    return (
        <div className="nav-dots fixed flex flex-col h-[28px] gap-5">
            {Array.from({ length: sections }).map((_, i) => (
                <button
                    key={i}
                    className={`dot w-[28px] h-[28px] ${i === activeSection ? 'active' : ''}`}
                    onClick={() => {
                        window.scrollTo({
                        top: window.innerHeight * i,
                        behavior: 'smooth'
                        });
                    }}
                />
            ))}
        </div>
    );
}

export default NavDots