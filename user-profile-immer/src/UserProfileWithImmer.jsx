import './UserProfileWithImmer.css';
import { useImmer } from 'use-immer';

function UserProfileWithImmer() {
    const exampleProfile = {
        name: 'John Doe',
        email: 'jdoe@email.com',
        contactDetails: {
            phone: '1-800-800-2002',
            address: '1000 S Feline Street Seattle Washington 98108',
        },
        preferences: { newsletter: false, notifications: false },
    };
    const [userProfile, setUserProfile] = useImmer(exampleProfile);

    function updateContactDetails(phone = null, address = null) {
        setUserProfile((draft) => {
            if (phone != null) {
                draft.contactDetails.phone = phone;
            }
            if (address != null) {
                draft.contactDetails.address = address;
            }
        });
    }

    function toggleNewsLetterSubscription() {
        setUserProfile((draft) => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });
    }
    function toggleNotifications() {
        setUserProfile((draft) => {
            draft.preferences.notifications = !draft.preferences.notifications;
        });
    }
    return (
        <div className="profile">
            <pre>{JSON.stringify(userProfile, null, 4)}</pre>
            <p>
                <label>Name: </label>
                <input
                    className="input-box"
                    value={userProfile.name}
                    onChange={(event) => {
                        setUserProfile((draft) => {
                            draft.name = event.target.value;
                        });
                    }}
                />
                <br />
                <label>Email: </label>
                <input
                    className="input-box"
                    value={userProfile.email}
                    onChange={(event) => {
                        setUserProfile((draft) => {
                            draft.email = event.target.value;
                        });
                    }}
                />
                <br />
                <label>Phone #: </label>
                <input
                    className="input-box"
                    value={userProfile.contactDetails.phone}
                    onChange={(event) => {
                        updateContactDetails(event.target.value)
                    }}
                />
                <br />
                <label>Address: </label>
                <input
                    className="input-box"
                    value={userProfile.contactDetails.address}
                    onChange={(event) => {
                        updateContactDetails(null, event.target.value)
                    }}
                />
                <br />
                <label>Newsletter: </label>
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={userProfile.preferences.newsletter}
                    onChange={toggleNewsLetterSubscription}
                />
                <br />
                <label>Notifications: </label>
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={userProfile.preferences.notifications}
                    onChange={toggleNotifications}
                />
            </p>
        </div>
    );
}

export default UserProfileWithImmer;
