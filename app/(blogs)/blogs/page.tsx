import HeroBlog from "@/components/sections/blog/HeroBlog";
import LatestPosts from "@/components/sections/blog/LatestPosts";
import PostsGrid from "@/components/sections/blog/PostsGrid";
import Image from "next/image";

export default function Blog() {
    return (
        <>
            <HeroBlog />
            <LatestPosts />
            <PostsGrid />
        </>
    );
}