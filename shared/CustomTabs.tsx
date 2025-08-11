// "use client"
//
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import clsx from "clsx"
//
// interface TabItem {
//     label: string
//     value: string
//     icon?: React.ReactNode
//     content: React.ReactNode
// }
//
// interface CustomTabsProps {
//     defaultValue: string
//     tabs: TabItem[]
// }
//
// export const CustomTabs: React.FC<CustomTabsProps> = ({ defaultValue, tabs }) => {
//     return (
//         <Tabs defaultValue={defaultValue} >
//             <TabsList
//                 className=" flex mt-6 sm:gap-2 overflow-x-auto sm:flex-wrap no-scrollbar border bg-muted/30 p-1 rounded-full"
//             >
//                 {tabs.map(({ label, value, icon }) => (
//                     <TabsTrigger
//                         key={value}
//                         value={value}
//                         className={clsx(
//                             "flex items-center gap-1 px-4 py-3 rounded-full text-sm whitespace-nowrap",
//                             "transition-colors duration-200",
//                             "data-[state=active]:bg-primary data-[state=active]:text-white",
//                             "data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground"
//                         )}
//                     >
//                         {icon && <span className="text-lg">{icon}</span>}
//                         <span>{label}</span>
//                     </TabsTrigger>
//                 ))}
//             </TabsList>
//             {tabs.map(({ value, content }) => (
//                 <TabsContent
//                     key={value}
//                     value={value}
//                     className="py-6 space-y-4"
//                 >
//                     {content}
//                 </TabsContent>
//             ))}
//         </Tabs>
//     )
// }
//
//
//

// "use client"

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// interface TabItem {
//     label: string
//     value: string
//     icon?: React.ReactNode
//     content: React.ReactNode
// }

// interface CustomTabsProps {
//     defaultValue: string
//     tabs: TabItem[]
// }

// const tabTriggerClass =
//     "data-[state=active]:after:bg-primary px-1  justify-start data-[state=active]:after:top-[33px] max-w-36 dark:data-[state=active]:border-none dark:data-[state=active]:bg-background relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none   "

// export const CustomTabs: React.FC<CustomTabsProps> = ({ defaultValue, tabs }) => {
//     return (
//         <Tabs defaultValue={defaultValue}>
//             <TabsList className="w-full overflow-x-auto  mt-6 flex-wrap no-scrollbar justify-start rounded-none border-b p-0 bg-transparent">
//                 {tabs.map(({ label, value, icon }) => (
//                     <TabsTrigger key={value} value={value} className={tabTriggerClass}>
//                         {icon} {label}
//                     </TabsTrigger>
//                 ))}
//             </TabsList>
//             {tabs.map(({ value, content }) => (
//                 <TabsContent key={value} value={value} className="flex flex-col space-y-8 py-4">
//                     {content}
//                 </TabsContent>
//             ))}
//         </Tabs>
//     )
// }
