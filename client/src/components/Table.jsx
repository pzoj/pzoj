import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark, faFile } from "@fortawesome/free-regular-svg-icons";

const Table = (props) => {
	const { data } = props;

	return (
		<div className="w-full bg-dark-1 px-[1.5rem] py-[1.5rem] border border-border rounded">
			<table className="w-full">
				<thead>
					<tr className="text-grey-1">
						<th className="pb-3">Status</th>
						<th className="pb-3">Problem</th>
						<th className="pb-3">Editorial</th>
					</tr>
				</thead>

				<tbody className="border-t border-border">
					{
						data.map((problem, idx) => {
							return (
								<tr key={idx} className={`text-center text-grey-1 ${idx % 2 && "bg-dark-2"}`}>
									<td className="py-3">
										{problem.status ? <FontAwesomeIcon icon={faCircleCheck} className="w-[1.2rem] m-auto text-xl text-emerald-400" /> : <FontAwesomeIcon icon={faCircleXmark} className="w-[1.2rem] m-auto text-xl text-red-500" />}
									</td>
									<td className="py-3">
										<Link
											href={problem.problemLink}
											className="text-blue-1 transition duration-200 hover:text-blue-0"
										>
											{problem.problemTitle}
										</Link>
									</td>
									<td className="py-3">
										{
											problem.editorialLink &&
											<Link
												href={problem.editorialLink}
												className=""
											>
												<FontAwesomeIcon icon={faFile} className="w-[0.9rem] m-auto text-xl text-sky-500" />
											</Link>
										}
									</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</div>
	);
};

export default Table;