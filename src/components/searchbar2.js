import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles } from "../redux/actions/profileActions";

const ProfileSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Stato per mantenere i risultati della ricerca
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profile.profiles);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearchCompleted(false);
    dispatch(fetchProfiles(searchTerm)).then(() => {
      const matchingProfiles = profiles.filter(
        (profile) =>
          profile.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          profile.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${profile.firstName} ${profile.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
      setSearchResults(matchingProfiles);
      setIsSearchCompleted(true);
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search profiles..."
        />
        <button type="submit">Search</button>
      </form>
      {isSearchCompleted && searchResults.length > 0 && (
        <ul>
          {searchResults.map((profile) => (
            <li
              key={profile._id}
              style={{ marginBottom: "10px", listStyleType: "none" }}
            >
              <img
                src={profile.image}
                alt={profile.firstName}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <p>{`${profile.firstName} ${profile.lastName}`}</p>
            </li>
          ))}
        </ul>
      )}
      {isSearchCompleted && searchResults.length === 0 && (
        <p>No profiles found</p>
      )}
    </div>
  );
};

export default ProfileSearch;
