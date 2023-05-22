import {Metadata} from "next";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <section id={'home-page'}>
        {children}
        </section>
    )
}

export const metadata: Metadata = {
    title: 'Home Page - Kit',
};