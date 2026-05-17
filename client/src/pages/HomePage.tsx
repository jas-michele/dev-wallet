import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard"

function HomePage() {
    return (
    <div className="min-h-screen bg-gray-100">

        <Navbar />

        <div className="min-h-screen flex items-center justify-center bg-gray-100"> 
            
            <ProfileCard />
        </div>
    </div>    
    );
}

export default HomePage;