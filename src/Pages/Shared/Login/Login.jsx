import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import NavBar from "../NavBar/NavBar";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const {login} = useContext(AuthContext);
    const location = useLocation();
    console.log("location login page", location);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;    // aivabe input field er value pai,,, But nicher niom ew pai.

        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        login(email, password)
        .then(result => {
            console.log(result);
            e.target.reset();

            // navigate after login
            navigate( location?.state ? location.state : "/")
           
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="">
            <NavBar></NavBar>
            <div className="flex flex-col max-w-md bg-gray-400 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:bg-gray-50 dark:text-gray-800 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Log in</h1>
                    <p className="text-sm dark:text-gray-600 dark:text-gray-600">Log in to access your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:border-gray-300 dark:bg-gray-50 dark:bg-gray-50 dark:text-gray-800 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600 dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:border-gray-300 dark:bg-gray-50 dark:bg-gray-50 dark:text-gray-800 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full border-2 border-red-400 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:bg-violet-600 dark:text-gray-50 dark:text-gray-50">Log in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600 dark:text-gray-600">Dont have an account yet?
                            <Link rel="noopener noreferrer" to="/register" className="hover:underline dark:text-violet-600 dark:text-violet-600">Register</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;