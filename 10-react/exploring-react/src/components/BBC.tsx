import { Props } from "./types";

function BBC({ team }: Props) {
	return <section>
		<p>
			Hello from the BBC {team} team!
		</p>
	</section>
}

export default BBC;