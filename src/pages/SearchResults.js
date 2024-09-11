import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';  // Usa useParams per ottenere i parametri della route
import { fetchProfiles } from '../redux/actions/profileActions';

const SearchResults = () => {
    const { searchTerm } = useParams();  // Ottieni il parametro dalla route
    const dispatch = useDispatch();
    const profiles = useSelector(state => state.profile.profiles);

    useEffect(() => {
        if (searchTerm) {
            dispatch(fetchProfiles());
        }
    }, [dispatch, searchTerm]);

    return (
        <div>
            <h2>Risultati della ricerca per "{searchTerm}"</h2>
            {profiles.length > 0 ? (
                <ul>
                    {profiles.map(profile => (
                        <li key={profile._id}>
                            {profile.username} - {profile.name} {profile.surname}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nessun profilo trovato.</p>
            )}
        </div>
    );
};

export default SearchResults;
