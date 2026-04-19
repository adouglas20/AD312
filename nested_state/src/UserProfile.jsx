import { useState } from 'react';
import './UserProfile.css';

function UserProfile() {
    const [userProfile, setUserProfile] = useState({
        name: 'Jane Doe',
        email: 'jane@email.com',
        address: {
            street: '123 Main St',
            city: 'Vancouver',
            country: 'Canada',
        },
    });

    function handleSubmit(event) {
        event.preventDefault();
        const street = event.target.elements.street.value;
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        updateAddress(street, city, country)
    }

    function updateAddress(street, city, country) {
        setUserProfile({
            ...userProfile,
            address: {
                ...userProfile.address,
                street: street,
                city: city,
                country: country,
            },
        });
    }
    return (
        <div className="container">
            <div className="profile">
                <h2>Current Profile</h2>
                <p>
                    {userProfile.name}
                    <br></br>
                    {userProfile.email}
                    <br></br>
                    {userProfile.address.street}
                    <br></br>
                    {userProfile.address.city}
                    <br></br>
                    {userProfile.address.country}
                </p>
            </div>
            <form className="form" method="post" onSubmit={handleSubmit}>
                <div>
                    Street: <input className="input-box" name="street" />
                </div>
                <div>
                    City: <input className="input-box" name="city" />
                </div>
                <div>
                    Country: <input className="input-box" name="country" />
                </div>

                <button className="control-button" type="submit">
                    Update Address
                </button>
            </form>
        </div>
    );
}

export default UserProfile;
