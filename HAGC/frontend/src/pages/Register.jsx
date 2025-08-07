import loginBg from '../assets/loginbg 2.svg'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

function Register() {

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >

      
      {/* Form container */}
      <div className="relative z-10 bg-white/50 backdrop-blur-xl rounded-2xl py-5 px-8 w-full max-w-lg shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="w-32 h-32 mx-auto" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl fredoka font-bold text-white">
            Create an <span className="text-[#F2786D]">Account</span>
          </h2>
        </div>

        {/* Form */}
        <div className="space-y-5">
          
          <div>
            <p className="text-[#838383] text-sm md:text-md font-bold mb-3 pl-2">
              Please enter your details below
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border-2 bg-white border-gray-100 rounded-2xl focus:border-[#F2786D] focus:outline-none focus:ring-1 focus:ring-[#F2786D] focus:ring-opacity-20 transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 border-2 bg-white border-gray-100 rounded-2xl focus:border-[#F2786D] focus:outline-none focus:ring-1 focus:ring-[#F2786D] focus:ring-opacity-20 transition-all duration-300"
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border-2 bg-white border-gray-100 rounded-2xl focus:border-[#F2786D] focus:outline-none focus:ring-1 focus:ring-[#F2786D] focus:ring-opacity-20 transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Re-Password"
              className="w-full px-4 py-3 border-2 bg-white border-gray-100 rounded-2xl focus:border-[#F2786D] focus:outline-none focus:ring-1 focus:ring-[#F2786D] focus:ring-opacity-20 transition-all duration-300"
            />
          </div>

          <div className="w-full max-w-md mx-auto fredoka">
            <Link
              to="/login"
              className="w-full block py-3 mt-4 bg-[#4FA3D1] text-white text-center text-2xl tracking-wide font-semibold rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            >
              Register Now!
            </Link>
          </div>

          <div className="text-center text-sm font-semibold text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold hover:underline cursor-pointer text-[#4FA3D1]">
              Sign In!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;