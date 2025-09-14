import HeroBlog from "@/components/sections/blog/HeroBlog";
import LatestPosts from "@/components/sections/blog/LatestPosts";
import PostsGrid from "@/components/sections/blog/PostsGrid";

export default function Blog() {
    return (
        <>
            <HeroBlog />
            <LatestPosts />
            <PostsGrid />
        </>
    );
}