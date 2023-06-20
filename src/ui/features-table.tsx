import styles from "./features-table.module.css";

export default function FeaturesTable({ data }: { data: Array<Array<string | React.ReactNode>> }) {
	return (
		<table>
			<thead className={styles.tableHead}>
				<tr>{data && data[0].map((element, i) => <th key={i}>{element}</th>)}</tr>
			</thead>
			<tbody>
				{data &&
					data.slice(1).map((element, i) => (
						<tr key={i}>
							{data.slice(1)[i].map((nestedElement, j) => (
								<td key={j}>{nestedElement}</td>
							))}
						</tr>
					))}
			</tbody>
		</table>
	);
}
