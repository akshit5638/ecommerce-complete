import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { User } from '../types/types'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import toast from 'react-hot-toast';
interface PropsType {
    user: User | null;
}
const Header = ({ user }: PropsType) => {
    const [isOpen, setisOpen] = useState<boolean>(false);
    const logouthandler = async () => {
        try {
            await signOut(auth);
            toast.success("signed out successfully")
            setisOpen(false)
        }

        catch (error) {
            toast.error("sign out failed");
        }
    }
    return (
        <nav className='header'>
            <Link onClick={() => setisOpen(false)} to={'/'}>Home</Link>
            <Link onClick={() => setisOpen(false)} to={'/search'}><FaSearch /></Link>
            <Link onClick={() => setisOpen(false)} to={'/cart'}><FaShoppingBag /></Link>

            {
                user?._id ? (
                    <>
                        <button onClick={() => setisOpen((prev) => !prev)}>
                            <FaUser />
                        </button>
                        <Link onClick={() => setisOpen(false)} to="/admin/dashboard">
                            Admin
                        </Link>
                        <dialog open={isOpen}>
                            <div>

                                {user.role === "admin" && (
                                    <Link onClick={() => setisOpen(false)} to="/admin/dashboard">
                                        Admin
                                    </Link>
                                )}

                                <Link onClick={() => setisOpen(false)} to="/orders">
                                    Orders
                                </Link>
                                <button onClick={logouthandler} >
                                    <FaSignOutAlt />
                                </button>
                            </div>
                        </dialog>
                    </>

                ) : <Link to={'/login'}><FaSignInAlt /></Link>

            }
        </nav>
    )
}

export default Header