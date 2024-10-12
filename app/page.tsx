import MemberHomepage from "@/components/MemberHomepage";
import ResearchHomepage from "@/components/ResearchHomepage";
import FunderHomepage from "@/components/FunderHomepage";

export const metadata = {
    title: "Morgan Lab",
    description:
        "Website for Morgan Lab at the University of Aberdeen: Life course engineering to promote healthy ageing",
    viewport: "width=device-width, initial-scale=1",
    icons: {
        icon: "/img/icon.png",
    },
	verification: {
		google: 'ZZZmoIrddz0n3aDCzk2PbAQrw9H0rPer6SQfEOyFkuY',
	}
};

export default function Home() {
    return (
        <>
			<ResearchHomepage />
            <hr className="border-t border-gray-600 w-3/4 mx-auto mt-8" />
			<MemberHomepage />
            <hr className="border-t border-gray-600 w-3/4 mx-auto mt-8" />
            <FunderHomepage />
        </>
    );
}
