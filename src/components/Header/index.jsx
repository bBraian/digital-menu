import './style.css';

export const Header = ({ bar }) => {
    return (
        <header>
            <div className='header-background' style={{backgroundImage: `url(${bar.backgroundImage})`}}></div>
            <div className='company-container'>
                <div className='logo-company-align'>
                    <div className='company-logo' style={{backgroundImage: `url(${bar.profileImage})`}}></div>
                    <div className='company-text'>Braian's Bar</div>
                </div>
            </div>
            


        </header>
    );
}