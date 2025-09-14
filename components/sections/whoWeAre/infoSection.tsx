export default function InfoSection({sectionSpan, sectionContent} : {sectionSpan: string, sectionContent: string}) {
    return (
        <div className="p-16 items-center">
            <h1 className="text-6xl text-center text-[#CBC5B9] font-bold">
                <span className="text-blue-400">{sectionSpan}</span> {sectionContent}
            </h1>
        </div>
    )
}