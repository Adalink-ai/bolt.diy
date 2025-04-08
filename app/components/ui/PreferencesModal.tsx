
import { CircleHelp } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './Sheet'


export const PreferencesModal = ({
    open,
    onOpenChange,
}: {
    open: boolean
    onOpenChange: (open: boolean) => void
}) => {

    return (
        <div className="">
            <Sheet open={open} onOpenChange={onOpenChange}>
                <SheetContent
                    side="right"
                    className="bg-gray-light-050 border border-gray-light-050 sm:max-w-[594px] overflow-y-auto"
                >
                    <div className="border border-red">
                        <SheetHeader className="p-6">
                            <div className="flex items-center">
                                <SheetTitle className="text-xl font-semibold">
                                    {'Profile'}
                                </SheetTitle>
                                <CircleHelp className="ml-2 text-primary-500" />
                            </div>
                        </SheetHeader>

                        <div className="p-6">
                            <div className=" w-full flex flex-col p-6 border border-white rounded-lg bg-white">
                                <p className="text-lg text-center font-medium mb-4">
                                    {'title'}
                                </p>
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                        {/* <Image
                      src="/assets/person2D.svg"
                      alt="icon"
                      width={64}
                      height={64}
                      className="rounded-full cursor-pointer"
                    /> */}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-lg font-medium mb-4">
                                            {'profile'}
                                        </p>
                                        <span className="text-xs text-dark-600">
                                            JPG, GIF ou PNG. Máximo 2MB
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium rounded-md text-gray-700 mb-1">
                                            {'name'}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ex: Rodrigo Garro"
                                            className="w-full px-3 py-2 border border-gray-light-300 text-black rounded-md focus:ring-2 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            {'whatsApp number'}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ex: +55 11 99999 9999"
                                            className="w-full px-3 py-2 border border-gray-light-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            {'email'}
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="email.exemplo@gmail.com"
                                            className="w-full px-3 py-2 border border-gray-light-300 bg-gray-light-200 rounded-md focus:ring-2 focus:ring-purple-500 bg-gray-100 focus:outline-none"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg p-6 mt-6">
                                <div className="flex justify-center items-center">
                                    <h3 className="text-lg font-medium mb-2  ">
                                        {'notification'}
                                    </h3>
                                    <CircleHelp className="ml-2 text-primary-500" />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="text-sm font-medium">
                                                {'send_email_notification'}
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                {'send_email_notification_description'}
                                            </p>
                                        </div>
                                        <label className="flex items-center cursor-pointer">
                                            <div className="relative">
                                                <input type="checkbox" className="sr-only" />
                                                <div
                                                    className={`w-10 h-4 bg-gray-300 rounded-full shadow-inner transition-colors duration-300`}
                                                />
                                                <div
                                                    className={`dot absolute -left-1 -top-1 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 translate-x-full`}
                                                />
                                            </div>
                                        </label>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="text-sm font-medium">
                                                {'send_whatsapp_notification'}
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                {'send_whatsapp_notification_description'}
                                            </p>
                                        </div>
                                        <label className="flex items-center cursor-pointer">
                                            <div className="relative">
                                                <input type="checkbox" className="sr-only" />
                                                <div
                                                    className={`w-10 h-4 bg-gray-300 rounded-full shadow-inner transition-colors duration-300`}
                                                />
                                                <div
                                                    className={`dot absolute -left-1 -top-1 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 translate-x-full`}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex left-0 space-x-4">
                                <button className="flex bg-white px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
                                    Voltar
                                </button>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}