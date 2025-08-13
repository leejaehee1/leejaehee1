//import {Link} from 'react-router-dom'
import {useAuth} from '../../contexts'
import {Link as RRLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {
  UserCircle,
  LogIn,
  LogOut,
  UserPlus,
  Home,
  ClipboardList,
  Bell,
  HelpCircle
} from 'lucide-react'

export type LoggedUser = {email: string; password: string}

export default function NavigationBar() {
  const {loggedUser} = useAuth()

  return (
    <nav className="bg-white/95 shadow-md px-4 py-2 flex justify-between items-center w-full z-50 sticky top-0 backdrop-blur-md">
      {/* 왼쪽: 메인 네비 */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          to="/"
          className="btn btn-ghost btn-sm text-lg font-bold flex gap-1 items-center">
          <Home size={20} className="text-primary" />
          Home
        </Link>
        <Link to="/rest" className="btn btn-ghost btn-sm text-base">
          <ClipboardList size={18} className="text-secondary mr-1" />
          Rest Test
        </Link>
        {loggedUser && (
          <Link to="/free_board" className="btn btn-ghost btn-sm text-base">
            <ClipboardList size={18} className="text-info mr-1" />
            Free Board
          </Link>
        )}
        {loggedUser && (
          <Link to="/notice_board" className="btn btn-ghost btn-sm text-base">
            <Bell size={18} className="text-warning mr-1" />
            Notice Board
          </Link>
        )}
        {loggedUser && (
          <Link to="/q&a_board" className="btn btn-ghost btn-sm text-base">
            <HelpCircle size={18} className="text-success mr-1" />
            Q&A Board
          </Link>
        )}
        {loggedUser && (
          <Link to="/profile" className="btn btn-ghost btn-sm text-base">
            <UserCircle size={18} className="text-pink-500 mr-1" />
            Profile
          </Link>
        )}
      </div>

      {/* 오른쪽: 로그인/회원가입/로그아웃 */}
      <div className="flex items-center gap-2 sm:gap-3">
        {!loggedUser && (
          <RRLink to="/login" className="btn btn-sm btn-primary flex gap-1">
            <LogIn size={16} />
            Login
          </RRLink>
        )}
        {!loggedUser && (
          <RRLink to="/signup" className="btn btn-sm btn-outline btn-primary flex gap-1">
            <UserPlus size={16} />
            Signup
          </RRLink>
        )}
        {loggedUser && (
          <RRLink to="/logout" className="btn btn-sm btn-error flex gap-1">
            <LogOut size={16} />
            Logout
          </RRLink>
        )}
      </div>
    </nav>
  )
}
