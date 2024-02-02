const LoginForm = ({
    handleLogin,
    username,
    password,
    handleUsernameChange,
    handlePasswordChange
}) => {
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input 
                    type="text"
                    value={username}
                    name="Username"
                    onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    password
                    <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )}

export default LoginForm