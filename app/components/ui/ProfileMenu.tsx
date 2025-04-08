import { useState } from 'react'

import { Languages, LogOut, Settings2, Sun } from 'lucide-react'
import { PreferencesModal } from './PreferencesModal'
import { toggleTheme } from '~/lib/stores/theme'


export const ProfileMenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const openModal = () => {
        setIsDropdownOpen(false)
        setIsModalOpen(true)
    }


    return (
        <div className="relative">
            {/* <PreferencesModal open={isModalOpen} onOpenChange={setIsModalOpen} /> */}
            <img
                src="/avatar.png"
                alt="icon"
                width={32}
                height={32}
                className="w-[32px] h-[32px] rounded-full cursor-pointer"
                onClick={toggleDropdown}
            />
            {isDropdownOpen && (
                <div className="absolute light:bg-white dark:bg-gray-800 right-0 w-72 bg-white border light:border-gray-light-300 dark:border-gray-700 rounded-lg z-100">
                    <div className="flex items-center border-b light:border-gray-light-300 dark:border-gray-700 p-4">
                        <img
                            src="/avatar.png"
                            alt="avatar"
                            width={40}
                            height={40}
                            className="w-[32px] h-[32px] rounded-full cursor-pointer"
                        />
                        <div className='p-4'>
                            <p className="font-medium light:text-gray-dark-700 dark:text-white">Asimo</p>
                            <p className="text-sm light:text-gray-dark-700 dark:text-white">exemplo@email.com</p>
                        </div>
                    </div>
                    <ul className="py-2 border-b light:border-gray-light-300 dark:border-gray-700">
                        <li
                            onClick={openModal}
                            className="flex items-center px-4 py-2  light:hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer"
                        >
                            <Settings2 className="light:text-gray-dark-600 dark:text-white w-5 h-5 mr-3" />
                            <p className="text-xs light:text-gray-dark-600 dark:text-white">Preferências</p>
                        </li>
                        <li className="flex items-center px-4 py-2 light:hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer" onClick={toggleTheme}>
                            <Sun className="light:text-gray-dark-600 dark:text-white w-5 h-5 mr-3" />
                            <p className="text-xs light:text-gray-dark-600 dark:text-white">Tema</p>
                        </li>
                        {/* <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Languages className="text-gray-dark-600 w-5 h-5 mr-3" />
                            <p className="text-xs text-gray-dark-600">
                                change_language
                            </p>
                        </li> */}
                    </ul>
                    <ul className="">
                        <li className="flex items-center px-4 py-2 light:hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer">
                            <LogOut className="light:text-gray-dark-600 dark:text-white w-5 h-5 mr-3" />
                            <p className="text-xs light:text-gray-dark-600 dark:text-white">logout</p>
                        </li>
                    </ul>

                    <div className="flex items-center justify-between p-4">
                        <div className="flex justify-between items-center w-[248px] h-[56px] p-4 rounded-lg bg-gray-light-100">
                            <div className="flex items-center">

                                <img src="/adalink.png" alt="adalink"
                                    width={88}
                                    height={24}
                                    className="mr-3inline-block dark:hidden"
                                />
                                <img
                                    src="/adalink-colored.png"
                                    alt="adalink"
                                    width={88}
                                    height={24}
                                    className="mr-3inline-block  light:hidden"
                                />
                            </div>
                            <div className="flex items-center">
                                <p className="text-xs light:text-gray-dark-600 dark:text-white">
                                    Premium
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}