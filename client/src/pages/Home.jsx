import { Hero } from "../components/Hero/Hero"
import { RecentlyAdded } from "../components/Hero/RecentlyAdded"


export const Home = () => {
    return (
        <div className="bg-zinc-900">
            <Hero/>
            <RecentlyAdded/>
        </div>
    )
}