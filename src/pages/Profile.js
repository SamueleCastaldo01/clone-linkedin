import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateProfile } from '../redux/actions/profileActions';
import TabProfile from '../components/TabProfile';
import './Profile.css';

// Mostra la pagina del profilo utente. Utilizza Redux per ottenere e aggiornare i dati del profilo.
// Include un'intestazione, una sezione principale con dettagli del profilo, un pulsante per aggiornare il profilo,
// e un componente TabProfile per informazioni aggiuntive. Mostra anche eventuali errori.

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);
  const error = useSelector(state => state.profile.error);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleUpdate = () => {
    const updatedProfile = {
      ...profile,
      // Rimuovi la modifica del titolo
    };
    dispatch(updateProfile(updatedProfile));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LinkedIn Profile</h1>
      </header>
      <main>
        <div className="row">
          <div className="col-8 bg-black">
            <div className="profile-header">
              {profile.image && <img src={profile.image} alt="Profile" />}
              <h2>{profile.name} {profile.surname}</h2>
              <h3>{profile.title}</h3>
              <p>{profile.bio}</p>
              <button onClick={handleUpdate}>Update Profile</button>
            </div>
            <TabProfile />
          </div>
          <div className="col-4 bg-body-secondary">
            <h3>Details</h3>
            <p>Email: {profile.email}</p>
            <p>Username: {profile.username}</p>
            <p>Location: {profile.area}</p>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </main>
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default Profile;
