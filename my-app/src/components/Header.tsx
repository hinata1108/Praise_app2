import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../features/auth/auth.hooks';
import { signOut } from '../features/auth/auth.api';

export const Header = () => {
    const {user,loading}=useAuth();

    if (loading) return <div>Loading...</div>;

    return (
        <div className="header">
            <header>
                <h1>My App Header</h1>
                <nav>
                    {user ?(
                        <>
                    <ul>
                        <li><Link to="/mypost">My Posts</Link></li>
                        <li><Link to="/create">Create</Link></li>
                        <li><Link to="/home">Home</Link></li>
                        <button onClick={signOut}>Logout</button>
                    </ul>
                    </>
                    ):(<></>)
                }
                </nav>
            </header>
        </div>
    );
}
