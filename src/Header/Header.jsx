import profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center py-8 border-b'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" className='w-12'/>
        </header>
    );
};

export default Header;