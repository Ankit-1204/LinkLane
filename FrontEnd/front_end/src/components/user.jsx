import React, { useState, useEffect } from 'react';

const UserProfile = ({ username }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`/profile/${username}`);
                if (response.ok) {
                    const data = await response.json();
                    setProfile(data);
                } else {
                    // Handle error
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchProfile();
    }, [username]);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{profile.username}'s Profile</h2>
            <p>Interests: {profile.interests.join(', ')}</p>
            <p>Hobbies: {profile.hobbies.join(', ')}</p>
            <p>Goals: {profile.goals.join(', ')}</p>
            <img src={`/${profile.profilePicture}`} alt="Profile" />
        </div>
    );
};

export default UserProfile;
