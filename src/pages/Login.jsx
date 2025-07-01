import '../css/Login.css';

function Login() {
    return (
        <>
            {/*<!-- From Uiverse.io by Yaya12085 -->  */}
            <div className='login-page'>
                <div class="form-container">
                    <p class="title">Login</p>
                    <form class="form">
                        <div class="input-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="" />
                        </div>
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="" />
                            <div class="forgot">
                                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                            </div>
                        </div>
                        <button class="sign">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
