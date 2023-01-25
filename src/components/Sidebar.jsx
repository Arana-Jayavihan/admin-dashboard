import React from 'react';
import { Link, NavLink } from "react-router-dom"
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';

//icons 
import { FiShoppingBag } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdContacts } from 'react-icons/io'
import { RiProductHuntFill, RiContactsLine } from 'react-icons/ri'
import { MdInventory } from 'react-icons/md'

const Sidebar = () => {
  const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'summary',
          icon: <FiShoppingBag />,
        },
        {
          name: 'products',
          icon: <RiProductHuntFill />,
        },
        {
          name: 'inventory',
          icon: <MdInventory />,
        },
        {
          name: 'orders',
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'employees',
          icon: <IoMdContacts />,
        },
        {
          name: 'customers',
          icon: <RiContactsLine />,
        },
      ],
    },
  ]
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && (
          <>
            <div className='flex justify-between items-center'>
              <Link to='/dashboard' onClick={() => { }} className='items-center mt-4 gap-2 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
                <SiShopware /><span>Admin Panel</span>
              </Link>
              <TooltipComponent content="Menu">
                <button type='button' className='text-2xl mt-5 mr-2 rounded-full p-3 hover:bg-light-gray block md:hidden' onClick={() => { }}>
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className="mt-10 ">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : '',
                      })}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span className="capitalize ">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>
        )
      }

    </div>
  );
}

export default Sidebar;
