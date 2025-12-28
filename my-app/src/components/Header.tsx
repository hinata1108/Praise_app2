import './Header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../features/auth/auth.hooks';
import { signOut } from '../features/auth/auth.api';

export const Header = () => {
    const {user,loading}=useAuth();

    if (loading) return <div>Loading...</div>;

    return ( 
            <header className="header-modern">
                <div className='container'>
                <h1>ほめほめアプリ</h1>
                <div className='nav-wrapper'>
                <nav>
                    {user ?(
                        <>
                    <ul>
                        <li><Link to="/mypost">自分の投稿</Link></li>
                        <li><Link to="/create">投稿を作成</Link></li>
                        <li><Link to="/home">みんなの投稿</Link></li>
                        <button onClick={signOut}>ログアウト</button>
                    </ul>
                    </>
                    ):(<></>)
                }
                </nav>
                </div>
                </div>
            </header>
    );
}
