import React, { useState } from 'react';

const ProfileForm = () => {
    const [username, setUsername] = useState('JohnDoe92');
    const [fullName, setFullName] = useState('John Doe');
    const [gender, setGender] = useState('Male');
    const [profilePicture, setProfilePicture] = useState("https://avatar.iran.liara.run/public/boy?username=${userName)");
    const [isEditing, setIsEditing] = useState(false);
    const [editFullName, setEditFullName] = useState(fullName);
    const [editGender, setEditGender] = useState(gender);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setFullName(editFullName);
        setGender(editGender);
        setIsEditing(false);
    };

    return (
        <div>
            <img src={profilePicture} alt="Profile" style={{ width: 150, height: 150, borderRadius: '50%' }} />
            <h1>Username: {username}</h1>
            {!isEditing ? (
                <>
                    <h2>Full Name: {fullName}</h2>
                    <h2>Gender: {gender}</h2>
                    <button onClick={handleEdit}>Edit</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={editFullName}
                        onChange={(e) => setEditFullName(e.target.value)}
                    />
                    <select
                        value={editGender}
                        onChange={(e) => setEditGender(e.target.value)}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <button onClick={handleSave}>Save</button>
                </>
            )}
        </div>
    );
};

export default ProfileForm;
