import {Metadata} from "next";
import '@css/globals.css';

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={'flex justify-center items-center'}>
                <main className={'container max-w-2xl prose lg:prose-xl prose-slate pt-10'}>
                    {children}
                </main>
            </body>
        </html>
    )
}

export const metadata: Metadata = {
    title: 'Root Page - Kit',
};