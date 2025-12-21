
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../features/auth/auth.api';

export function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signUp(email, password);
      navigate('/login');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('登録に失敗しました: ');
      }
    } finally {
      setLoading(false);
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <h1>新規登録</h1>
      <label htmlFor="email">メールアドレス</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="password">パスワード</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? '登録中...' : '登録'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
