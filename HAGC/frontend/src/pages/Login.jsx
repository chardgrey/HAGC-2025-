import { useState } from 'react'
import loginBg from '../assets/loginbg 2.svg'
import logo from '../assets/logo.svg'
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom'

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Form container */}
      <div className="relative z-10 bg-white/50 backdrop-blur-xl rounded-2xl p-8 w-full max-w-lg shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="w-32 h-32 mx-auto" />
          <h1 className='text-5xl md:text-6xl lg:text-7xl fredoka font-bold text-white'>Welcome!</h1>
          <h2 className="text-2xl md:text-3xl lg:text-3xl fredoka font-bold mb-2 text-[#F2786D]">
            Welcome to Stray to Safe!
          </h2>
        </div>

        {/* Form */}
        <div className="space-y-5">
          
          <div>
            <p className="text-[#838383] text-sm md:text-md font-bold mb-1 pl-2">
              Please log in to your account to continue.
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-4 border-2 bg-white border-gray-100 rounded-2xl focus:border-[#F2786D] focus:outline-none focus:ring-1 focus:ring-[#F2786D] focus:ring-opacity-20 transition-all duration-300"
            />
          </div>
          
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-4 border-2 bg-white border-gray-100 rounded-2xl focus:border-[#F2786D] focus:outline-none focus:ring-1 focus:ring-[#F2786D] focus:ring-opacity-20 transition-all duration-300 pr-12"
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <IoIosEyeOff size={25} /> : <IoIosEye size={25} />}
            </span>
          </div>

          <div className="w-full max-w-md mx-auto fredoka">
            <Link
              to="/"
              className="w-full block py-3 mt-4 bg-[#4FA3D1] text-white text-center text-2xl tracking-wide font-semibold rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            >
              Login
            </Link>
          </div>

          <div className="text-center text-sm text-gray-600">
            Have no account yet?{' '}
            <Link to="/register" className="font-semibold hover:underline cursor-pointer text-[#4FA3D1]">
              Click Here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;