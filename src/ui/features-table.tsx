export default function FeaturesTable({ data }: { data: Array<Array<string | React.ReactNode>> }) {
	return (
		<table>
			<thead className="sticky top-0 bg-white">
				<tr>{data && data[0].map((element, i) => <th key={i}>{element}</th>)}</tr>
			</thead>
			<tbody>
				{data &&
					data.slice(1).map((element, i) => (
						<tr key={i}>
							{data.slice(1)[i].map((nestedElement, j) => (
								<td className="[&>*]:inline" key={j}>{nestedElement}</td>
							))}
						</tr>
					))}
			</tbody>
		</table>
	);
}
