import { Link } from "react-router-dom";

export const SignUp = () => {
    return (
        <div className="bg-zinc-900 min-h-screen p-8 flex items-center justify-center">
            <div className="bg-zinc-800 md:w-2/6 text-zinc-300 rounded p-4 md:w-1.5/6 md:p-12">
                <h1 className="text-xl font-semibold mb-4 md:text-2xl">Sign Up</h1>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1 text-zinc-500">
                        <label htmlFor="username" className="capitalize">username</label>
                        <input type="text" id="text" name="text" placeholder="username" className="bg-zinc-900 rounded px-2 py-1 text-zinc-500 md:px-4 md:py-2" />
                    </div>
                    <div className="flex flex-col gap-1 text-zinc-500">
                        <label htmlFor="email" className="capitalize">email</label>
                        <input type="email" id="email" name="email" placeholder="xyz@example.com" className="bg-zinc-900 rounded px-2 py-1 text-zinc-500 md:px-4 md:py-2" />
                    </div>
                    <div className="flex flex-col gap-1 text-zinc-500">
                        <label htmlFor="password" className="capitalize">password</label>
                        <input type="password" id="password" name="password" placeholder="password" className="bg-zinc-900 rounded px-2 py-1 text-zinc-500 md:px-4 md:py-2" />
                    </div>
                    <div className="flex flex-col gap-1 text-zinc-500">
                        <label htmlFor="address" className="capitalize">address</label>
                        <textarea type="address" id="address" name="address" placeholder="address" className="bg-zinc-900 rounded px-2 py-1 text-zinc-500 md:px-4 md:py-2" rows="3" />
                    </div>
                    <div className="flex gap-2 flex-col items-center p-4">
                        <button type="submit" className="bg-blue-500 px-4 py-2 rounded font-semibold hover:bg-zinc-200 hover:text-zinc-800 transition-all duration-300">Signup</button>
                        <p className="mt-2 flex flex-row gap-2 text-zinc-400 text-sm">
                            Already have an account?
                            <Link to={"/sign-in"} className="hover:text-zinc-300 underline">Sign In</Link>
                        </p>

                    </div>
                </form>
            </div>
        </div>
    )
}