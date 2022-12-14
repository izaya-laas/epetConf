import {
	AiOutlineTwitter,
	AiOutlineInstagram,
	AiFillYoutube,
	AiFillLinkedin,
} from "react-icons/ai";
import speakers from "../../db/speakers.json";
import Subtitle from "../Subtitle";

const Speakers = () => {
	return (
		<section id="oradores" className="text-3xl px-2 desktop:w-3/5 mx-auto font-poppins pb-20 ">
			<Subtitle className="pb-4">Oradores</Subtitle>
			<section className="grid grid-cols-2 gap-x-1 tablet:grid-cols-3 tablet:px-10 desktop:px-0 font-inter">
				{speakers.map((speaker) => (
					<figure
						id={speaker.id}
						className="mx-auto flex flex-col gap-y-2 rounded-2xl pt-16 to-op-primary-color relative ">
						<img
							className="block w-36 h-36 desktop:w-44 desktop:h-44 border-8 mx-auto rounded-full object-cover"
							src={speaker.src}
							alt={speaker.name}
						/>
						<div className="relative bottom-6">
							<h2 className=" bg-primary-color text-xl font-bold ">{speaker.name}</h2>
							<p className="text-sm font-medium">{speaker.ocupation}</p>
							<nav>
								<ul className="flex text-xl justify-center gap-x-2">
									{speaker.social.twitter && (
										<li>
											<a href={speaker.social.twitter} target="_BLANCK" rel="noopener">
												<AiOutlineTwitter />
											</a>
										</li>
									)}
									{speaker.social.instagram && (
										<li>
											<a href={speaker.social.instagram} target="_BLANCK" rel="noopener">
												<AiOutlineInstagram />
											</a>
										</li>
									)}
									{speaker.social.youtube && (
										<li>
											<a href={speaker.social.youtube} target="_BLANCK" rel="noopener">
												<AiFillYoutube />
											</a>
										</li>
									)}
									{speaker.social.linkedin && (
										<li>
											<a href={speaker.social.linkedin} target="_BLANCK" rel="noopener">
												<AiFillLinkedin />
											</a>
										</li>
									)}
								</ul>
							</nav>
						</div>
					</figure>
				))}
			</section>
		</section>
	);
};

export default Speakers;
