
import Head from 'next/head';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Search() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`/api/users?query=${searchQuery}`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [searchQuery]);

  const handleFetchDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Search - Girman</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.searchContainer}>
          <div className={styles.centerContent}>
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput_1}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.searchResults}>
          {users.length > 0 ? (
            users.map((user, index) => (
              <div className={styles.userProfile} key={index}>
                <img src="/images/person.png" alt="Profile" className={styles.profilePhoto} />
                <h2>{user.first_name} {user.last_name}</h2>
                <p>{user.city}</p>
                <hr className={styles.profileLine} />
                <div className={styles.profileDetails}>
                  <p>{user.contact_number}</p>
                  <p>Available on Phone</p>
                </div>
                <button className={styles.fetchButton} onClick={() => handleFetchDetails(user)}>
                  Fetch Details
                </button>
              </div>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>

        {selectedUser && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h2>Fetch Details</h2>
              <p>Here are the details of the following employee.</p>
              <p><strong>Name:</strong> {selectedUser.first_name} {selectedUser.last_name}</p>
              <p><strong>Location:</strong> {selectedUser.city}</p>
              <p><strong>Contact Number:</strong> {selectedUser.contact_number}</p>
              <p><strong>Profile Image:</strong></p>
              <img src="/images/person.png" alt="Profile" className={styles.profilePhoto} />
              <button className={styles.closeButton} onClick={handleCloseDetails}>Close</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}